(() => {
  function initReveal() {
    const elements = document.querySelectorAll([
      '.site-header .wordmark',
      '.intro > *',
      '.choice-screen > h1',
      '.choice-card',
      '.page-copy > *',
      '.project-slider',
      '.page-navigation',
      '.page-grid > figure',
      '.about-showcase > *',
    ].join(', '));

    if (!elements.length || matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return;

    elements.forEach((element, index) => {
      element.classList.add('reveal-item');
      element.style.setProperty('--reveal-delay', `${Math.min(index % 5, 4) * 75}ms`);
    });
    document.documentElement.classList.add('has-reveal');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.08, rootMargin: '0px 0px 40px 0px' });

    elements.forEach(element => observer.observe(element));
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initReveal, { once: true });
  } else {
    initReveal();
  }
})();
