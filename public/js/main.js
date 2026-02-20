// OSY Systems - Main JavaScript

'use strict';

// ===== Header Scroll Effect =====
const header = document.querySelector('header');
if (header) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

// ===== Mobile Menu =====
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

if (menuToggle && mobileMenu) {
  menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    menuToggle.setAttribute(
      'aria-expanded',
      mobileMenu.classList.contains('active') ? 'true' : 'false'
    );
  });

  // Close menu when clicking a link
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// ===== Smooth Scroll for anchor links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ===== Intersection Observer for animations =====
const animateOnScroll = () => {
  const elements = document.querySelectorAll('.feature-card, .about-content, .contact-preview');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  });

  elements.forEach(el => observer.observe(el));
};

// ===== Contact Form Handler =====
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const submitBtn = contactForm.querySelector('[type="submit"]');
    const formData = new FormData(contactForm);
    
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';

    try {
      const response = await fetch(contactForm.action, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        contactForm.innerHTML = '<div class="form-success"><h3>Message sent!</h3><p>Thank you for reaching out. We will get back to you shortly.</p></div>';
      } else {
        throw new Error('Form submission failed');
      }
    } catch (err) {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Send Message';
      const errorEl = document.createElement('p');
      errorEl.className = 'form-error';
      errorEl.textContent = 'There was an error. Please try again or email us directly.';
      contactForm.appendChild(errorEl);
    }
  });
}

// ===== Init =====
document.addEventListener('DOMContentLoaded', () => {
  animateOnScroll();
  console.log('OSY Systems loaded');
});
