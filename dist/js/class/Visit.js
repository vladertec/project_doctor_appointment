import deleteUserCard from "../api/deleteUserCard.js"
import editUserCard from "../api/editUserCard.js";
import Modal from "./Modal.js"

//основная карточка визита
class Visit {
    constructor({ id, body: { name, surname, doctor, urgency, shortVisitInfo, visitStatus, purpose, ...rest } }) {
        this.name = name;
        this.surname = surname;
        this.doctor = doctor;
        this.urgency = urgency;
        this.shortVisitInfo = shortVisitInfo;
        this.purpose = purpose
        this.id = id;
        this.visitStatus = visitStatus;
        this.element = null;
        this.fullVisitInfo = null;
        this.showMoreBtn = null;
        this.deleteCardBtn = null;
        this.editBtn = null;
        this.otherParameters = rest;
        this.deleteCardFromServer = null;
    }

    render() {
        this.createCard();
        this.addtoPage();
        this.showMore(this.otherParameters, this.id);
        this.deleteCard();
        this.editCard();

    }

    createCard() {
        this.element = `
        <div class="card border-success" style="width: 23rem;" id= "${this.id}">
            <div class="card-body " >
            
                <button id="deleteCardBtn" data-bs-toggle="modal" data-bs-target="#deleteCardModal" type="button" class="btn-close" aria-label="Close"></button>
                <p class="card-text" id = "visitStatus">Статус визита: ${this.visitStatus}</p>
                <p class="card-text">ФИО: ${this.name} ${this.surname}</p>
                <p class="card-text">Врач: ${this.doctor}</p>
                <div class = "btn-wrap">
                    <a href="#" class="btn btn-success" id="moreDetailsVisitBtn">Показать больше</a>
                    <button type="button" class="btn btn-secondary" id="editBtn">Редактировать</button>
                </div>
            </div>
        </div>`

    }

    addtoPage() {
        document.querySelector('.section-content__cards').insertAdjacentHTML('afterbegin', this.element)
    }

    showMore() {
        this.showMoreBtn = document.getElementById('moreDetailsVisitBtn')
        this.showMoreBtn.addEventListener('click', async (event) => {
            if (this.fullVisitInfo === null) {
                event.target.style.display = "none"
                this.fullVisitInfo = `
                <p class="card-text">Срочность: ${this.urgency}</p>
                <p class="card-text">Краткое описание визита: ${this.shortVisitInfo}</p>
                <p class="card-text">Цель визита: ${this.purpose}</p>

                `
                this.closeVisitBtn = `<button type="button" class="btn btn-dark" id = "closeVisitBtn">Закрыть визит</button>`
                let card = document.getElementById(`${this.id}`);
                card.querySelector(".btn-wrap").insertAdjacentHTML('beforeBegin', this.fullVisitInfo);
                card.querySelector(".btn-wrap").insertAdjacentHTML('beforeEnd', this.closeVisitBtn);
            }
        })
    }

    deleteCard() {
        this.deleteCard = document.getElementById('deleteCardBtn');
        const elemModal = document.getElementById('deleteCardModal')
        const modal = new bootstrap.Modal(elemModal);
        this.deleteCard.addEventListener('click', () => {
            this.deleteCardFromServer = document.getElementById('deleteCardFromServer');
            this.deleteCardFromServer.addEventListener('click', async () => {
                await modal.hide()
                const status = await deleteUserCard(this.id);
                if (status === 200) {
                    document.getElementById(`${this.id}`).style.display = "none";
                }
            })
        })



    }

    editCard() {
        this.editBtn = document.getElementById('editBtn');
        this.editBtn.addEventListener('click', async (event) => {
            event.target.style.display = "none"
            const editcardForm = new Modal()
            editcardForm.render()

            //здесь будет вставлено модальное окно для ввода инфы, его мы импортируем из файла Алисы. html только для визуализации.
            // let card = new Modal()
            // card.
            // отрисовать модалку при помощи импортированного экземпляра класса, 
            //и передать в него данные которые получила в этой карточке и заполнить ими (input.value)
            // document.getElementById(`${this.id}`).innerHTML = `
            // <div class="input-group input-group-sm mb-3">
            //     <span class="input-group-text" id="inputGroup-sizing-sm">ФИО:</span>
            //     <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
            // </div>
            // <div class="input-group input-group-sm mb-3">
            //     <span class="input-group-text" id="inputGroup-sizing-sm">Врач:</span>
            //     <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
            // </div>
            // <div class="input-group input-group-sm mb-3">
            //     <span class="input-group-text" id="inputGroup-sizing-sm">Срочность:</span>
            //     <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
            // </div>
            // <div class="input-group input-group-sm mb-3">
            //     <span class="input-group-text" id="inputGroup-sizing-sm">Краткое описание визита:</span>
            //     <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
            // </div>
            // <a href="#" class="btn btn-success" id="moreDetailsVisitBtn">Сохранить</a>`
        })
    }

}

