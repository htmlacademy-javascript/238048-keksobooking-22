const typeSelect = document.querySelector('#type');
const priceInput = document.querySelector('#price');

typeSelect.addEventListener('change', (evt) => {
  const value = evt.target.value;
  let minPrice;

  switch (value) {
    case 'bungalow':
      minPrice = 0;
      break;
    case 'flat':
      minPrice = 1000;
      break;
    case 'house':
      minPrice = 5000;
      break;
    case 'palace':
      minPrice = 10000;
      break;
  }

  priceInput.placeholder = minPrice;
});

const timeInSelect = document.querySelector('#timein');
const timeOutSelect = document.querySelector('#timeout');

timeInSelect.addEventListener('change', (evt) => {
  const time = evt.target.value;
  timeOutSelect.value = time;
});
