// JavaScript cho website Chiến thắng Điện Biên Phủ

document.addEventListener('DOMContentLoaded', function() {
    // Khởi tạo tất cả các chức năng
    initScrollEffects();
    initNavigation();
    initMobileMenu();
    initScrollToTop();
    initLightbox();
    initSmoothScrolling();
    initHeaderScroll();
    initAnimationOnScroll();
});

// Hiệu ứng scroll và fade-in
function initScrollEffects() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Quan sát tất cả các elements có class fade-in
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(element => {
        observer.observe(element);
    });
}

// Navigation active state
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section, .hero');

    // Highlight active navigation item based on scroll position
    function updateActiveNav() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }

    // Update on scroll
    window.addEventListener('scroll', updateActiveNav);
    
    // Update on page load
    updateActiveNav();

    // Smooth scroll for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
            
            // Close mobile menu if open
            closeMobileMenu();
        });
    });
}

// Mobile menu functionality
function initMobileMenu() {
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const nav = document.getElementById('nav');

    mobileMenuToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        nav.classList.toggle('active');
        
        // Prevent body scroll when menu is open
        document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!nav.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
            closeMobileMenu();
        }
    });

    // Close menu on window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            closeMobileMenu();
        }
    });
}

function closeMobileMenu() {
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const nav = document.getElementById('nav');
    
    mobileMenuToggle.classList.remove('active');
    nav.classList.remove('active');
    document.body.style.overflow = '';
}

// Scroll to top button
function initScrollToTop() {
    const scrollToTopBtn = document.getElementById('scrollToTop');

    // Show/hide button based on scroll position
    function toggleScrollToTopBtn() {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.classList.add('show');
        } else {
            scrollToTopBtn.classList.remove('show');
        }
    }

    // Scroll to top when clicked
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Update on scroll
    window.addEventListener('scroll', toggleScrollToTopBtn);
}

// Lightbox functionality
function initLightbox() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');

    // Close lightbox when clicking outside image or close button
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox || e.target.classList.contains('lightbox-close')) {
            closeLightbox();
        }
    });

    // Close lightbox with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && lightbox.classList.contains('show')) {
            closeLightbox();
        }
    });
}

// Open lightbox function (called from HTML)
function openLightbox(imageSrc) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    
    lightboxImage.src = imageSrc;
    lightbox.classList.add('show');
    document.body.style.overflow = 'hidden';
}

// Close lightbox function (called from HTML)
function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    
    lightbox.classList.remove('show');
    document.body.style.overflow = '';
}

// Smooth scrolling for all internal links
function initSmoothScrolling() {
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    
    internalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if it's just "#" or already handled by navigation
            if (href === '#' || this.classList.contains('nav-link')) {
                return;
            }
            
            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Header scroll effect
function initHeaderScroll() {
    const header = document.getElementById('header');
    let lastScrollTop = 0;

    function handleHeaderScroll() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Add/remove scrolled class for styling
        if (scrollTop > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Hide/show header on scroll (optional)
        if (scrollTop > lastScrollTop && scrollTop > 200) {
            // Scrolling down
            header.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    }

    window.addEventListener('scroll', handleHeaderScroll);
}

// Advanced animation on scroll
function initAnimationOnScroll() {
    // Counter animation for hero stats
    const statNumbers = document.querySelectorAll('.stat-number');
    let hasAnimated = false;

    function animateCounters() {
        if (hasAnimated) return;
        
        const heroSection = document.querySelector('.hero');
        const heroRect = heroSection.getBoundingClientRect();
        
        if (heroRect.bottom > 0 && heroRect.top < window.innerHeight) {
            hasAnimated = true;
            
            statNumbers.forEach(stat => {
                const finalNumber = stat.textContent;
                const numericValue = parseInt(finalNumber.replace(/\D/g, ''));
                
                if (!isNaN(numericValue)) {
                    animateCounter(stat, 0, numericValue, 2000, finalNumber);
                }
            });
        }
    }

    // Parallax effect for hero background
    function parallaxEffect() {
        const scrolled = window.pageYOffset;
        const heroBackground = document.querySelector('.hero-background');
        
        if (heroBackground && scrolled < window.innerHeight) {
            const speed = scrolled * 0.5;
            heroBackground.style.transform = `translateY(${speed}px)`;
        }
    }

    // Stagger animation for timeline items
    function staggerTimelineAnimation() {
        const timelineItems = document.querySelectorAll('.timeline-item');
        
        timelineItems.forEach((item, index) => {
            const itemRect = item.getBoundingClientRect();
            
            if (itemRect.top < window.innerHeight && itemRect.bottom > 0) {
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'translateY(0)';
                }, index * 200);
            }
        });
    }

    window.addEventListener('scroll', function() {
        animateCounters();
        parallaxEffect();
        staggerTimelineAnimation();
    });

    // Initial check
    animateCounters();
}

