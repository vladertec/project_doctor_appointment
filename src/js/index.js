import showModal from "./codeActions/showModal.js";
import getAuthorizationData from "./codeActions/getAuthorizationData.js";
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