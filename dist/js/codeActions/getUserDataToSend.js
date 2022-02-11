import sendUserCards from "../api/sendUserCards.js";
import getAllUserCards from "../api/getAllUserCards.js";
import distributionCardsByDoctor from "./distributionCardsByDoctor.js";

export default async function getUserDataToSend(event) {
    event.preventDefault();
    const name = event.target.elements.name.value;
    const surname = event.target.elements.surname.value;
    const doctor = event.target.elements.doctor.value;
    const urgency = event.target.elements.urgency.value;
    const shortVisitInfo = event.target.elements.shortVisitInfo.value;
    const token = localStorage.getItem('token');
    document.querySelector('.section-content__cards').innerHTML = '';
    let userCards = await sendUserCards(name, surname, doctor, urgency, shortVisitInfo, token);
    let {data} = await getAllUserCards(token);
    distributionCardsByDoctor(data);
}