// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    // Animate sections on scroll
    const animatedElements = document.querySelectorAll(
        '.bio-item, .research-card, .card, .chapter-item'
    );
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        observer.observe(el);
    });

    // Staggered animation for hero highlights
    const highlights = document.querySelectorAll('.highlight-item');
    highlights.forEach((highlight, index) => {
        highlight.style.opacity = '0';
        highlight.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            highlight.style.transition = 'all 0.6s ease-out';
            highlight.style.opacity = '1';
            highlight.style.transform = 'translateY(0)';
        }, 300 + (index * 150));
    });

    // Animate profile placeholder on load
    const profilePlaceholder = document.querySelector('.profile-placeholder');
    if (profilePlaceholder) {
        profilePlaceholder.style.opacity = '0';
        profilePlaceholder.style.transform = 'scale(0.8)';
        
        setTimeout(() => {
            profilePlaceholder.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
            profilePlaceholder.style.opacity = '1';
            profilePlaceholder.style.transform = 'scale(1)';
        }, 200);
    }
});

// Add subtle parallax effect to hero background
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroBackground = document.querySelector('.hero-background');
    
    if (heroBackground && scrolled < window.innerHeight) {
        heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Enhanced hover effects for tech tags
document.addEventListener('DOMContentLoaded', () => {
    const techTags = document.querySelectorAll('.tech-tag, .method-tag');
    
    techTags.forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05) translateY(-2px)';
        });
        
        tag.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) translateY(0)';
        });
    });
});
