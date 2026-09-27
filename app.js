(function () {
  // ---------- Theme ----------
  var root = document.documentElement;
  var btn = document.getElementById('themeBtn');
  var icon = document.getElementById('themeIcon');

  var SUN = '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>';
  var MOON = '<path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8Z"/>';

  function apply(theme) {
    root.setAttribute('data-theme', theme);
    if (icon) icon.innerHTML = theme === 'dark' ? SUN : MOON;
  }

  var saved = null;
  try { saved = localStorage.getItem('theme'); } catch (e) {}
  var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  apply(saved || (prefersDark ? 'dark' : 'light'));

  if (btn) {
    btn.addEventListener('click', function () {
      var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      apply(next);
      try { localStorage.setItem('theme', next); } catch (e) {}
    });
  }

  // ---------- Mobile menu ----------
  var menuBtn = document.getElementById('menuBtn');
  var topnav = document.getElementById('topnav');

  if (menuBtn && topnav) {
    menuBtn.addEventListener('click', function () {
      topnav.classList.toggle('open');
    });
    topnav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') topnav.classList.remove('open');
    });
  }

  // ---------- Scrollspy ----------
  var navLinks = Array.prototype.slice.call(document.querySelectorAll('.topnav a[data-sec]'));
  var byId = {};
  navLinks.forEach(function (a) { byId[a.getAttribute('data-sec')] = a; });

  var sections = navLinks
    .map(function (a) { return document.getElementById(a.getAttribute('data-sec')); })
    .filter(Boolean);

  function setActive(id) {
    navLinks.forEach(function (a) {
      a.classList.toggle('active', a.getAttribute('data-sec') === id);
    });
  }

  if ('IntersectionObserver' in window && sections.length) {
    var visible = {};
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        visible[en.target.id] = en.isIntersecting ? en.intersectionRatio : 0;
      });
      var best = null, bestRatio = 0;
      Object.keys(visible).forEach(function (id) {
        if (visible[id] > bestRatio) { bestRatio = visible[id]; best = id; }
      });
      if (best && byId[best]) setActive(best);
    }, { rootMargin: '-45% 0px -45% 0px', threshold: [0, 0.25, 0.5, 1] });
    sections.forEach(function (s) { io.observe(s); });
  }

  // ---------- Year ----------
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();
