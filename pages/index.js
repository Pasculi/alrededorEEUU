import { initialCards } from "../utils/constants.js";

console.log(initialCards)
//Seleccionamos el section donde colocar las card
const section = document.querySelector('.section-card');
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
