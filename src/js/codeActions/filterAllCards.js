import getAllUserCards from "../api/getAllUserCards.js";
import distributionCardsByDoctor from "./distributionCardsByDoctor.js";

export default async function filterAllCards(input, firstSelect, secondSelect) {
    document.querySelector('.section-content__cards').innerHTML = '';
    let {data} = await getAllUserCards();
    let objArray = [];
    objArray = [];
    data.map(card => {
        const {body} = card;
        if (Object.values(body).includes(input) || input === '') {
            if (Object.values(body).includes(firstSelect) || firstSelect === 'Все') {
                if (Object.values(body).includes(secondSelect) || secondSelect === 'Все') {
                    objArray.push(card);
                }
            }
        }
    })
    distributionCardsByDoctor(objArray);
}

