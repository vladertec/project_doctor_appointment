import deleteUserCard from "../api/deleteUserCard.js"

//основная карточка визита
class Visit {
    constructor({id, body:{name, surname, doctor, urgency, shortVisitInfo, ...rest}}) {
        this.name = name;
        this.surname = surname;
        this.doctor = doctor;
        this.urgency = urgency;
        this.shortVisitInfo = shortVisitInfo;
        this.id = id;
        this.visitStatus = "Открыт"
        this.element = null;
        this.fullVisitInfo = null;
        this.showMoreBtn = null;
        this.deleteCardBtn = null;
        this.editBtn = null;
        this.otherParameters = rest;
        this.closeVisitBtn = null;
    }

    render() {
        this.createCard();
        this.addtoPage();
        this.showMore(this.otherParameters, this.id);
        this.deleteCard();
        this.editCard()
    }

    createCard() {
        this.element = `
        <div class="card border-success" style="width: 23rem;" id= "${this.id}">
            <div class="card-body " >
            
                <button id="deleteCardBtn" type="button" class="btn-close" aria-label="Close"></button>
                <p class="card-text">Статус визита: ${this.visitStatus}</p>
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
        this.showMoreBtn.addEventListener('click', (event) => {
            if (this.fullVisitInfo === null) {
                event.target.style.display = "none"
                this.fullVisitInfo = `
                <p class="card-text">Срочность: ${this.urgency}</p>
                <p class="card-text">Краткое описание визита: ${this.shortVisitInfo}</p>
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
        this.deleteCard.addEventListener('click', async () => {
            const token = localStorage.getItem('token');
            const status = await deleteUserCard(this.id, token);
            if (status === 200) {
                document.getElementById(`${this.id}`).style.display = "none";
            }
        })
    }

    editCard() {
        this.editBtn = document.getElementById('editBtn');
        this.editBtn.addEventListener('click', async (event) => {
            event.target.style.display = "none"

            //здесь будет вставлено модальное окно для ввода инфы, его мы импортируем из файла Алисы. html только для визуализации.
            // let card = new Modal()
            // card.
            // отрисовать модалку при помощи импортированного экземпляра класса, 
            //и передать в него данные которые получила в этой карточке и заполнить ими (input.value)
            document.getElementById(`${this.id}`).innerHTML = `
            <div class="input-group input-group-sm mb-3">
                <span class="input-group-text" id="inputGroup-sizing-sm">ФИО:</span>
                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
            </div>
            <div class="input-group input-group-sm mb-3">
                <span class="input-group-text" id="inputGroup-sizing-sm">Врач:</span>
                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
            </div>
            <div class="input-group input-group-sm mb-3">
                <span class="input-group-text" id="inputGroup-sizing-sm">Срочность:</span>
                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
            </div>
            <div class="input-group input-group-sm mb-3">
                <span class="input-group-text" id="inputGroup-sizing-sm">Краткое описание визита:</span>
                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
            </div>
            <a href="#" class="btn btn-success" id="moreDetailsVisitBtn">Сохранить</a>`
        })
    }
}

//карточка визита к Кардиологу
class VisitCardiologist extends Visit {
    constructor(name, surname, doctor, urgency, shortVisitInfo, id) {
        super(name, surname, doctor, urgency, shortVisitInfo, id);
        this.fullVisitInfoCardiologist = null;
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
        })

    }

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
    }

    showMoreDentist() {
        this.showMoreBtn.addEventListener('click', () => {
            this.fullVisitInfoDentist = `
            <p class="card-text">Дата последнего посещения: ${this.otherParameters.lastVisitDate}</p>
            `
            let card = document.getElementById(this.id);
            card.querySelector(".btn-wrap").insertAdjacentHTML('beforeBegin', this.fullVisitInfoDentist)
        })
    }
}

//массив, придуманный для проверки функционала (по факту получаем его с сервера)
// const arrayOfVisits = [
//     {
//         name: 'Сара',
//         surname: 'Паркер',
//         doctor: 'Кардиолог',
//         urgency: 'Неотложная',
//         shortVisitInfo: 'Помогите мне!!!',
//         id: 3,
//         pressure: '160/80',
//         BMI: 6.21,
//         heartDiseases: "Инфаркт",
//         age: 24
//     },
//     {
//         name: 'Вася',
//         surname: 'Петров',
//         doctor: 'Терапевт',
//         urgency: 'Обычная',
//         shortVisitInfo: 'Мне просто так на осмотр',
//         id: 4,
//         age: 36
//     },
//     {
//         name: 'Джон',
//         surname: 'Смит',
//         doctor: 'Стоматолог',
//         urgency: 'Обычная',
//         shortVisitInfo: 'Мне нужен врач',
//         id: 2,
//         lastVisitDate: "25 августа"
//     }
// ]


export {VisitCardiologist, VisitTherapist, VisitDentist}