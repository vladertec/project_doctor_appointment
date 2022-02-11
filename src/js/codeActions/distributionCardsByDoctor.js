import {VisitCardiologist, VisitTherapist, VisitDentist} from "../class/Visit.js";

export default function distributionCardsByDoctor(arrayOfVisits) {
    arrayOfVisits.forEach(newVisit => {
        if (newVisit.doctor === "Кардиолог") {
            const newVisitCardiologist = new VisitCardiologist(newVisit);
            newVisitCardiologist.render();
            newVisitCardiologist.showMoreCardiologist();
        } else if (newVisit.doctor === "Терапевт") {
            const newVisitTherapist = new VisitTherapist(newVisit);
            newVisitTherapist.render();
            newVisitTherapist.showMoreTherapist();
        } else if (newVisit.doctor === "Стоматолог") {
            const newVisitDentist = new VisitDentist(newVisit);
            newVisitDentist.render();
            newVisitDentist.showMoreDentist();
        }
    });
}