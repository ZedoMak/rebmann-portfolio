// Theme Toggle
const themeToggle = document.querySelector('.theme-toggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
  
  // Save preference to localStorage
  const isLightMode = document.body.classList.contains('light-mode');
  localStorage.setItem('lightMode', isLightMode);
  
  // Update shapes visibility in light mode
  document.querySelectorAll('.shape').forEach(shape => {
    shape.style.opacity = isLightMode ? '0.3' : '0.7';
  });
});

// Check for saved theme preference
if (localStorage.getItem('lightMode') === 'true') {
  document.body.classList.add('light-mode');
}

// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

// Scroll Animations
const animateOnScroll = () => {
  const sections = document.querySelectorAll('section');
  const projectCards = document.querySelectorAll('.project-card');
  
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    
    if (sectionTop < windowHeight * 0.75) {
      section.classList.add('in-view');
    }
  });
  
  projectCards.forEach((card, index) => {
    const cardTop = card.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    
    if (cardTop < windowHeight * 0.85) {
      // Staggered animation
      setTimeout(() => {
        card.classList.add('in-view');
      }, index * 100);
    }
  });
};

// Run on load and scroll
window.addEventListener('load', animateOnScroll);
window.addEventListener('scroll', animateOnScroll);

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
// Lazy load images
const lazyLoadImages = () => {
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    
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
  
    lazyImages.forEach(img => imageObserver.observe(img));
  };
  
  // Initialize optimizations
  window.addEventListener('DOMContentLoaded', () => {
    lazyLoadImages();
    
    // Preconnect to external domains
    const preconnect = document.createElement('link');
    preconnect.rel = 'preconnect';
    preconnect.href = 'https://fonts.gstatic.com';
    document.head.appendChild(preconnect);
  });
  // Custom Cursor
const initCursor = () => {
    const cursor = document.createElement('div');
    const cursorFollower = document.createElement('div');
    cursor.classList.add('cursor');
    cursorFollower.classList.add('cursor-follower');
    document.body.appendChild(cursor);
    document.body.appendChild(cursorFollower);
  
    document.addEventListener('mousemove', (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
      cursorFollower.style.left = `${e.clientX}px`;
      cursorFollower.style.top = `${e.clientY}px`;
    });
  
    // Hover effects
    const hoverElements = document.querySelectorAll('a, button, .project-card, .skill');
    hoverElements.forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursor.classList.add('cursor-active');
        cursorFollower.classList.add('cursor-follower-active');
      });
      el.addEventListener('mouseleave', () => {
        cursor.classList.remove('cursor-active');
        cursorFollower.classList.remove('cursor-follower-active');
      });
    });
  };
  
  
  // Initialize cursor
  initCursor();

  // Particle Effect
const initParticles = () => {
    const hero = document.querySelector('.hero');
    const particleCount = window.innerWidth < 768 ? 30 : 100;
    
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      
      // Random properties
      const size = Math.random() * 5 + 1;
      const posX = Math.random() * window.innerWidth;
      const posY = Math.random() * window.innerHeight;
      const delay = Math.random() * 5;
      const duration = Math.random() * 10 + 5;
      
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${posX}px`;
      particle.style.top = `${posY}px`;
      particle.style.animationDelay = `${delay}s`;
      particle.style.animationDuration = `${duration}s`;
      
      hero.appendChild(particle);
    }
  };

  // Debounce scroll events
let isScrolling;
window.addEventListener('scroll', () => {
  window.clearTimeout(isScrolling);
  isScrolling = setTimeout(() => {
    animateOnScroll();
  }, 66); // 60fps
}, false);

// Load non-critical CSS
const loadNonCriticalCSS = () => {
  const fontCSS = document.createElement('link');
  fontCSS.rel = 'stylesheet';
  fontCSS.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700&display=swap';
  document.head.appendChild(fontCSS);
};

window.addEventListener('load', () => {
  loadNonCriticalCSS();
  initParticles();
});

  