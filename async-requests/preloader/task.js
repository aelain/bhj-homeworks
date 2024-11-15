const request = new XMLHttpRequest();
const items = document.querySelector('#items');
const loader = document.querySelector('.loader');
const valutesStorage = JSON.parse(localStorage.getItem('valutes')) || [];

function createItem(charCode, value) {
  const item = document.createElement('div');
  item.className = 'item';
  item.innerHTML = `<div class="item__code">${charCode}</div><div class="item__value">${value}</div><div class="item__currency">руб.</div>`;
  items.append(item);
}

const valutesInStorage = valutesStorage.length ? true : false;

if (valutesInStorage) {
  valutesStorage.forEach(valuteItem => {
    const charCode = valuteItem.charCode;
    const value = valuteItem.value;
    createItem(charCode, value);
  });

  loader.classList.remove('loader_active');
}

request.addEventListener('load', function () {
  if (this.status === 200) {
    Array.from(items.children).forEach(item => item.remove());
    valutesStorage.splice(0);
    localStorage.setItem('valutes', JSON.stringify(valutesStorage));
    const response = JSON.parse(this.response);
    const valuteList = Object.values(response.response.Valute);

    valuteList.forEach(valuteItem => {
      const charCode = valuteItem.CharCode;
      const value = valuteItem.Value;
      createItem(charCode, value);
      valutesStorage.push({ charCode, value });
      localStorage.setItem('valutes', JSON.stringify(valutesStorage));
    });

    loader.classList.remove('loader_active');
  }
});

request.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
request.send();