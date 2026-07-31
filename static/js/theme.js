/**
 * Theme switcher
 * - Dark is the default theme
 * - User preference is saved to localStorage and persists across pages
 */
(function () {
  var STORAGE_KEY = 'ut-theme';

  function getPreferred() {
    return localStorage.getItem(STORAGE_KEY);
  }

  function apply(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    // Update toggle button label if it exists
    var btn = document.getElementById('theme-toggle');
    if (btn) {
      var isLight = theme === 'light';
      btn.setAttribute('aria-label', isLight ? 'Switch to dark theme' : 'Switch to light theme');
      btn.querySelector('.icon-sun').style.display = isLight ? 'none' : 'block';
      btn.querySelector('.icon-moon').style.display = isLight ? 'block' : 'none';
    }
  }

  function toggle() {
    var current = document.documentElement.getAttribute('data-theme') || 'dark';
    var next = current === 'dark' ? 'light' : 'dark';
    localStorage.setItem(STORAGE_KEY, next);
    apply(next);
  }

  // Forced theme (e.g. health page is always light)
  var forced = document.documentElement.getAttribute('data-force-theme');
  if (forced) {
    apply(forced);
    window.toggleTheme = function () {};
    return;
  }

  // Determine initial theme
  var stored = getPreferred();
  if (stored) {
    apply(stored);
  } else {
    localStorage.setItem(STORAGE_KEY, 'dark');
    apply('dark');
  }

  // Expose toggle globally for the footer button
  window.toggleTheme = toggle;
})();
