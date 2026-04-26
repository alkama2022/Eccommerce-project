// Contact page functionality

// Contact form handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            subject: document.getElementById('subject').value,
            category: document.getElementById('category').value,
            priority: document.getElementById('priority').value,
            message: document.getElementById('message').value,
            subscribe: document.getElementById('subscribe').checked
        };
        
        console.log('Form submitted:', formData);
        
        // Show success message
        const submitBtn = contactForm.querySelector('.form-submit');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = '✓ Message Sent!';
        submitBtn.style.background = 'linear-gradient(90deg, #00f5a0, #00d4ff)';
        
        // Reset form
        contactForm.reset();
        
        setTimeout(() => {
            submitBtn.textContent = originalText;
            submitBtn.style.background = '';
        }, 3000);
        
        // In a real application, you would send this data to a server
        // fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) })
    });
}

// FAQ accordion functionality
const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', function() {
        // Close other open items
        faqItems.forEach(otherItem => {
            if (otherItem !== item && otherItem.classList.contains('active')) {
                otherItem.classList.remove('active');
            }
        });
        
        // Toggle current item
        item.classList.toggle('active');
    });
});

// Live chat button
const liveCharBtn = document.querySelector('.contact-action-btn');
if (liveCharBtn && liveCharBtn.textContent.includes('Chat')) {
    liveCharBtn.addEventListener('click', function() {
        alert('Live chat feature coming soon!');
    });
}

// Form field validation
const formInputs = document.querySelectorAll('.form-group input, .form-group textarea');
formInputs.forEach(input => {
    input.addEventListener('blur', function() {
        if (this.hasAttribute('required') && this.value.trim() === '') {
            this.style.borderColor = '#ff6348';
        } else if (this.type === 'email') {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(this.value)) {
                this.style.borderColor = '#ff6348';
            } else {
                this.style.borderColor = '';
            }
        } else {
            this.style.borderColor = '';
        }
    });
});

// Social media links
const socialLinks = document.querySelectorAll('.social-link');
socialLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        // You can customize this to link to actual social media profiles
        console.log('Social media link clicked:', this.textContent);
    });
});

// Auto-resize textarea
const textarea = document.querySelector('.form-group textarea');
if (textarea) {
    textarea.addEventListener('input', function() {
        this.style.height = 'auto';
        this.style.height = (this.scrollHeight) + 'px';
    });
}

// Category and Priority selection handlers
const categorySelect = document.getElementById('category');
const prioritySelect = document.getElementById('priority');

if (categorySelect) {
    categorySelect.addEventListener('change', function() {
        console.log('Category selected:', this.value);
    });
}

if (prioritySelect) {
    prioritySelect.addEventListener('change', function() {
        console.log('Priority selected:', this.value);
    });
}