import { initialCards } from '../utils/constants.js'

/* Open Popup */

const header = document.querySelector('.header');

const popupAdd = document.querySelector('.popup-profile');
const popupPlace = document.querySelector('.popup-place');
const popupImage = document.querySelector('.popup__image-container');

document.addEventListener('click', (e)=>{
    if (e.target.name === 'popup__close') {

        e.target.parentElement.parentElement.classList.remove('popup-show', 'popup__image-container-show');
    }
})

//Seleccionamos el section donde colocar las card
const section = document.querySelector('.section-card');
//Eliminar card
header.addEventListener('click', (e) => {
    if (e.target.name === 'button-edit') {
        popupAdd.classList.add('popup-show')
    } else if (e.target.name === 'button-add') {
        popupPlace.classList.add('popup-show')
    } else if (e.target.name === 'button-container') {
        popupPlace.classList.add('popup-show')
    } 

})



/* Implementación con delegación de eventos */
section.addEventListener('click', (e) => {
     if (e.target.className === ('card__image-delete')) {
        console.log(e.target.parentElement.parentElement.remove());
        
    } else if (e.target.name === 'open__image') {
        /* popupImage.classList.add('popup-show') */
        popupImage.classList.add('popup__image-container-show');
        /* Close Popup */
    } else if (e.target.className === 'card__content-like') {
        e.target.classList.remove('card__content-like');
        e.target.classList.add('card__content-like-active');
        console.log(e.target.classList)

    } else if (e.target.className === 'card__content-like-active') {
        e.target.classList.add('card__content-like');
        e.target.classList.remove('card__content-like-active');
        console.log(e.target.classList)
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


