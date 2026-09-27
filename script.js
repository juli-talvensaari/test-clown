/*(() => {
  const sections = document.querySelectorAll('[data-section]');

  sections.forEach((section) => {
    const button = section.querySelector('.section-toggle');
    const summary = section.querySelector('.section-summary');
    const more = section.querySelector('.tell-more');
    const content = section.querySelector('.section-content');
    const icon = section.querySelector('.collapse-icon');
    const title = section.querySelector('.section-title');
    let state = 'collapsed';

    const setState = (next) => {
      state = next;

      summary.classList.add('hidden');
      more.classList.add('hidden');
      content.classList.add('hidden');
      icon.classList.remove('rotate-45');
      button.classList.remove('bg-sky-50', 'bg-slate-50');

      if (next === 'summary') {
        summary.classList.remove('hidden');
        more.classList.remove('hidden');
        button.classList.add('bg-slate-50');
      } else if (next === 'expanded') {
        content.classList.remove('hidden');
        icon.classList.add('rotate-45');
        button.classList.add('bg-sky-50');
      }

      const labels = {
        collapsed: `Show summary for ${title.textContent}`,
        summary: `Show full details for ${title.textContent}`,
        expanded: `Collapse ${title.textContent}`,
      };

      button.setAttribute('aria-expanded', String(next !== 'collapsed'));
      button.setAttribute('aria-label', labels[next]);
    };

    button.addEventListener('click', (event) => {
      if (event.target.closest('.tell-more')) return;

      if (state === 'collapsed') setState('summary');
      else if (state === 'summary') setState('expanded');
      else setState('collapsed');
    });

    more.addEventListener('click', (event) => {
      event.preventDefault();
      event.stopPropagation();
      setState('expanded');
      section.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });

    setState('collapsed');
  });
})();



*/
