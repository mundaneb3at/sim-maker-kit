// Arrow keys step through the pages; the <link rel="prev|next"> in each page's head is the source of truth.
addEventListener('keydown', e => {
  if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey || e.target.closest('input, textarea, select')) return;
  const rel = { ArrowRight: 'next', ArrowLeft: 'prev' }[e.key];
  const link = rel && document.querySelector(`link[rel="${rel}"]`);
  if (link) location.href = link.href;
});
