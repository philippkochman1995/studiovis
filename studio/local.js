// Keep same-site navigation inside this static copy, including runtime-created links.
(() => {
  const root = new URL('./', document.currentScript.src);
  const paths = new Set(['', 'about', 'referenzen', 'contact', 'datenschutzerklrung', 'impressum']);
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
    const destination = new URL(path ? `${path}/index.html` : 'index.html', root);
    destination.search = url.search;
    destination.searchParams.set('v', 'inline-thanks-4');
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
