import getUserToken from "../api/getUserToken.js";
import getAllUserCards from "../api/getAllUserCards.js";
import renderInformation from "./renderInformation.js";
import filterFormInputsValues from "./filterFormInputsValues.js";

export default async function getAuthorizationData(event) {
    event.preventDefault();
    const email = event.target.elements.userEmail.value;
    const password = event.target.elements.userPassword.value;
    let token = await getUserToken(email, password);
    localStorage.setItem('token', token);
    if (token) {
        let {data, status} = await getAllUserCards(token);
        renderInformation(event, data, status);
        document.querySelector('.filter-form').classList.toggle('flex-display-form');
        document.querySelector('.filter-form').addEventListener('submit', filterFormInputsValues)
    } else {
        throw new Error('Without token');
    }
}