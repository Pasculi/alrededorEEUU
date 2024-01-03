import { initialCards } from '../utils/constants.js'


//Seleccionamos el dection donde colocar las card
const section = document.querySelector('.section-card')

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

/* function editarProfile() {
    const editProfileName = document.querySelector('.form__input-name');
    const editProfileJob = document.querySelector('.form__input-about');

} */

const editProfile = document.querySelector('.header__info-profile-edit');
const popupAdd = document.querySelector('.popup-profile');
const closePopupProfile = document.querySelector('.popup__close-profile');

editProfile.addEventListener('click', () => {
    popupAdd.classList.add('popup-show');
})

closePopupProfile.addEventListener('click', () => {
    popupAdd.classList.remove('popup-show');
})

const popupPlace = document.querySelector('.popup-place')
const addPlace = document.querySelector('.header__add-place');
const closePopupPlace = document.querySelector('.popup__close-place');

addPlace.addEventListener('click', () => {
    popupPlace.classList.add('popup-show')

})

closePopupPlace.addEventListener('click', () => {
    popupPlace.classList.remove('popup-show')
})

function setEventListeners() {
    const formInputs = Array.from(document.querySelectorAll('.form__input'));
    console.log(formInputs)
    formInputs.forEach((elementInput) => {
        elementInput.addEventListener("input", (e) => {
            console.log(e.target.value)
        })
    })
}
setEventListeners()