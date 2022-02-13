import distributionCardsByDoctor from "./distributionCardsByDoctor.js"

export default async function renderInformation(event, data, status) {
    if (status === 200) {
        event.target.style.display = 'none';

        document.querySelector('.section-menu__btn').style.display = 'none';
        document.querySelector('.section-menu__btn-create-visit').style.display = 'block';

        if (data.length === 0) {
            document.querySelector('.no-items').style.display = 'block';
        } else {
            distributionCardsByDoctor(data);
        }

    } else {
        throw new Error('Problem with data');
    }
}


