(() => {
  const main = document.querySelector('main');
  if (!main) return;

  const handUrl = new URL('tear-hand.png', document.currentScript.src).href;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const entryKey = 'studiovis-flyer-entry';

  try {
    if (sessionStorage.getItem(entryKey) === '1') {
      sessionStorage.removeItem(entryKey);
      main.classList.add('flyer-arriving');
    }
  } catch (_) {
    // Some browsers block sessionStorage on local file pages.
  }

  let leaving = false;

  document.addEventListener('click', event => {
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.altKey || event.shiftKey) return;

    const link = event.target.closest('a[href]');
    if (!link || link.target || link.hasAttribute('download') || link.hasAttribute('data-glightbox')) return;

    const href = link.getAttribute('href');
    if (!href || href.startsWith('#')) return;

    const destination = new URL(href, location.href);
    const sameSite = location.protocol === 'file:'
      ? destination.protocol === 'file:'
      : destination.origin === location.origin;
    if (!sameSite || destination.href === location.href) return;

    event.preventDefault();
    if (leaving) return;
    leaving = true;

    if (reducedMotion.matches) {
      location.assign(destination.href);
      return;
    }

    const hand = document.createElement('img');
    const width = Math.min(350, Math.max(230, window.innerWidth * 0.3));
    const gripX = Math.min(main.getBoundingClientRect().right, window.innerWidth - 20);
    const gripY = Math.min(window.innerHeight - 105, Math.max(115, event.clientY));
    hand.src = handUrl;
    hand.alt = '';
    hand.setAttribute('aria-hidden', 'true');
    hand.className = 'flyer-hand';
    hand.style.width = `${width}px`;
    hand.style.left = `${gripX - width * 0.31}px`;
    hand.style.top = `${gripY - width * 0.5}px`;
    document.body.append(hand);

    main.classList.add('flyer-tearing');
    document.body.classList.add('flyer-transitioning');

    window.setTimeout(() => {
      try { sessionStorage.setItem(entryKey, '1'); } catch (_) {}
      location.assign(destination.href);
    }, 820);
  });
})();
