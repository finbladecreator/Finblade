// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        
        // Animate hamburger
        const spans = hamburger.querySelectorAll('span');
        spans[0].style.transform = navLinks.classList.contains('active') 
            ? 'rotate(45deg) translateY(10px)' 
            : 'none';
        spans[1].style.opacity = navLinks.classList.contains('active') ? '0' : '1';
        spans[2].style.transform = navLinks.classList.contains('active') 
            ? 'rotate(-45deg) translateY(-10px)' 
            : 'none';
    });
}

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const spans = hamburger.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background on scroll
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(10, 22, 40, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.background = 'rgba(10, 22, 40, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Scroll to CTA function
function scrollToCTA() {
    const ctaSection = document.querySelector('#contact');
    if (ctaSection) {
        ctaSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Handle order form submission
function handleOrder(event) {
    event.preventDefault();
    
    const productSelect = document.getElementById('product');
    const selectedProduct = productSelect.value;
    
    if (!selectedProduct) {
        alert('Please select a knife from the dropdown menu.');
        return;
    }
    
    const productNames = {
        'saltedge': 'SaltEdge 7"',
        'tideflex': 'TideFlex 9"',
        'minicatch': 'MiniCatch 5"'
    };
    
    const productPrices = {
        'saltedge': '$89.99',
        'tideflex': '$99.99',
        'minicatch': '$69.99'
    };
    
    // In a real implementation, this would connect to a payment processor
    // For demo purposes, we'll show a confirmation message
    alert(`Thank you for your interest in the ${productNames[selectedProduct]} (${productPrices[selectedProduct]})!\n\nThis is a demo website. In production, this would connect to a payment processor like Stripe or PayPal to complete your order.\n\nWe'll be in touch soon!`);
    
    // Reset form
    event.target.reset();
}

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all feature cards and product cards
document.querySelectorAll('.feature-card, .product-card, .stat').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    const scrolled = window.pageYOffset;
    
    if (hero && scrolled < window.innerHeight) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Product card hover effect enhancement
document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.zIndex = '10';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.zIndex = '1';
    });
});

// Console welcome message
console.log('%c🔪 FinBlade - Premium Fishing Knives', 'font-size: 20px; font-weight: bold; color: #00bcd4;');
console.log('%cBuilt for saltwater anglers who demand excellence', 'font-size: 12px; color: #546e7a;');
console.log('%cInterested in our products? Visit our website to learn more!', 'font-size: 12px; color: #546e7a;');
