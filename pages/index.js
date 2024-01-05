import { initialCards } from '../utils/constants.js'

/* Open Popup */

const popupAdd = document.querySelector('.popup-profile');
const popupPlace = document.querySelector('.popup-place');
const popupImage = document.querySelector('.popup__image-container');
const urlPlace = document.querySelector('.popup__image-picture');
const namePlace = document.querySelector('.popup__image-legend');
//Seleccionamos el section donde colocar las card
const section = document.querySelector('.section-card');
//Eliminar card


/* Implementación con delegación de eventos */
document.addEventListener('click', (e) => {
    if (e.target.name === 'button-edit') {
        popupAdd.classList.add('popup-show')
    } else if (e.target.name === 'button-add') {
        popupPlace.classList.add('popup-show')
    } else if (e.target.name === 'button-container') {
        popupPlace.classList.add('popup-show')
    } else if (e.target.name === 'open__image') {
        /* popupImage.classList.add('popup-show') */
        popupImage.classList.add('popup__image-container-show');
        urlPlace.src = e.target.src;
        namePlace.textContent = e.target.alt;
        /* Close Popup */
    } else if (e.target.name === 'popup__close') {
        e.target.parentElement.parentElement.classList.remove('popup-show', 'popup__image-container-show')
    } else if (e.target.className === ('card__image-delete')) {
        console.log(e.target.parentElement.parentElement.remove());
    } else if (e.target.className === 'card__content-like') {
        e.target.classList.toggle('card__content-like-active')
    }
})

/* Cargar Card Nueva */

document.addEventListener('submit', (e) => {
    e.preventDefault();
})

document.addEventListener('input', (e) => {
    if (e.target.name === 'form__input-name') {
        const name = e.target.value;
        console.log(name)
    } else if (e.target.name === 'form__input-about') {
        const job = e.target.value;
        console.log(job)
    }
})

//Llamada a la función para crear las card Inicial
templateContent(initialCards)
//Funcion que realiza una clonación del Template Crad, y las crea
function templateContent(cards) {
    const template = document.querySelector('.template').content;
    cards.forEach((elementCard) => {
        const card = template.querySelector('.card').cloneNode(true);
        card.querySelector('.card__image-bg').src = elementCard.link;
        card.querySelector('.card__image-bg').alt = elementCard.name;
        card.querySelector('.card__content-name').textContent = elementCard.name;
        section.append(card)
    })
}


