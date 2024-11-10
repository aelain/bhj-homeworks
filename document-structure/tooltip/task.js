const hasTooltips = document.querySelectorAll('.has-tooltip');

function createTooltip(element, text) {
  const tooltip = document.createElement('div');
  tooltip.className = 'tooltip';
  tooltip.textContent = text;
  element.after(tooltip);
  return tooltip;
}

hasTooltips.forEach(hasTooltip => {
  hasTooltip.addEventListener('click', (event) => {
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
  });
});