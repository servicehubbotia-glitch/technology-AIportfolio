/* Accessible compact navigation; language selection remains in the original page. */
(() => {
  'use strict';
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.getElementById('main-navigation');
  if (!toggle || !nav) return;
  const compact = matchMedia('(max-width: 1020px)');
  function close(restoreFocus = false) {
    nav.dataset.open = 'false';
    toggle.setAttribute('aria-expanded', 'false');
    if (restoreFocus) toggle.focus();
  }
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') !== 'true';
    nav.dataset.open = String(open);
    toggle.setAttribute('aria-expanded', String(open));
    if (open) nav.querySelector('a').focus();
  });
  nav.addEventListener('click', event => {
    const link = event.target.closest('a[href^="#"]');
    if (!link) return;
    close();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      if (!target.hasAttribute('tabindex')) target.setAttribute('tabindex', '-1');
      target.focus({ preventScroll: true });
    }
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') close(true);
  });
  document.addEventListener('click', event => {
    if (!nav.contains(event.target) && !toggle.contains(event.target)) close();
  });
  compact.addEventListener('change', () => close());
})();
