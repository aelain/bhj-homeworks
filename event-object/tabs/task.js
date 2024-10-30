const tabsItems = document.querySelectorAll('.tabs');

tabsItems.forEach(function (tabsItem) {
  const tabs = tabsItem.querySelectorAll('.tab');
  const tabContents = tabsItem.querySelectorAll('.tab__content');

  tabs.forEach(function (tab, index) {
    tab.addEventListener('click', function () {
      tabs.forEach((tab) => tab.classList.remove('tab_active'));
      tab.classList.add('tab_active');
      tabContents.forEach((tabContent) => tabContent.classList.remove('tab__content_active'));
      tabContents[index].classList.add('tab__content_active');
    });
  });
});