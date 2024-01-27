import { initialCards } from '../utils/constants.js'

/* Open Popup */

const header = document.querySelector('.header');

const popupAdd = document.querySelector('.popup-profile');
const popupPlace = document.querySelector('.popup-place');
const popupImage = document.querySelector('.popup__image-container');

document.addEventListener('click', (e)=>{
    if (e.target.name === 'popup__close' ){
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
       e.target.parentElement.parentElement.remove();
        
    } else if (e.target.name === 'open__image') {
        const image = document.querySelector('.popup__image-picture');
        const nameImage = document.querySelector('.popup__image-legend')
        image.src = e.target.src;
        nameImage.textContent = e.target.alt
        popupImage.classList.add('popup__image-container-show');
        /* Close Popup */
    } else if (e.target.className === 'card__content-like') {
        e.target.classList.remove('card__content-like');
        e.target.classList.add('card__content-like-active');

    } else if (e.target.className === 'card__content-like-active') {
        e.target.classList.add('card__content-like');
        e.target.classList.remove('card__content-like-active');
    }
})





document.addEventListener('submit', (e) => {
    e.preventDefault();
    document.addEventListener('click', (e)=>{
        if (e.target.name === 'form__submit' ){
            e.target.parentElement.parentElement.parentElement.classList.remove('popup-show', 'popup__image-container-show');
        }
    })
})


const nameProfile = document.querySelector('.header__info-profile-name-edit');
const jobProfile = document.querySelector('.header__info-profile-activity-job');

function addProfile(){
    document.addEventListener('input', (e) => {
        console.log(e.target)
        if (e.target.id === 'form__input-name') {
            nameProfile.textContent = e.target.value;
            console.log(nameProfile)
            
        } else if (e.target.id === 'form__input-about') {
            jobProfile.textContent = e.target.value;
            console.log(jobProfile)
        }
    })
    
}
addProfile()//Revisar


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



