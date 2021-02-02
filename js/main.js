function checkValues(a, b) {
  const errorText = {
    negative: 'Диапазон может быть только положительный!',
    incorrectRange: 'Значение «до» меньшее, чем значение «от»!',
    incorrectValues: 'Введите минимум 2 значения',
  };
  let error = '';

  if (!a || !b) {
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
