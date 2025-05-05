// Toggle dropdown menu
const filterBtn = document.getElementById('filter-menu-button');
const filterMenu = document.getElementById('filter-menu');

filterBtn.addEventListener('click', () => {
  filterMenu.classList.toggle('hidden');
});

// Close dropdown if clicked outside
window.addEventListener('click', (e) => {
  if (!filterBtn.contains(e.target) && !filterMenu.contains(e.target)) {
    filterMenu.classList.add('hidden');
  }
});


// Select all details elements
const detailsElements = document.querySelectorAll('details');

detailsElements.forEach((detail) => {
  const summary = detail.querySelector('summary');
  const icon = summary.querySelector('i');
  const answer = detail.querySelector('p');

  // Toggle answer visibility and icon rotation on toggle event
  detail.addEventListener('toggle', () => {
    if (detail.open) {
      answer.classList.remove('hidden');
      icon.classList.add('rotate-180');
      summary.setAttribute('aria-expanded', 'true');
    } else {
      answer.classList.add('hidden');
      icon.classList.remove('rotate-180');
      summary.setAttribute('aria-expanded', 'false');
    }
  });

  // Accessibility: allow keyboard toggle on summary
  summary.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      detail.open = !detail.open;
      detail.dispatchEvent(new Event('toggle'));
    }
  });
});
