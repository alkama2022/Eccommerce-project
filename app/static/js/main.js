// ==================== INTERACTIVE FEATURES ====================

// Smooth scroll functionality
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Add to cart animation
const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Create ripple effect
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        
        // Show success message
        const originalText = this.textContent;
        this.textContent = '✓ Added to Cart!';
        this.style.background = 'linear-gradient(90deg, #00f5a0, #00d4ff)';
        
        setTimeout(() => {
            this.textContent = originalText;
            this.style.background = '';
            ripple.remove();
        }, 2000);
    });
});

// Navigation highlight on scroll
window.addEventListener('scroll', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
});

// Button hover effects
const buttons = document.querySelectorAll('.btn, .cart-btn');
buttons.forEach(btn => {
    btn.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px)';
    });
    
    btn.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Cart button interaction
const cartBtn = document.querySelector('.cart-btn');
if (cartBtn) {
    cartBtn.addEventListener('click', function() {
        alert('Shopping cart feature coming soon! 🛒');
    });
}

// Product card hover effect
const productCards = document.querySelectorAll('.product-card');
productCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-15px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Feature card interaction
const featureCards = document.querySelectorAll('.feature-card');
featureCards.forEach(card => {
    card.addEventListener('click', function() {
        this.style.transform = 'scale(1.05)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 200);
    });
});

// CTA Button interaction
const ctaButton = document.querySelector('.btn-cta');
if (ctaButton) {
    ctaButton.addEventListener('click', function() {
        alert('Welcome! Your journey to the future starts here! 🚀');
    });
}

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe cards for animation
const animateCards = document.querySelectorAll('.feature-card, .product-card, .section-title');
animateCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.6s ease-out';
    observer.observe(card);
});

// Mouse cursor glow effect
document.addEventListener('mousemove', function(e) {
    const x = e.clientX;
    const y = e.clientY;
    
    // Create a glow effect (optional - for performance, this is subtle)
    const glowElements = document.querySelectorAll('.navbar, .hero');
    glowElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (y >= rect.top && y <= rect.bottom) {
            const distX = (x - rect.left - rect.width / 2) / 50;
            const distY = (y - rect.top - rect.height / 2) / 50;
            el.style.backgroundPosition = `${distX}% ${distY}%`;
        }
    });
});

// Mobile menu toggle (if you add a mobile menu)
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', function() {
        const navMenu = document.querySelector('.nav-menu');
        navMenu.classList.toggle('active');
    });
}

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        console.log('Escape key pressed');
        // Close any open menus or modals
    }
});

// Performance optimization - Debounce scroll listener
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

// Lazy loading images (if you add images)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Console Easter egg
console.log('%c🚀 Welcome to RoboTech!', 'color: #00d4ff; font-size: 20px; font-weight: bold;');
console.log('%cPowered by Modern Frontend Technology', 'color: #00f5a0; font-size: 12px;');
console.log('%cJoin us on the journey to the future!', 'color: #ff006e; font-size: 12px;');

// Page load animation
window.addEventListener('load', function() {
    document.body.style.opacity = '1';
    console.log('Page loaded successfully!');
});

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', function() {
    console.log('Initializing RoboTech interface...');
    
    // Add any initialization code here
    const productCount = document.querySelectorAll('.product-card').length;
    const featureCount = document.querySelectorAll('.feature-card').length;
    console.log(`Loaded ${productCount} products and ${featureCount} features`);
});