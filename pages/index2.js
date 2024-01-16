import { initialCards } from "../utils/constants.js";

/* console.log(initialCards) */
//Seleccionamos el section donde colocar las card
const section = document.querySelector('.section-card');
//Llamada a la función para crear las card Inicial
render(initialCards)
//Funcion que realiza una clonación del Template Crad, y las crea
function render(cards) {
    const template = document.querySelector('.template').content;
    cards.forEach((elementCard) => {
        const card = template.querySelector('.card').cloneNode(true);
        card.querySelector('.card__image-bg').src = elementCard.link;
        card.querySelector('.card__image-bg').alt = elementCard.name;
        card.querySelector('.card__content-name').textContent = elementCard.name;
        section.append(card)
    })
}

const openPopupProfile = document.querySelector('.popup-profile');
const buttonEditProfile = document.querySelector('.header__info-profile-button-edit');
const addPlace = document.querySelector('.header__add-place-button')
const popupAddPlace = document.querySelector('.popup-place')
const popupImage = document.querySelector('.popup__image-container')

const closePopupProfile = document.querySelector('.popup__close-profile');
const closePopupPlace = document.querySelector('.popup__close-place');

const fromSubmit = document.querySelector('.form');

function togglePopup(popup) {
    popup.classList.toggle('popup-show')
    console.log("Hola")
}

buttonEditProfile.addEventListener('click', function () {
    togglePopup(openPopupProfile)
})

closePopupProfile.addEventListener('click', function () {
    togglePopup(openPopupProfile)
})

addPlace.addEventListener('click', function () {
    togglePopup(popupAddPlace)
})

closePopupPlace.addEventListener('click', function () {
    togglePopup(popupAddPlace)
})
fromSubmit.addEventListener('submit', (event) => { 
    event.preventDefault();
})

/* document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        if (popupImage.classList.contains('popup_show')) {
            togglePopup(popupImage);
        }
        if (popupAdd.classList.contains('popup_show')) {
            togglePopup(popupAdd);
        }
        if (popupProfile.classList.contains('popup_show')) {
            togglePopup(popupProfile);
        }
    }
}); */


