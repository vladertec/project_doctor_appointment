import {VisitCardiologist, VisitTherapist, VisitDentist} from "../class/Visit.js";
import getUserDataToSend from "./getUserDataToSend.js";


export default async function renderInformation(event, data, status) {
    if (status === 200) {
        event.target.style.display = 'none';

        document.querySelector('.section-menu__btn').style.display = 'none';
        document.querySelector('.section-menu__btn-create-visit').style.display = 'block';

        if(data.length === 0){
            console.log("No items");
        } else {
            chooseADoctor(data)
        }
        // data.forEach(elem => {
        //     const post = new Visit(elem);
        //     post.render('.section-content__cards');
        // })

           
    } else {
        console.log('error');
    }
}

// эта функция работает с масссивом объектов
function chooseADoctor(arrayOfVisits) {
    arrayOfVisits.forEach(newVisit => {
        console.log(newVisit);
        if (newVisit.doctor === "Кардиолог") {
            const newVisitCardiologist = new VisitCardiologist(newVisit);
            newVisitCardiologist.render()
            newVisitCardiologist.showMoreCardiologist()
        } if else (newVisit.doctor === "Терапевт") {
            const newVisitTherapist = new VisitTherapist(newVisit)
            newVisitTherapist.render()
            newVisitTherapist.showMoreTherapist()
        } if else (newVisit.doctor === "Стоматолог") {
            const newVisitDentist = new VisitDentist(newVisit)
            newVisitDentist.render()
            newVisitDentist.showMoreDentist()
        }
    });

}