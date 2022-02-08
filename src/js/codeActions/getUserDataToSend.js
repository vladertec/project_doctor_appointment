import sendUserCards from "../api/sendUserCards.js";

export default function getUserDataToSend(event, token) {
    event.preventDefault();
    const age = event.target.elements.age.value;
    const title = event.target.elements.title.value;
    const weight = event.target.elements.weight.value;
    sendUserCards(age, title, weight, token);
}