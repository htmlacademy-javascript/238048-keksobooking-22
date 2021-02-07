function checkValues(a, b) {
  const errorText = {
    negative: 'Диапазон может быть только положительный!',
    incorrectRange: 'Значение «до» меньшее, чем значение «от»!',
    incorrectValues: 'Введите минимум 2 значения',
  };
  let error = '';

  if (typeof a !== 'number' || typeof b !== 'number') {
    error = errorText.incorrectValues;
  } else if (a < 0 || b < 0) {
    error = errorText.negative;
  } else if (a > b) {
    error = errorText.incorrectRange;
  }

  return error;
}

function getRandomInt(start, end) {
  const error = checkValues(start, end);
  if (error.length > 0) {
    alert(error);
    return;
  }

  if (start === end) return start;
  let result = start + Math.random() * (end + 1 - start);
  return Math.floor(result);
}

function getRandomFloat(start, end, simbolsAfterComma) {
  let error = '';
  let result;

  if (!simbolsAfterComma) {
    error = 'Укажите количество знаков после запятой!';
  } else {
    error = checkValues(start, end);
  }
  if (error.length > 0) {
    alert(error);
    return;
  }
  result = start + Math.random() * (end - start);
  if (start === end) result = start;
  return result.toFixed(simbolsAfterComma);
}

getRandomInt(1, 10);
getRandomFloat(1.1, 2.5, 3);

const MAX_NUMBER = Number.MAX_SAFE_INTEGER;

const getRandomArrayElement = (elements) => {
  return elements[getRandomInt(0, elements.length - 1)];
};

const createRandomArray = (elements, isUnique) => {
  let length = getRandomInt(1, elements.length - 1);
  const result = [];

  if (isUnique) {
    for (let i = 0; i < length; i++) {
      result.push(elements[i]);
    }
  } else {
    length = getRandomInt(1, 10);
    for (let i = 0; i < length; i++) {
      result.push(getRandomArrayElement(elements));
    }
  }
  return result;
};

const createOffer = function () {
  const TYPES = ['palace', 'flat', 'house', 'bungalow'];
  const TIME = ['12:00', '13:00', '14:00'];
  const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
  const PHOTOS = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];

  let x = getRandomFloat(35.65000, 35.70000, 5);
  let y = getRandomFloat(139.70000, 139.80000, 5);

  return {
    avatar: `img/avatars/user0${getRandomInt(1, 8)}.png`,
    offer: {
      title: `Объявление № ${getRandomInt(1, MAX_NUMBER)}`,
      address: `${x}, ${y}`,
      price: getRandomInt(1, MAX_NUMBER),
      type: getRandomArrayElement(TYPES),
      rooms: getRandomInt(1, MAX_NUMBER),
      guests: getRandomInt(1, MAX_NUMBER),
      checkin: getRandomArrayElement(TIME),
      checkout: getRandomArrayElement(TIME),
      features: createRandomArray(FEATURES, true),
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      photos: createRandomArray(PHOTOS, false),
    },
    location: {
      x: x,
      y: y,
    }
  };
};

const authors = new Array(10).fill(null).map(() => createOffer());
