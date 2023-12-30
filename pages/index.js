
const editProfile = document.querySelector('.header__info-profile-edit');    
const popupAdd = document.querySelector('.popup-profile');
const closePopupProfile = document.querySelector('.popup__close-profile');

editProfile.addEventListener('click', () =>{    
    popupAdd.classList.add('popup-show');
})

closePopupProfile.addEventListener('click', ()=>{
    popupAdd.classList.remove('popup-show');
})

const popupPlace = document.querySelector('.popup-place')
const addPlace = document.querySelector('.header__add-place');
const closePopupPlace = document.querySelector('.popup__close-place');

addPlace.addEventListener('click', () =>{
    popupPlace.classList.add('popup-show')

})

closePopupPlace.addEventListener('click', () =>{
    popupPlace.classList.remove('popup-show')
})