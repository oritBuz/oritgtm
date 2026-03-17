// ============================================================
// ORIT GTM — Main Script
// ============================================================

document.addEventListener('DOMContentLoaded', () => {

  // --- Lucide Icons ---
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  // --- Nav: add .scrolled class on scroll ---
  const nav = document.querySelector('.nav');
  if (nav) {
    const onScroll = () => {
      nav.classList.toggle('scrolled', window.scrollY > 12);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // --- Mobile nav toggle ---
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks  = document.querySelector('.nav-links');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', isOpen);
      // swap icon
      const icon = navToggle.querySelector('[data-lucide]');
      if (icon) {
        icon.setAttribute('data-lucide', isOpen ? 'x' : 'menu');
        lucide.createIcons();
      }
    });

    // close on link click
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
        const icon = navToggle.querySelector('[data-lucide]');
        if (icon) {
          icon.setAttribute('data-lucide', 'menu');
          lucide.createIcons();
        }
      });
    });
  }

  // --- Scroll Animations via IntersectionObserver ---
  const animateEls = document.querySelectorAll('.animate-on-scroll');
  if (animateEls.length > 0) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    animateEls.forEach(el => observer.observe(el));
  }

  // --- Active nav link highlight ---
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // --- Contact form: handle Netlify submission & show success ---
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const btn = form.querySelector('.form-submit');
      const originalText = btn.innerHTML;

      btn.disabled = true;
      btn.innerHTML = '<i data-lucide="loader-2" style="animation:spin 1s linear infinite;width:18px;height:18px;"></i> Sending...';
      lucide.createIcons();

      try {
        const formData = new FormData(form);
        const response = await fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams(formData).toString()
        });

        if (response.ok) {
          form.style.display = 'none';
          const success = document.getElementById('form-success');
          if (success) success.style.display = 'block';
        } else {
          throw new Error('Network response was not ok');
        }
      } catch (err) {
        btn.disabled = false;
        btn.innerHTML = originalText;
        lucide.createIcons();
        alert('Something went wrong. Please try again or email me directly.');
      }
    });
  }

});

// CSS for loader spin (injected)
const spinStyle = document.createElement('style');
spinStyle.textContent = '@keyframes spin { to { transform: rotate(360deg); } }';
document.head.appendChild(spinStyle);
