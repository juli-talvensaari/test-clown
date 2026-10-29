
sections.forEach((section) => {
const button = section.querySelector('.section-toggle');
    const summaryPanel = section.querySelector('.section-summary-panel');
const summary = section.querySelector('.section-summary');
const more = section.querySelector('.tell-more');
const content = section.querySelector('.section-content');
@@ -12,18 +13,31 @@
const setState = (next) => {
state = next;

      summaryPanel.classList.add('hidden');
summary.classList.add('hidden');
more.classList.add('hidden');
content.classList.add('hidden');
      button.classList.remove('bg-sky-50', 'bg-slate-50');

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
        button.classList.add('bg-slate-50');

        button.classList.add('bg-slate-50', 'hover:bg-slate-50');
} else if (next === 'expanded') {
content.classList.remove('hidden');
        button.classList.add('bg-sky-50');

        // Expanded state: swap the normal and hover backgrounds.
        button.classList.add('bg-slate-50', 'hover:bg-sky-50');
      } else {
        button.classList.add('hover:bg-slate-50');
}

const labels = {
@@ -36,12 +50,14 @@
button.setAttribute('aria-label', labels[next]);
};

    button.addEventListener('click', (event) => {
      if (event.target.closest('.tell-more')) return;

      if (state === 'collapsed') setState('summary');
      else if (state === 'summary') setState('expanded');
      else setState('collapsed');
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
