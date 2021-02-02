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

function gatRandomInt(start, end) {
    const error = checkValues(start, end);
    if (error.length > 0) {
        console.error(error);
        return;
    }
    
    if (start === end) return start;
    start = Math.ceil(start);
    end = Math.floor(end);
    return Math.floor(Math.random() * (start - end + 1)) + end;
}