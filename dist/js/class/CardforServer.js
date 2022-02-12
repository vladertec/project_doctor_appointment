export default class CardForServer {
    constructor({name, surname, doctor, urgency, shortVisitInfo, pressure, BMI, heartDiseases, age, lastVisitDate}) {
        this.name = name;
        this.surname = surname;
        this.doctor = doctor;
        this.urgency = urgency;
        this.shortVisitInfo = shortVisitInfo;
        this.pressure = pressure;
        this.BMI = BMI;
        this.heartDiseases = heartDiseases;
        this.age = age;
        this.lastVisitDate = lastVisitDate;
        this.visitStatus = "Открыт"

    }
}


