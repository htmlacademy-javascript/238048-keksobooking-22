import { MAX_NUMBER, getRandomFloat, getRandomInt, getRandomArrayElement, createRandomArray } from './util.js';

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
    },
  };
};

const authors = new Array(10).fill(null).map(() => createOffer());

export { authors };
