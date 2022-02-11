import showModal from "./codeActions/showModal.js";
import getUserToken from "./api/getUserToken.js";
import getAllUserCards from "./api/getAllUserCards.js";
import renderInformation from "./codeActions/renderInformation.js";
import filterFormInputsValues from "./codeActions/filterFormInputsValues.js";
import modalWindowDisplay from "./functions/modalWindowDisplay.js";
import getAuthorizationData from "./codeActions/getAuthorizationData.js";
import getUserDataToSend from "./codeActions/getUserDataToSend.js";


document.querySelector('.section-menu__btn').addEventListener('click', showModal);

document.querySelector('.form').addEventListener('submit', getAuthorizationData);

document.querySelector('.section-menu__btn-create-visit').addEventListener('click', () => {
<<<<<<< HEAD
    // document.querySelector('.input-form').classList.toggle('show');
    // document.querySelector('.input-form').addEventListener('submit', getUserDataToSend);
    return
})

=======
/*    document.querySelector('.input-form').classList.toggle('show');
    document.querySelector('.input-form').addEventListener('submit', getUserDataToSend);*/
})

/*modalWindowDisplay();*/

>>>>>>> 609af4372fcaee76fe8fcef51932dc796e665041

