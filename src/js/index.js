import showModal from "./codeActions/showModal.js";
import getUserToken from "./api/getUserToken.js";
import getAllUserCards from "./api/getAllUserCards.js";
import renderInformation from "./codeActions/renderInformation.js";
import filterFormInputsValues from "./codeActions/filterFormInputsValues.js";
import getAuthorizationData from "./codeActions/getAuthorizationData.js";
import getUserDataToSend from "./codeActions/getUserDataToSend.js";
import showVisitModal from "./codeActions/modalWindowDisplay.js"

document.querySelector('.section-menu__btn').addEventListener('click', showModal);

document.querySelector('.form').addEventListener('submit', getAuthorizationData);

// document.querySelector('.section-menu__btn-create-visit').addEventListener('click', async () => {
//     // document.querySelector('.input-form').classList.toggle('show');
//     // document.querySelector('.input-form').addEventListener('submit', getUserDataToSend);
//     await showVisitModal
// })

// document.getElementById("showVisitModalBtn").addEventListener ('click', showVisitModal)
window.onload = () => showVisitModal()