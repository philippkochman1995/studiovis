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

  // Squarespace centers some project images inside wider grid cells. Align the
  // following caption with the rendered image rather than the grid cell.
  function projectImageCaptionPairs() {
    const engines = document.querySelectorAll(
      '.fe-692839935c52f81496872d5e, .fe-69fdb5562ddaa90bb31304c6'
    );
    return [...engines].flatMap(engine => {
      const blocks = [...engine.children].filter(child => child.classList.contains('fe-block'));
      return blocks.flatMap((block, index) => {
        const image = block.querySelector('.fluid-image-container img');
        const caption = blocks[index + 1];
        return image && caption?.querySelector('.sqs-html-content') ? [[image, caption]] : [];
      });
    });
  }

  function renderedImageBounds(image) {
    const box = image.getBoundingClientRect();
    let left = box.left;
    let width = box.width;
    const nativeWidth = image.naturalWidth || Number(image.getAttribute('width'));
    const nativeHeight = image.naturalHeight || Number(image.getAttribute('height'));
    if (getComputedStyle(image).objectFit === 'contain' && nativeWidth && nativeHeight) {
      const fittedWidth = box.height * nativeWidth / nativeHeight;
      if (fittedWidth < width) {
        left += (width - fittedWidth) / 2;
        width = fittedWidth;
      }
    }
    return { left, right: left + width, width };
  }

  function centerStartPageProjects(pairs) {
    const engine = document.querySelector('.fe-692839935c52f81496872d5e');
    if (!engine) return;
    const projectPairs = pairs.filter(([image]) => engine.contains(image));
    for (const [image] of projectPairs) {
      const block = image.closest('.fe-block');
      block.style.position = 'relative';
      block.style.left = '0px';
    }
    if (!matchMedia('(min-width: 768px)').matches) return;

    const firstRowIds = new Set([
      'fe-block-41838b8dc1b916303c0b',
      'fe-block-c296a1174f64b9f38f1a',
      'fe-block-b6e94fde77ee8d79a1a3',
    ]);
    const firstRow = projectPairs
      .filter(([image]) => firstRowIds.has(image.closest('.fe-block').classList[1]))
      .map(([image]) => renderedImageBounds(image));
    if (firstRow.length !== 3 || firstRow.some(bounds => !bounds.width)) return;

    const left = Math.min(...firstRow.map(bounds => bounds.left));
    const right = Math.max(...firstRow.map(bounds => bounds.right));
    const offset = (document.documentElement.clientWidth - left - right) / 2;
    for (const [image] of projectPairs) image.closest('.fe-block').style.left = `${offset}px`;
  }

  function alignProjectCaptions(pairs) {
    centerStartPageProjects(pairs);
    for (const [image, caption] of pairs) {
      caption.style.position = 'relative';
      caption.style.left = '0px';
      caption.style.maxWidth = '';

      const bounds = renderedImageBounds(image);
      if (!bounds.width) continue;
      const text = caption.querySelector('.sqs-html-content');
      caption.style.left = `${bounds.left - text.getBoundingClientRect().left}px`;
      caption.style.maxWidth = `${bounds.width}px`;
    }
  }

  function initProjectCaptions() {
    const pairs = projectImageCaptionPairs();
    if (!pairs.length) return;

    let frame = 0;
    const schedule = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        alignProjectCaptions(pairs);
      });
    };

    for (const [image] of pairs) image.addEventListener('load', schedule);
    if (window.ResizeObserver) {
      const observer = new ResizeObserver(schedule);
      for (const [image] of pairs) observer.observe(image);
    }
    window.addEventListener('resize', schedule, { passive: true });
    window.addEventListener('load', schedule, { once: true });
    document.fonts?.ready.then(schedule);
    schedule();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initProjectCaptions, { once: true });
  } else {
    initProjectCaptions();
  }
})();
