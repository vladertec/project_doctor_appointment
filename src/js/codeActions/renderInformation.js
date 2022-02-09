import Visit from "../class/Visit.js";
import getUserDataToSend from "./getUserDataToSend.js";


export default async function renderInformation(event, data, status) {
    if (status === 200) {
        event.target.style.display = 'none';

        document.querySelector('.section-menu__btn').style.display = 'none';
        document.querySelector('.section-menu__btn-create-visit').style.display = 'block';

        data.forEach(elem => {
            const post = new Visit(elem);
            post.render('.section-content__cards');
        })

    } else {
        console.log('error');
    }
}