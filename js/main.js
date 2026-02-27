/* ============================================================
   AI.MeD — main.js
   Navigation, scroll animations, IntersectionObserver, utilities
   ============================================================ */

(function () {
  'use strict';

  /* ----------------------------------------------------------
     1. STICKY NAV + BLUR ON SCROLL
  ---------------------------------------------------------- */
  const nav = document.querySelector('.nav');
  if (nav) {
    window.addEventListener('scroll', function () {
      nav.classList.toggle('scrolled', window.scrollY > 80);
    }, { passive: true });
  }

  /* ----------------------------------------------------------
     2. MOBILE MENU TOGGLE
  ---------------------------------------------------------- */
  const hamburger = document.querySelector('.nav-hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', function () {
      const isActive = hamburger.classList.toggle('active');
      mobileMenu.classList.toggle('active', isActive);
      document.body.style.overflow = isActive ? 'hidden' : '';
      hamburger.setAttribute('aria-expanded', isActive);
    });

    // Close on link click
    mobileMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ----------------------------------------------------------
     3. MOBILE ACCORDION (Platforms / Services dropdowns)
  ---------------------------------------------------------- */
  document.querySelectorAll('.mobile-accordion-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      const panel = btn.nextElementSibling;
      const isActive = btn.classList.toggle('active');
      if (panel) {
        panel.classList.toggle('active', isActive);
      }
    });
  });

  /* ----------------------------------------------------------
     4. SCROLL ANIMATIONS (IntersectionObserver)
  ---------------------------------------------------------- */
  var animatedEls = document.querySelectorAll('.animate-on-scroll');

  if (animatedEls.length && 'IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    animatedEls.forEach(function (el) {
      observer.observe(el);
    });
  }

  /* ----------------------------------------------------------
     5. SMOOTH SCROLL FOR ANCHOR LINKS
  ---------------------------------------------------------- */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href');
      if (targetId === '#') return;
      var target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        var offset = 80; // account for sticky nav
        var top = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top: top, behavior: 'smooth' });
      }
    });
  });

  /* ----------------------------------------------------------
     6. ANIMATED COUNTER (Count-up on scroll)
  ---------------------------------------------------------- */
  var counters = document.querySelectorAll('.count-up');

  if (counters.length && 'IntersectionObserver' in window) {
    var counterObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(function (el) {
      counterObserver.observe(el);
    });
  }

  function animateCounter(el) {
    var target = el.getAttribute('data-target');
    var suffix = el.getAttribute('data-suffix') || '';
    var prefix = el.getAttribute('data-prefix') || '';
    var numericTarget = parseFloat(target.replace(/,/g, ''));
    var duration = 1500;
    var startTime = null;

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      var progress = Math.min((timestamp - startTime) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      var current = Math.floor(eased * numericTarget);

      // Format with commas
      var formatted = current.toLocaleString();
      el.textContent = prefix + formatted + suffix;

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = prefix + target + suffix;
      }
    }

    requestAnimationFrame(step);
  }

  /* ----------------------------------------------------------
     7. TABS (Services page)
  ---------------------------------------------------------- */
  document.querySelectorAll('.tabs-nav').forEach(function (tabsNav) {
    var buttons = tabsNav.querySelectorAll('.tab-btn');
    var container = tabsNav.parentElement;
    var panels = container.querySelectorAll('.tab-panel');

    buttons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var targetPanel = btn.getAttribute('data-tab');

        buttons.forEach(function (b) { b.classList.remove('active'); });
        panels.forEach(function (p) { p.classList.remove('active'); });

        btn.classList.add('active');
        var panel = container.querySelector('#' + targetPanel);
        if (panel) panel.classList.add('active');
      });
    });
  });

  /* ----------------------------------------------------------
     8. HERO NODE NETWORK CANVAS ANIMATION
  ---------------------------------------------------------- */
  var heroCanvas = document.getElementById('heroCanvas');
  if (heroCanvas) {
    var ctx = heroCanvas.getContext('2d');
    var nodes = [];
    var nodeCount = 40;
    var maxDist = 150;

    function resizeCanvas() {
      heroCanvas.width = heroCanvas.parentElement.clientWidth;
      heroCanvas.height = heroCanvas.parentElement.clientHeight;
    }

    function initNodes() {
      nodes = [];
      for (var i = 0; i < nodeCount; i++) {
        nodes.push({
          x: Math.random() * heroCanvas.width,
          y: Math.random() * heroCanvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          r: Math.random() * 2 + 1
        });
      }
    }

    function drawNodes() {
      ctx.clearRect(0, 0, heroCanvas.width, heroCanvas.height);

      // Draw edges
      for (var i = 0; i < nodes.length; i++) {
        for (var j = i + 1; j < nodes.length; j++) {
          var dx = nodes[i].x - nodes[j].x;
          var dy = nodes[i].y - nodes[j].y;
          var dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxDist) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = 'rgba(124, 58, 237, ' + (0.15 * (1 - dist / maxDist)) + ')';
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      for (var k = 0; k < nodes.length; k++) {
        var n = nodes[k];
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(6, 182, 212, 0.4)';
        ctx.fill();

        // Move
        n.x += n.vx;
        n.y += n.vy;

        // Bounce
        if (n.x < 0 || n.x > heroCanvas.width) n.vx *= -1;
        if (n.y < 0 || n.y > heroCanvas.height) n.vy *= -1;
      }

      requestAnimationFrame(drawNodes);
    }

    resizeCanvas();
    initNodes();
    drawNodes();

    window.addEventListener('resize', function () {
      resizeCanvas();
      initNodes();
    });
  }

  /* ----------------------------------------------------------
     9. ACTIVE NAV LINK HIGHLIGHT
  ---------------------------------------------------------- */
  var currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(function (link) {
    var href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

})();
