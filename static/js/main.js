// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.querySelector('.main-nav');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', function () {
    var expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', !expanded);
    nav.classList.toggle('open');
  });
});

// Lazy-load videos: only load when scrolled into view
document.addEventListener('DOMContentLoaded', function () {
  var basePath = document.body.getAttribute('data-base-path') || '';
  var videos = document.querySelectorAll('video source[data-src]');
  if (!videos.length) return;

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      var source = entry.target.querySelector('source[data-src]');
      if (!source) return;
      var src = source.getAttribute('data-src');
      // Prepend base path for absolute paths
      if (src.charAt(0) === '/') {
        src = basePath + src.substring(1);
      }
      source.setAttribute('src', src);
      source.removeAttribute('data-src');
      entry.target.load();
      observer.unobserve(entry.target);
    });
  }, { rootMargin: '200px' });

  videos.forEach(function (source) {
    observer.observe(source.closest('video'));
  });
});

// Testimonial click-to-play
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.testimonial-card[data-video-id]').forEach(function (card) {
    card.addEventListener('click', function () {
      var id = card.getAttribute('data-video-id');
      var thumb = card.querySelector('.testimonial-card-thumb');
      if (!thumb || card.classList.contains('is-playing')) return;
      var embed = document.createElement('div');
      embed.className = 'video-embed';
      embed.innerHTML = '<iframe src="https://www.youtube.com/embed/' + id + '?autoplay=1&rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
      thumb.replaceWith(embed);
      card.classList.add('is-playing');
    });
  });
});

// Email protection: the address is base64-encoded in a data attribute and
// assembled only on click, so it never sits in the raw HTML for scrapers.
document.addEventListener('DOMContentLoaded', function () {
  function showNote(el, addr, copied) {
    var note = el.parentNode ? el.parentNode.querySelector('.email-reveal-note') : null;
    if (!note) {
      note = document.createElement('p');
      note.className = 'email-reveal-note';
      el.insertAdjacentElement('afterend', note);
    }
    note.textContent = copied ? (addr + ' — copied to clipboard') : addr;
  }

  document.querySelectorAll('.email-protect').forEach(function (el) {
    el.addEventListener('click', function (e) {
      e.preventDefault();
      var enc = el.getAttribute('data-e');
      if (!enc) return;
      var addr;
      try { addr = atob(enc); } catch (err) { return; }
      var mode = el.getAttribute('data-mode') || 'text';
      var mailto = 'mailto:' + addr;
      el.setAttribute('href', mailto);

      // "copy" mode: copy the address to the clipboard and show it (so users
      // without a mail client still get it), then try to open the mail client.
      if (mode === 'copy') {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(addr).then(
            function () { showNote(el, addr, true); },
            function () { showNote(el, addr, false); }
          );
        } else {
          showNote(el, addr, false);
        }
        window.location.href = mailto;
        return;
      }

      var revealed = el.getAttribute('data-revealed') === 'true';
      if (!revealed) {
        el.setAttribute('data-revealed', 'true');
        // "text" mode shows the address first; a second click opens the client.
        if (mode === 'text') {
          el.textContent = addr;
          return;
        }
      }
      window.location.href = mailto;
    });
  });
});
