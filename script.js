// Configuration - Edit this number to update remaining seats
const REMAINING_SEATS = 9; // Change this number to update the available seats

// Update seat counters on page load
document.addEventListener('DOMContentLoaded', function() {
    updateSeatCounters();
    initializeMobileMenu();
    initializeSmoothScroll();
    initializeScrollEffects();
    initializeCountdown();
});

// Update all seat counter elements
function updateSeatCounters() {
    const seatElements = ['seats-hero', 'seats-cta'];
    seatElements.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.textContent = REMAINING_SEATS;
        }
    });
    
    // Add urgency styling if seats are low
    if (REMAINING_SEATS <= 3) {
        document.querySelectorAll('.hero-badge, .cta-badge').forEach(badge => {
            badge.style.backgroundColor = 'rgba(239, 68, 68, 0.1)';
            badge.style.color = '#dc2626';
        });
    }
}

// Mobile menu functionality
function initializeMobileMenu() {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileNav = document.querySelector('.nav-mobile');
    const navLinks = document.querySelectorAll('.nav-mobile .nav-link');
    
    if (menuToggle && mobileNav) {
        menuToggle.addEventListener('click', function() {
            const isActive = mobileNav.classList.contains('active');
            
            if (isActive) {
                mobileNav.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
            } else {
                mobileNav.classList.add('active');
                menuToggle.setAttribute('aria-expanded', 'true');
            }
        });
        
        // Close mobile menu when clicking a nav link
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileNav.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
            });
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!menuToggle.contains(e.target) && !mobileNav.contains(e.target)) {
                mobileNav.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
            }
        });
    }
}

// Smooth scroll for anchor links
function initializeSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Scroll effects
function initializeScrollEffects() {
    const header = document.querySelector('.header');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Add shadow to header on scroll
        if (scrollTop > 10) {
            header.style.boxShadow = 'var(--shadow-md)';
        } else {
            header.style.boxShadow = 'var(--shadow-sm)';
        }
        
        // Animate elements on scroll
        animateOnScroll();
        
        lastScrollTop = scrollTop;
    });
}

// Animate elements when they come into view
function animateOnScroll() {
    const elements = document.querySelectorAll('.problem-card, .benefit-card, .process-step, .trust-item, .faq-item');
    
    elements.forEach(element => {
        if (!element.classList.contains('animated') && isElementInViewport(element)) {
            element.classList.add('animated');
            element.style.animation = 'fadeInUp 0.6s ease-out forwards';
        }
    });
}

// Check if element is in viewport
function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.9 &&
        rect.bottom >= 0
    );
}

// Countdown timer (optional urgency element)
function initializeCountdown() {
    // Add a countdown if seats are running low
    if (REMAINING_SEATS <= 5) {
        const ctaBadge = document.querySelector('.cta-badge span');
        if (ctaBadge) {
            // Set end date to 7 days from now
            const endDate = new Date();
            endDate.setDate(endDate.getDate() + 7);
            
            updateCountdown(endDate, ctaBadge);
            setInterval(() => updateCountdown(endDate, ctaBadge), 1000);
        }
    }
}

// Update countdown timer
function updateCountdown(endDate, element) {
    const now = new Date();
    const timeLeft = endDate - now;
    
    if (timeLeft > 0) {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        
        element.textContent = `⏰ Offre limitée : ${days}j ${hours}h ${minutes}m restantes`;
    } else {
        element.textContent = '⏰ Offre expirée';
    }
}

// Track CTA clicks for analytics (if you add analytics later)
document.querySelectorAll('.btn-primary').forEach(button => {
    button.addEventListener('click', function() {
        // You can add analytics tracking here
        console.log('CTA clicked:', this.textContent.trim());
    });
});

// Form validation (if you add a form later)
function validateForm(form) {
    const inputs = form.querySelectorAll('input[required], textarea[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            isValid = false;
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    });
    
    return isValid;
}

// Lazy loading for images (if you add images later)
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Performance optimization: Debounce function
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Add smooth reveal animation to hero stats
window.addEventListener('load', function() {
    const stats = document.querySelectorAll('.stat-number');
    stats.forEach((stat, index) => {
        setTimeout(() => {
            animateNumber(stat);
        }, 600 + (index * 200));
    });
});

// Animate numbers
function animateNumber(element) {
    const finalValue = element.textContent;
    const isPercentage = finalValue.includes('%');
    const numericValue = parseInt(finalValue);
    
    if (!isNaN(numericValue)) {
        let currentValue = 0;
        const increment = numericValue / 20;
        const timer = setInterval(() => {
            currentValue += increment;
            if (currentValue >= numericValue) {
                currentValue = numericValue;
                clearInterval(timer);
            }
            element.textContent = Math.floor(currentValue) + (isPercentage ? '%' : '');
        }, 50);
    }
}

// Add hover effect to benefit cards
document.querySelectorAll('.benefit-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Console message for developers
console.log('%c🚀 Site web créé par Sylvain VIZZINI', 'font-size: 16px; font-weight: bold; color: #f97316;');
console.log('Intéressé par une collaboration ? Réservez votre créneau gratuit !');

// Service Worker registration (for better performance)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        // Uncomment the following line if you add a service worker
        // navigator.serviceWorker.register('/sw.js');
    });
}