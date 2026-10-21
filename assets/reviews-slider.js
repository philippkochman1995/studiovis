(() => {
  const slider = document.querySelector('[data-review-slider]');
  if (!slider) return;

  const slides = [...slider.querySelectorAll('.review-slide')];
  const dots = [...slider.querySelectorAll('.review-dot')];
  let current = 0;

  function show(index) {
    current = (index + slides.length) % slides.length;
    slides.forEach((slide, position) => {
      slide.hidden = position !== current;
      slide.classList.remove('is-expanded');
      const more = slide.querySelector('.review-more');
      if (more) {
        more.setAttribute('aria-expanded', 'false');
        more.textContent = 'Mehr lesen';
      }
    });
    dots.forEach((dot, position) => {
      dot.classList.toggle('is-active', position === current);
      if (position === current) dot.setAttribute('aria-current', 'true');
      else dot.removeAttribute('aria-current');
    });
  }

  slider.querySelector('[data-review-prev]').addEventListener('click', () => show(current - 1));
  slider.querySelector('[data-review-next]').addEventListener('click', () => show(current + 1));
  dots.forEach((dot, index) => dot.addEventListener('click', () => show(index)));

  slider.querySelectorAll('.review-more').forEach((button) => {
    button.addEventListener('click', () => {
      const slide = button.closest('.review-slide');
      const expanded = slide.classList.toggle('is-expanded');
      button.setAttribute('aria-expanded', String(expanded));
      button.textContent = expanded ? 'Weniger lesen' : 'Mehr lesen';
    });
  });

  slider.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault();
      show(current + (event.key === 'ArrowRight' ? 1 : -1));
    }
  });
})();
