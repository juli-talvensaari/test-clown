(() => {
  const sections = document.querySelectorAll('[data-section]');

  sections.forEach((section) => {
    const button = section.querySelector('.section-toggle');
    const summaryPanel = section.querySelector('.section-summary-panel');
    const summary = section.querySelector('.section-summary');
    const more = section.querySelector('.tell-more');
    const content = section.querySelector('.section-content');
    const title = section.querySelector('.section-title');
    let state = 'collapsed';

    const setState = (next) => {
      state = next;

      summaryPanel.classList.add('hidden');
      summary.classList.add('hidden');
      more.classList.add('hidden');
      content.classList.add('hidden');

      button.classList.remove(
        'bg-sky-50',
        'bg-slate-50',
        'hover:bg-sky-50',
        'hover:bg-slate-50'
      );

      if (next === 'summary') {
        summaryPanel.classList.remove('hidden');
        summary.classList.remove('hidden');
        more.classList.remove('hidden');

        button.classList.add('bg-slate-50', 'hover:bg-slate-50');
      } else if (next === 'expanded') {
        content.classList.remove('hidden');

        // Expanded state: swap the normal and hover backgrounds.
        button.classList.add('bg-slate-50', 'hover:bg-sky-50');
      } else {
        button.classList.add('hover:bg-slate-50');
      }

      const labels = {
        collapsed: `Show summary for ${title.textContent}`,
        summary: `Show full details for ${title.textContent}`,
        expanded: `Collapse ${title.textContent}`,
      };

      button.setAttribute('aria-expanded', String(next !== 'collapsed'));
      button.setAttribute('aria-label', labels[next]);
    };

    button.addEventListener('click', () => {
      if (state === 'collapsed') {
        setState('summary');
      } else if (state === 'summary') {
        setState('expanded');
      } else {
        setState('collapsed');
      }
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