//карточка визита к Кардиологу
class VisitCardiologist extends Visit {
    constructor(name, surname, doctor, urgency, shortVisitInfo, id) {
        super(name, surname, doctor, urgency, shortVisitInfo, id);
        this.fullVisitInfoCardiologist = null;
        this.closeVisitBtn = null;

    }

    showMoreCardiologist() {
        this.showMoreBtn.addEventListener('click', () => {
            this.fullVisitInfoCardiologist = `
                <p class="card-text">Обычное давление: ${this.otherParameters.pressure}</p>
                <p class="card-text">Индекс массы тела: ${this.otherParameters.BMI}</p>
                <p class="card-text">Перенесенные заболевания: ${this.otherParameters.heartDiseases}</p>
                <p class="card-text">Возраст: ${this.otherParameters.age}</p>
                `
            let card = document.getElementById(this.id);
            console.log(card);
            card.querySelector(".btn-wrap").insertAdjacentHTML('beforeBegin', this.fullVisitInfoCardiologist)
            // this.closeVisitCardiologist()
        })

    }
    // closeVisitCardiologist() {
    //     this.closeVisitBtn = document.getElementById('closeVisitBtn')
    //     console.log(closeVisitBtn);
    //     closeVisitBtn.addEventListener('click', async () => {
    //         const closevisit = {
    //             body: {
    //                 name: this.name,
    //                 surname: this.surname,
    //                 doctor: this.doctor,
    //                 urgency: this.urgency,
    //                 shortVisitInfo: this.shortVisitInfo,
    //                 visitStatus: "Закрыт",
    //                 age: this.age,
    //                 pressure: this.pressure,
    //                 BMI: this.BMI,
    //                 heartDiseases: this.heartDiseases
    //             }
    //         }
    //         await editUserCard(this.id, closevisit)
    //     })
    // }
}

//карточка визита к Терапевту
class VisitTherapist extends Visit {
    constructor(name, surname, doctor, urgency, shortVisitInfo, id) {
        super(name, surname, doctor, urgency, shortVisitInfo, id);
        this.fullVisitInfoCardiologist = null;

    }

    showMoreTherapist() {
        this.showMoreBtn.addEventListener('click', () => {
            this.fullVisitInfoTherapist = `
            <p class="card-text">Возраст: ${this.otherParameters.age}</p>
            `
            let card = document.getElementById(this.id);
            card.querySelector(".btn-wrap").insertAdjacentHTML('beforeBegin', this.fullVisitInfoTherapist)
        })
    }
}


//карточка визита к Стоматологу
class VisitDentist extends Visit {
    constructor(name, surname, doctor, urgency, shortVisitInfo, id) {
        super(name, surname, doctor, urgency, shortVisitInfo, id);
        this.fullVisitInfoDentist = null;
        this.closeVisitBtn = null;
        this.visitStatusItem = null;
    }

    showMoreDentist() {
        this.showMoreBtn.addEventListener('click', async () => {
            this.fullVisitInfoDentist = `
            <p class="card-text">Дата последнего посещения: ${this.otherParameters.lastVisitDate}</p>
            `
            let card = document.getElementById(this.id);
            card.querySelector(".btn-wrap").insertAdjacentHTML('beforeBegin', this.fullVisitInfoDentist)
            await this.closeVisitDentist()
        })


    }
    closeVisitDentist() {
        this.closeVisitBtn = document.getElementById('closeVisitBtn')
        this.closeVisitBtn.addEventListener('click', async (event) => {
           
            this.visitStatusItem = document.getElementById('visitStatus')
            this.visitStatus = "Закрыт"
            console.log(this.visitStatusItem);
            this.visitStatusItem.innerHTML = `Статус визита: Закрыт`
            const elem = {
                body: {
                    name: this.name,
                    surname: this.surname,
                    doctor: this.doctor,
                    urgency: this.urgency,
                    shortVisitInfo: this.shortVisitInfo,
                    purpose: this.purpose,
                    lastVisitDate: this.otherParameters.lastVisitDate,
                    visitStatus: this.visitStatus
                },
                id: this.id
            }
            console.log(elem);
            await editUserCard(this.id, elem)


        })
    }
}


export { VisitCardiologist, VisitTherapist, VisitDentist }