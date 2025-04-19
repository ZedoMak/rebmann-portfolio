document.addEventListener('DOMContentLoaded', () => {
    // Theme Toggle
    const themeToggle = document.querySelector('.theme-toggle');
    if (themeToggle) {
      themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
        localStorage.setItem('lightMode', document.body.classList.contains('light-mode'));
      });
      
      if (localStorage.getItem('lightMode') === 'true') {
        document.body.classList.add('light-mode');
      }
    }
  
    // Mobile Menu
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    if (mobileMenuBtn && navLinks) {
      mobileMenuBtn.addEventListener('click', () => navLinks.classList.toggle('active'));
      document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => navLinks.classList.remove('active'));
      });
    }
  
    // Scroll Animations
    const animateOnScroll = () => {
      document.querySelectorAll('section, .project-card').forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75) {
          el.classList.add('in-view');
        }
      });
    };
  
    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth' });
      });
    });
  
    // Initialize everything
    window.addEventListener('load', () => {
      animateOnScroll();
      initCursor();
      initParticles();
      document.querySelector('.loader').style.display = 'none';
    });
    window.addEventListener('scroll', animateOnScroll);
  
    // Custom Cursor
    function initCursor() {
      const cursor = document.createElement('div');
      cursor.classList.add('cursor');
      document.body.appendChild(cursor);
  
      document.addEventListener('mousemove', (e) => {
        cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      });
    }
  
    // Particle Effect
    function initParticles() {
      const hero = document.querySelector('.hero');
      if (!hero) return;
      
      const count = window.innerWidth < 768 ? 20 : 50;
      for (let i = 0; i < count; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.cssText = `
          left: ${Math.random() * 100}%;
          top: ${Math.random() * 100}%;
          width: ${Math.random() * 5 + 2}px;
          height: ${Math.random() * 5 + 2}px;
          animation-duration: ${Math.random() * 10 + 5}s;
          animation-delay: ${Math.random() * 5}s;
        `;
        hero.appendChild(particle);
      }
    }
  });