// Counter animation helper function
function animateCounter(element, start, end, duration, originalText) {
    const startTime = performance.now();
    const isNumberOnly = /^\d+$/.test(originalText);
    
    function updateCounter(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function (ease-out)
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const current = Math.floor(start + (end - start) * easeOut);
        
        if (isNumberOnly) {
            element.textContent = current.toLocaleString();
        } else {
            // Preserve non-numeric parts
            element.textContent = originalText.replace(/\d+/, current.toLocaleString());
        }
        
        if (progress < 1) {
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = originalText;
        }
    }
    
    requestAnimationFrame(updateCounter);
}

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    // Navigate sections with arrow keys
    if (e.altKey) {
        const sections = Array.from(document.querySelectorAll('.section, .hero'));
        const currentSection = sections.find(section => {
            const rect = section.getBoundingClientRect();
            return rect.top <= 100 && rect.bottom > 100;
        });
        
        if (currentSection) {
            const currentIndex = sections.indexOf(currentSection);
            let targetIndex;
            
            if (e.key === 'ArrowDown' && currentIndex < sections.length - 1) {
                targetIndex = currentIndex + 1;
            } else if (e.key === 'ArrowUp' && currentIndex > 0) {
                targetIndex = currentIndex - 1;
            }
            
            if (targetIndex !== undefined) {
                e.preventDefault();
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = sections[targetIndex].offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        }
    }
});

// Performance optimization: Throttle scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Apply throttling to scroll events
const throttledScrollHandler = throttle(function() {
    // Any additional scroll handling can go here
}, 16); // ~60fps

window.addEventListener('scroll', throttledScrollHandler);

// Loading animation (optional)
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    
    // Trigger initial animations
    setTimeout(() => {
        const firstFadeElements = document.querySelectorAll('.hero .fade-in');
        firstFadeElements.forEach((element, index) => {
            setTimeout(() => {
                element.classList.add('visible');
            }, index * 200);
        });
    }, 100);
});

// Error handling for images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        img.addEventListener('error', function() {
            // Fallback for broken images
            this.style.display = 'none';
            console.warn('Image failed to load:', this.src);
        });
    });
});

// Accessibility improvements
document.addEventListener('DOMContentLoaded', function() {
    // Add skip link for keyboard navigation
    const skipLink = document.createElement('a');
    skipLink.href = '#gioi-thieu';
    skipLink.textContent = 'Bỏ qua đến nội dung chính';
    skipLink.className = 'skip-link';
    skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 6px;
        background: var(--primary-red);
        color: white;
        padding: 8px;
        text-decoration: none;
        border-radius: 4px;
        z-index: 1001;
        transition: top 0.3s;
    `;
    
    skipLink.addEventListener('focus', function() {
        this.style.top = '6px';
    });
    
    skipLink.addEventListener('blur', function() {
        this.style.top = '-40px';
    });
    
    document.body.insertBefore(skipLink, document.body.firstChild);
    
    // Improve focus management for mobile menu
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const nav = document.getElementById('nav');
    
    mobileMenuToggle.addEventListener('click', function() {
        if (nav.classList.contains('active')) {
            // Focus first nav link when menu opens
            const firstNavLink = nav.querySelector('.nav-link');
            if (firstNavLink) {
                setTimeout(() => firstNavLink.focus(), 100);
            }
        }
    });
});

// Console welcome message
console.log(`
🇻🇳 Chào mừng đến với trang web Chiến thắng Điện Biên Phủ!
📅 Kỷ niệm chiến thắng vĩ đại 7/5/1954
🎯 Website được phát triển với HTML, CSS, JavaScript
⭐ Lừng lẫy năm châu, chấn động địa cầu!
`);

// Export functions for global access (if needed)
window.openLightbox = openLightbox;
window.closeLightbox = closeLightbox;
