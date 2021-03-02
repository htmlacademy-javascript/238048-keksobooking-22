const typeSelect = document.querySelector('#type');
const priceInput = document.querySelector('#price');

typeSelect.addEventListener('change', (evt) => {
  const houseType = evt.target.value;
  const housePriceMap = {
    bungalow: 0,
    flat: 1000,
    house: 5000,
    palace: 10000,
  };

  const minPrice = housePriceMap[houseType];

  priceInput.placeholder = minPrice;
});

const timeInSelect = document.querySelector('#timein');
const timeOutSelect = document.querySelector('#timeout');

timeInSelect.addEventListener('change', (evt) => {
  const time = evt.target.value;
  timeOutSelect.value = time;
});
