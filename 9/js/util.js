const MAX_NUMBER = 100000; // Number.MAX_SAFE_INTEGER;

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
    throw new Error(error);
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
    throw new Error(error);
  }
  result = start + Math.random() * (end - start);
  if (start === end) result = start;
  return result.toFixed(simbolsAfterComma);
}

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

const transformHouseType = (houseType) => {
  const houseTypeMap = {
    flat: 'Квартира',
    bungalow: 'Бунгало',
    house: 'Дом',
    palace: 'Дворец',
  };

  return houseTypeMap[houseType];
}

export { MAX_NUMBER, getRandomFloat, getRandomInt, getRandomArrayElement, createRandomArray, transformHouseType };
