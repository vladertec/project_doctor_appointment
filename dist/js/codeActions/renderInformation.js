import Visit from "../class/Visit.js";
import getUserDataToSend from "./getUserDataToSend.js";


export default async function renderInformation(event, data, status) {
    if (status === 200) {
        event.target.style.display = 'none';
        document.querySelector('.section-menu__btn').textContent = 'Create visit';
        data.forEach(elem => {
            const post = new Visit(elem);
            post.render('.section-content__cards');
        })

        document.querySelector('.section-menu__btn').addEventListener('click', () => {
            document.querySelector('.input-form').classList.toggle('show');
            document.querySelector('.input-form').addEventListener('submit', getUserDataToSend);
        })
    } else {
        console.log('error');
    }
}