const onChangeType = (value) => {
  let minPrice;

  switch (value) {
    case 'Бунгало':
      minPrice = 0;
      break;
    case 'Квартира':
      minPrice = 1000;
      break;
    case 'Дом':
      minPrice = 5000;
      break;
    case 'Дворец':
      minPrice = 10000;
      break;
  }

  document.querySelector('#price').placeholder = minPrice;
}

const onChangeTimeIn = (time) => {
  document.querySelector('#timeout').value = time;
}

export { onChangeType, onChangeTimeIn };
