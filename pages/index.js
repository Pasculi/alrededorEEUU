import { initialCards } from '../utils/constants.js'

/*const addPlace = document.querySelector('.header__add-place');
const closePopupPlace = document.querySelector('.popup__close-place'); */


/* Open Popup */


const popupAdd = document.querySelector('.popup-profile');
const popupPlace = document.querySelector('.popup-place')
const popupImage = document.querySelector('.popup__image-container')
const urlPlace = document.querySelector('.popup__image-picture')
const namePlace = document.querySelector('.popup__image-legend')

document.addEventListener('click', (e)=>{
    if(e.target.name === 'button-edit'){
        console.log(e.target)
        popupAdd.classList.add('popup-show')
    }else if(e.target.name === 'button-add'){
        console.log(e.target)
        popupPlace.classList.add('popup-show')
    }else if(e.target.name === 'open__image'){
        console.log(e.target)
        /* popupImage.classList.add('popup-show') */
        popupImage.classList.add('popup__image-container-show');
        urlPlace.src = e.target.src;
        namePlace.textContent = e.target.alt;
        
    }else if(e.target.name === 'popup__close'){
        e.target.parentElement.parentElement.classList.remove('popup-show', 'popup__image-container-show')
    }
})

/* Close Popup */



//Seleccionamos el section donde colocar las card
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
