function gatRandomInt(start, end) {
    const errors = {
        negative: 'Диапазон может быть только положительный!',
        incorrectRange: 'Значение «до» меньшее, чем значение «от»!',
        incorrectValues: 'Введите минимум 2 значения',
    };
    if (!start || !end) {
        console.error(errors.incorrectValues);
        return;
    } else if (start < 0 || end < 0) {
        console.error(errors.negative);
        return;
    } else if (start > end) {
        console.error(errors.incorrectRange);
        return;
    }
    if (start === end) return start;
    start = Math.ceil(start);
    end = Math.floor(end);
    return Math.floor(Math.random() * (start - end + 1)) + end;
}