import { initialCards } from "../utils/constants.js";

//Seleccionamos el section donde colocar las card
const section = document.querySelector('.section-card');
//Llamada a la función para crear las card Inicial

//Funcion que realiza una clonación del Template Crad, y las crea
function render(name, link) {
  const template = document.querySelector('.template').content;
  const card = template.querySelector('.card').cloneNode(true);
  card.querySelector('.card__image-bg').src = link;
  card.querySelector('.card__image-bg').alt = name;
  card.querySelector('.card__content-name').textContent = name;

  return card;
}
initialCards.forEach((element) => {
  const card = render(element.name, element.link)
  section.append(card)

})
const openPopupProfile = document.querySelector('.popup-profile');
const buttonEditProfile = document.querySelector('.header__info-profile-button-edit');
const addPlace = document.querySelector('.header__add-place-button')
const popupAddPlace = document.querySelector('.popup-place')
const closePopupProfile = document.querySelector('.popup__close-profile');
const closePopupPlace = document.querySelector('.popup__close-place');



function togglePopup(popup) {
  popup.classList.toggle('popup-show')
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


//OpenPopupImage
const popupImage = document.querySelector('.popup__image-container');

const imageElement = document.querySelector('.popup__image-picture');
const legendImage = document.querySelector('.popup__image-legend')
section.addEventListener('click', (evt) => {
  if (evt.target.name === 'open__image') {
    imageElement.src = evt.target.src;
    legendImage.textContent = evt.target.alt
    popupImage.classList.add('popup__image-container-show');

  }
})

//ClosePopupImage
const closePopup = document.querySelector('#popup__close-image');
closePopup.addEventListener('click', () => {
  popupImage.classList.remove('popup__image-container-show');
})

//Cerrar Popups al hacer click en tecla "Escape"

document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    if (openPopupProfile.classList.contains('popup-show')) {
      togglePopup(openPopupProfile)
    }
    if (popupAddPlace.classList.contains('popup-show')) {
      togglePopup(popupAddPlace)
    } if (popupImage.classList.contains('popup__image-container-show')) {
      popupImage.classList.remove('popup__image-container-show');
    }
  }
})

//Remover Card
/* const elementCard = document.querySelector('.card');

const buttonDelete = document.querySelector('.card__image-delete'); */
section.addEventListener('click', evt => {
  if (evt.target.className === 'card__image-delete') {
    evt.target.parentElement.parentElement.remove()
  }
})

//Button Like

section.addEventListener('click', evt => {
  if (evt.target.className === 'card__content-like') {
    evt.target.classList.add('card__content-like-active');
  } else {
    evt.target.classList.remove('card__content-like-active');
  }
})

//Editar Perfil

//Evitar el envio de formularios

const formProfile = document.querySelector('#form-profile');
formProfile.addEventListener('submit', evt => {
  evt.preventDefault();
  let nameProfile = document.querySelector('.header__info-profile-name-edit');
  let jobProfile = document.querySelector('.header__info-profile-activity-job');
  const inputProfile = document.querySelector('.form__input-name');
  const inputJobProfile = document.querySelector('.form__input-about')
  nameProfile.textContent = inputProfile.value;
  jobProfile.textContent = inputJobProfile.value;

  togglePopup(openPopupProfile)
})

const formPlace = document.querySelector('#form-place');
formPlace.addEventListener('submit', evt => {
  evt.preventDefault();
  const inputNamePlace = document.querySelector('#form__input-name-url');
  const inputUrlPlace = document.querySelector('#form__input-url');
  console.log(inputNamePlace.value)
  console.log(inputUrlPlace.value)
  const card = render(inputNamePlace.value, inputUrlPlace.value)
  section.prepend(card);
  togglePopup(popupAddPlace)
})


//##########################################################################################
//Validación
const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`)
  inputElement.classList.add('from__input_type_error')
  errorElement.classList.add('form__input-error_active');
  errorElement.textContent = errorMessage;
}
const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`)
  inputElement.classList.remove('from__input_type_error')
  errorElement.classList.remove('form__input-error_active');
  errorElement.textContent = "";
}
const checkInputValdity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage)
  } else {
    hideInputError(formElement, inputElement)
  }
}
const setEventListener = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll('.form__input'));
  const buttonElement = formElement.querySelector('.form__submit');
  toggleButtonState(inputList, buttonElement)
  inputList.forEach(inputElement => {//Se genera el item de los inputs
    inputElement.addEventListener('input', () => {
      checkInputValdity(formElement, inputElement)
      toggleButtonState(inputList, buttonElement)
    })
  })
}
const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll('.form'));
  formList.forEach(formElement => {//Se genera el item formulario
    formElement.addEventListener('submit', evt => {
      evt.preventDefault();
    })
    setEventListener(formElement)
  })
}
//Valida si algún input dentro de un formulario es inválido, devuelve como true
const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    console.log(!inputElement.validity.valid)
    return !inputElement.validity.valid;
  })
}

const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add('form__submit-disabled')//Si hasInvalidInput devuelve true, agrega la clase que deshabilita al botón
  } else {
    buttonElement.classList.remove('form__submit-disabled')//Si hasInvalidInput devuelve false elimina la clase que lo inhabilita
  }
}
enableValidation()