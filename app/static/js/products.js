// Products page functionality

// Product filtering
const filterBtns = document.querySelectorAll('.filter-btn');
const productItems = document.querySelectorAll('.product-item');

filterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        // Remove active class from all buttons
        filterBtns.forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        this.classList.add('active');
        
        const filterValue = this.getAttribute('data-filter');
        
        productItems.forEach(item => {
            if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                item.style.display = 'block';
                item.style.animation = 'slideIn 0.6s ease-out';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// Pagination functionality
const pageBtns = document.querySelectorAll('.page-btn');
pageBtns.forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        
        if (this.classList.contains('prev-btn') || this.classList.contains('next-btn')) {
            console.log('Pagination clicked');
        } else {
            pageBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            console.log('Page ' + this.textContent + ' selected');
        }
    });
});

// Product action buttons
const productActionBtns = document.querySelectorAll('.product-action-btn');
productActionBtns.forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        
        const originalText = this.textContent;
        this.textContent = '✓ Added to Cart!';
        this.style.background = 'linear-gradient(90deg, #00f5a0, #00d4ff)';
        
        setTimeout(() => {
            this.textContent = originalText;
            this.style.background = '';
        }, 2000);
    });
});

// Search functionality (if you add a search feature)
const searchInput = document.querySelector('.search-input');
if (searchInput) {
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        productItems.forEach(item => {
            const productName = item.querySelector('h3').textContent.toLowerCase();
            if (productName.includes(searchTerm)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
}

// Price range filter (if you add price filtering)
const priceRange = document.querySelector('.price-range');
if (priceRange) {
    priceRange.addEventListener('change', function() {
        const maxPrice = parseInt(this.value);
        productItems.forEach(item => {
            const priceText = item.querySelector('.product-price').textContent;
            const price = parseFloat(priceText.replace('$', ''));
            if (price <= maxPrice) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
}