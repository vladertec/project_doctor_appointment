import Card from "../class/Card.js";
import getUserDataToSend from "./getUserDataToSend.js";


export default async function getInputsInformation(event, data, status, token) {
    if (status === 200) {
        localStorage.setItem('token', data);
        event.target.style.display = 'none';
        document.querySelector('.section-menu__btn').textContent = 'Create visit';
        data.forEach(elem => {
            const post = new Card(elem);
            post.render('.section-content__cards');
        })

        document.querySelector('.section-menu__btn').addEventListener('click', () => {
            document.querySelector('.input-form').classList.toggle('show');
            document.querySelector('.input-form').addEventListener('submit', getUserDataToSend(event, token));
        })
    } else {
        console.log('error');
    }
}