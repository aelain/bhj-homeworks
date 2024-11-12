const hasTooltips = document.querySelectorAll('.has-tooltip');

function createTooltip(element, text) {
  const tooltip = document.createElement('div');
  tooltip.className = 'tooltip';
  tooltip.textContent = text;
  element.after(tooltip);
  return tooltip;
}

hasTooltips.forEach(hasTooltip => {
  hasTooltip.addEventListener('click', event => {
    event.preventDefault();
    const tooltipActive = document.querySelector('.tooltip_active');

    if (tooltipActive && event.target.nextElementSibling === tooltipActive) {
      tooltipActive.remove();
      return;
    } else if (tooltipActive) {
      tooltipActive.remove();
    }

    const text = hasTooltip.title;
    tooltip = createTooltip(hasTooltip, text);
    tooltip.classList.add('tooltip_active');
    tooltip.style.left = `${hasTooltip.getBoundingClientRect().left}px`;

    if (hasTooltip.getBoundingClientRect().bottom - 50 < 0) {
      hasTooltip.dataset.position = 'bottom';
      tooltip.style.top = `${hasTooltip.getBoundingClientRect().top + 20}px`;
      return;
    }

    hasTooltip.dataset.position = 'top';
    tooltip.style.top = `${hasTooltip.getBoundingClientRect().top - 30}px`;
  });
});

document.addEventListener('scroll', () => {
  const tooltipActive = document.querySelector('.tooltip_active');
  if (tooltipActive) {
    tooltipActive.remove();
  }
});