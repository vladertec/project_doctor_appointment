import sendUserCards from "../api/sendUserCards.js";

export default function getUserDataToSend(event) {
    event.preventDefault();
    const name = event.target.elements.name.value;
    const surname = event.target.elements.surname.value;
    const doctor = event.target.elements.doctor.value;
    const urgency = event.target.elements.urgency.value;
    const shortVisitInfo = event.target.elements.shortVisitInfo.value;
    const id = event.target.elements.id.value;
    const tokenFromLocalStorage = localStorage.getItem('token');
    sendUserCards(name, surname, doctor, urgency, shortVisitInfo, id, tokenFromLocalStorage);
}