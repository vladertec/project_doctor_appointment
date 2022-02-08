import showModal from "./codeActions/showModal.js";
import getUserToken from "./api/getUserToken.js";
import getAllUserCards from "./api/getAllUserCards.js";
import renderInformation from "./codeActions/renderInformation.js";
import filterFormInputsValues from "./codeActions/filterFormInputsValues.js";


document.querySelector('.section-menu__btn').addEventListener('click', showModal);


document.querySelector('.form').addEventListener('submit', getInputsInformation);

async function getInputsInformation(event) {
    event.preventDefault();
    const email = event.target.elements.userEmail.value;
    const password = event.target.elements.userPassword.value;
    let token = await getUserToken(email, password);
    if (token) {
        let {data, status} = await getAllUserCards(token);
        renderInformation(event, data, status, token);
        document.querySelector('.filter-form').classList.toggle('flex-display-form');
        document.querySelector('.filter-form').addEventListener('submit', filterFormInputsValues(event))
    }
}


