// Small progressive enhancements. The page works fully without this file.
(function () {
  var root = document.documentElement;

  // ---------- Theme toggle ----------
  // With no stored choice the CSS follows the system setting; a click stores
  // an explicit "light" or "dark" choice.
  var dark = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;

  function current() {
    var t = root.getAttribute('data-theme');
    if (t === 'light' || t === 'dark') return t;
    return dark && dark.matches ? 'dark' : 'light';
  }

  var toggles = document.querySelectorAll('.theme-toggle');
  function sync() {
    var next = current() === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', current());
    toggles.forEach(function (b) {
      b.setAttribute('aria-label', 'Switch to ' + next + ' theme');
      var label = b.querySelector('.label');
      if (label) label.textContent = next === 'dark' ? 'Dark theme' : 'Light theme';
    });
  }
  toggles.forEach(function (b) {
    b.hidden = false;
    b.addEventListener('click', function () {
      var next = current() === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) {}
      sync();
    });
  });
  sync();
  if (dark && dark.addEventListener) {
    dark.addEventListener('change', function () {
      var stored = null; try { stored = localStorage.getItem('theme'); } catch (e) {}
      if (!stored) { root.removeAttribute('data-theme'); sync(); }
    });
  }

  // ---------- Print (CV page) ----------
  var printBtn = document.querySelector('[data-print]');
  if (printBtn) {
    printBtn.hidden = false;
    printBtn.addEventListener('click', function () { window.print(); });
  }

  // ---------- Current section in the nav ----------
  var links = Array.prototype.slice.call(document.querySelectorAll('.section-nav a[href^="#"]'));
  var sections = links.map(function (a) { return document.getElementById(a.getAttribute('href').slice(1)); });

  function mark(id) {
    links.forEach(function (a) {
      var on = a.getAttribute('href') === '#' + id;
      if (on) {
        a.setAttribute('aria-current', 'true');
        // keep the active pill visible in the scrollable phone nav
        var ul = a.closest('ul');
        if (ul && ul.scrollWidth > ul.clientWidth) {
          var l = a.offsetLeft, r = l + a.offsetWidth;
          if (l < ul.scrollLeft || r > ul.scrollLeft + ul.clientWidth) ul.scrollLeft = l - 16;
        }
      } else {
        a.removeAttribute('aria-current');
      }
    });
  }

  if (sections.every(Boolean) && sections.length) {
    var ticking = false;
    var update = function () {
      ticking = false;
      // active = last section whose top has passed 35% of the viewport;
      // at the very bottom of the page, the last section
      var line = window.innerHeight * 0.35, active = null;
      sections.forEach(function (s) { if (s.getBoundingClientRect().top <= line) active = s.id; });
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) {
        active = sections[sections.length - 1].id;
      }
      if (active) mark(active); else links.forEach(function (a) { a.removeAttribute('aria-current'); });
    };
    window.addEventListener('scroll', function () {
      if (!ticking) { ticking = true; requestAnimationFrame(update); }
    }, { passive: true });
    window.addEventListener('resize', update);
    update();
  }

  // ---------- Year ----------
  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
})();
