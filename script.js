// Mobile Navigation Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

if (hamburger && navLinks) {
    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        const isActive = navLinks.classList.contains('active');
        hamburger.setAttribute('aria-expanded', isActive);

        // Animate hamburger
        const spans = hamburger.querySelectorAll('span');
        if (isActive) {
            spans[0].style.transform = 'rotate(45deg) translateY(10px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translateY(-10px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
}

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(function(link) {
    link.addEventListener('click', function() {
        if (navLinks) {
            navLinks.classList.remove('active');
        }
        if (hamburger) {
            hamburger.setAttribute('aria-expanded', 'false');
            const spans = hamburger.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
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
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', function() {
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(10, 22, 40, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
        } else {
            navbar.style.background = 'rgba(10, 22, 40, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    }
});

// Handle order form submission
function handleOrder(event) {
    event.preventDefault();

    var productSelect = document.getElementById('product');
    var emailInput = document.getElementById('email');
    var selectedProduct = productSelect.value;
    var email = emailInput.value;

    if (!selectedProduct) {
        alert('Please select a knife from the dropdown menu.');
        return;
    }

    // Store order info and redirect to PayPal
    localStorage.setItem('finblade_order', JSON.stringify({
        product: selectedProduct,
        email: email,
        timestamp: new Date().toISOString()
    }));

    buyWithPayPal(selectedProduct);
}

// PayPal Payment Function
function buyWithPayPal(product) {
    var products = {
        'saltedge': { name: 'SaltEdge 7"', price: 149.99 },
        'tideflex': { name: 'TideFlex 9"', price: 179.99 },
        'minicatch': { name: 'MiniCatch 5"', price: 119.99 }
    };

    var item = products[product];
    if (!item) {
        alert('Invalid product selected.');
        return;
    }

    // TODO: Replace with your actual PayPal business email
    var paypalEmail = 'YOUR_PAYPAL_EMAIL@example.com';
    var paypalButtonLink = 'https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=' +
        encodeURIComponent(paypalEmail) +
        '&item_name=' + encodeURIComponent(item.name) +
        '&amount=' + item.price +
        '&currency_code=USD';

    window.open(paypalButtonLink, '_blank');
}

// Intersection Observer for scroll animations
function initScrollAnimations() {
    var observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('[data-animate]').forEach(function(el) {
        observer.observe(el);
    });
}

// Parallax effect for hero section
window.addEventListener('scroll', function() {
    var hero = document.querySelector('.hero');
    if (hero) {
        var scrolled = window.pageYOffset;
        if (scrolled < window.innerHeight) {
            hero.style.transform = 'translateY(' + (scrolled * 0.3) + 'px)';
        }
    }
});

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', function() {
    initScrollAnimations();
    console.log('%c🔪 FinBlade - Premium Fishing Knives', 'font-size: 16px; font-weight: bold; color: #00bcd4;');
});
