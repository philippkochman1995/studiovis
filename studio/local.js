// Keep same-site navigation inside this static copy, including runtime-created links.
(() => {
  const root = new URL('./', document.currentScript.src);
  const paths = new Set(['', 'about', 'referenzen', 'contact', 'datenschutzerklrung', 'impressum']);

  // Use the same Mouseflow project as the main site on every Studio page.
  window._mfq = window._mfq || [];
  const mouseflow = document.createElement('script');
  mouseflow.defer = true;
  mouseflow.src = 'https://cdn.mouseflow.com/projects/00325591-26b7-47a3-9829-6b5e6e322e35.js';
  document.head.appendChild(mouseflow);

  // Directory URLs load index.html while keeping the address bar readable.
  const current = new URL(location.href);
  if (current.pathname.endsWith('/index.html')) {
    current.pathname = current.pathname.slice(0, -'index.html'.length);
    current.searchParams.delete('v');
    history.replaceState(null, '', current.pathname + current.search + current.hash);
  }

  document.addEventListener('click', event => {
    const link = event.target.closest('a[href]');
    if (!link) return;
    const href = link.getAttribute('href');
    if (!href || href.startsWith('#')) return;
    const url = new URL(href, location.href);
    if (url.origin !== location.origin) return;
    const sitePath = root.pathname.replace(/^\/+|\/+$/g, '');
    const requestedPath = url.pathname.replace(/^\/+|\/+$/g, '');
    const localPath = requestedPath.startsWith(`${sitePath}/`)
      ? requestedPath.slice(sitePath.length + 1)
      : requestedPath;
    const path = localPath.replace(/(?:^|\/)index\.html$/, '').replace(/\/$/, '');
    if (!paths.has(path)) return;
    const destination = new URL(path ? `${path}/` : './', root);
    destination.search = url.search;
    destination.searchParams.delete('v');
    destination.hash = url.hash;
    link.href = destination.href;
  }, true);

  document.addEventListener('submit', async event => {
    const form = event.target;
    if (!(form instanceof HTMLFormElement) || !form.matches('.studio-contact-form')) return;
    event.preventDefault();
    event.stopImmediatePropagation();

    const status = form.parentElement.querySelector('.studio-form-status');
    const button = form.querySelector('button[type="submit"]');
    if (!status || !button || button.disabled) return;

    status.hidden = true;
    status.textContent = '';
    status.classList.remove('is-error');
    button.disabled = true;
    button.textContent = 'Wird gesendet …';

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });
      if (!response.ok) throw new Error(`Formspree returned ${response.status}`);

      form.reset();
      status.textContent = 'Vielen Dank für deine Nachricht. Wir melden uns innerhalb von 24h bei dir.';
    } catch (error) {
      status.classList.add('is-error');
      status.textContent = 'Das hat leider nicht funktioniert. Bitte versuche es erneut oder schreibe an start@studiovis.at.';
      console.error('Kontaktformular konnte nicht gesendet werden:', error);
    } finally {
      button.disabled = false;
      button.textContent = 'Jetzt abschicken';
      status.hidden = false;
      status.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    }
  }, true);
})();
