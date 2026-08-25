/**
 * Return link
 * - Visiting the health-tech page sets a flag in localStorage
 * - Every other page reads that flag and reveals the bottom-right link
 * - The close button clears the flag, so the link stays gone until the
 *   visitor goes back to the health-tech page
 */
(function () {
  var STORAGE_KEY = 'ut-health-tech-visited';
  var SECTION = 'health-tech';

  // localStorage throws rather than returning null when storage is blocked
  // (Safari private browsing, "block all cookies"). Treat any failure as
  // "no flag" so the link fails closed instead of erroring.
  function read() {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      return null;
    }
  }

  function write() {
    try {
      localStorage.setItem(STORAGE_KEY, '1');
    } catch (e) {}
  }

  function clear() {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {}
  }

  // On the health-tech page: set the flag and stop. The partial renders
  // nothing here, so there is no link to wire up.
  if (document.body.getAttribute('data-section') === SECTION) {
    write();
    return;
  }

  var el = document.getElementById('return-link');
  if (!el) return;

  // Never visited, or previously dismissed: the link should not exist at all.
  if (read() !== '1') {
    el.remove();
    return;
  }

  var close = el.querySelector('.return-link-close');
  if (close) {
    close.addEventListener('click', function () {
      clear();
      // Hide rather than remove. visibility:hidden already takes it out of the
      // tab order and the accessibility tree, the fade needs the node to
      // survive, and the flag is gone so the next load removes it outright.
      // Removing on transitionend would never fire under reduced motion.
      el.classList.remove('is-visible');
      document.body.classList.remove('has-return-link');
    });
  }

  // Lets the footer reserve space so the popup never covers its legal links
  document.body.classList.add('has-return-link');

  requestAnimationFrame(function () { el.classList.add('is-visible'); });
})();
