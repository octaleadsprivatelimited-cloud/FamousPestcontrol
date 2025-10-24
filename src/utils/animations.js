// Animation utilities - Optimized for Performance
export const initScrollAnimations = () => {
  // Simplified - no complex animations for better performance
  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    el.classList.add('animated');
  });

  // Add basic hover effects only
  document.querySelectorAll('.service-card, .advantage-card, .testimonial-card, .stat-item').forEach(card => {
    card.classList.add('hover-lift');
  });
};

// Initialize animations when DOM is loaded
export const initAnimations = () => {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initScrollAnimations);
  } else {
    initScrollAnimations();
  }
};

// Add animation classes to elements
export const addAnimationClasses = () => {
  // Add scroll animation classes to sections
  document.querySelectorAll('section').forEach(section => {
    section.classList.add('animate-on-scroll');
  });

  // Add stagger reveal to grids
  document.querySelectorAll('.services-grid-3x3, .advantages-grid, .testimonials-grid, .stats-grid').forEach(grid => {
    grid.classList.add('stagger-reveal');
  });

  // Add specific animations to elements
  document.querySelectorAll('.section-header').forEach(header => {
    header.classList.add('slide-up-fade');
  });

  document.querySelectorAll('.service-card').forEach(card => {
    card.classList.add('bounce-in');
  });

  document.querySelectorAll('.advantage-card').forEach(card => {
    card.classList.add('slide-in-left');
  });

  document.querySelectorAll('.testimonial-card').forEach(card => {
    card.classList.add('slide-in-right');
  });

  document.querySelectorAll('.stat-item').forEach(item => {
    item.classList.add('zoom-in');
  });
};

// Parallax effect for hero section
export const initParallax = () => {
  const heroSection = document.querySelector('.hero-section');
  if (heroSection) {
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      const rate = scrolled * -0.5;
      heroSection.style.transform = `translateY(${rate}px)`;
    });
  }
};

// Counter animation for stats
export const animateCounters = () => {
  const counters = document.querySelectorAll('.stat-number');
  
  const animateCounter = (counter) => {
    const target = parseInt(counter.textContent.replace(/\D/g, ''));
    const increment = target / 100;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        counter.textContent = counter.textContent.replace(/\d+/, target);
        clearInterval(timer);
      } else {
        counter.textContent = counter.textContent.replace(/\d+/, Math.floor(current));
      }
    }, 20);
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  });

  counters.forEach(counter => observer.observe(counter));
};

// Initialize all animations - Optimized
export const initAllAnimations = () => {
  initAnimations();
  // Disabled heavy animations for better performance
  // addAnimationClasses();
  // initParallax();
  // animateCounters();
};
