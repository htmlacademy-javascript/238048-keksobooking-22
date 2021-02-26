import { createOffers } from './data.js';
import { transformHouseType } from './util.js';

const similarListElement = document.querySelector('#map-canvas');
const similarOfferTemplate = document.querySelector('#card').content;

const similarOffers = createOffers();

const similarListFragment = document.createDocumentFragment();

const { avatar, offer } = similarOffers[0];
const offerElement = similarOfferTemplate.cloneNode(true);

offerElement.querySelector('.popup__title').textContent = offer.title;
offerElement.querySelector('.popup__text--address').textContent = offer.address;
offerElement.querySelector('.popup__text--price').textContent = `${offer.price} ₽/ночь`;
offerElement.querySelector('.popup__type').textContent = transformHouseType(offer.type);
offerElement.querySelector('.popup__text--capacity').textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;
offerElement.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
offerElement.querySelector('.popup__features').textContent = offer.features;
offerElement.querySelector('.popup__description').textContent = offer.description;
offerElement.querySelector('.popup__avatar').src = avatar;

const offerPhoto = offerElement.querySelector('.popup__photos').children[0];
offerElement.querySelector('.popup__photos').removeChild(offerPhoto);
offer.photos.forEach(img => {
  const photo = offerPhoto.cloneNode();
  photo.src = img;
  offerElement.querySelector('.popup__photos').appendChild(photo);
});

similarListFragment.appendChild(offerElement);

similarListElement.appendChild(similarListFragment);
