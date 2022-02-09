export default class Visit {
    constructor({name, surname, doctor, urgency, shortVisitInfo, id}) {
        this.name = name;
        this.surname = surname;
        this.doctor = doctor;
        this.urgency = urgency;
        this.shortVisitInfo = shortVisitInfo;
        this.id = id;
        this.element = null;
        this.fullVisitInfo = null;
        this.showMoreBtn = null;
        this.deleteCardBtn = null;
        this.editBtn = null;
    }

    render() {
        this.createCard();
        this.addtoPage();
        this.showMore();
        this.deleteCard();
        this.editCard()
    }

    createCard() {
        this.element = `
        <div class="card border-success" style="width: 21rem;" id= "${this.id}">
            <div class="card-body " >
                <button id="deleteCardBtn" type="button" class="btn-close" aria-label="Close"></button>
                <p class="card-text">ФИО: ${this.name} ${this.surname}</p>
                <p class="card-text">Врач: ${this.doctor}</p>
                <a href="#" class="btn btn-success" id="moreDetailsVisitBtn">Показать больше</a>
                <button type="button" class="btn btn-secondary" id="editBtn">Редактировать</button>
            </div>
        </div>`

    }

    addtoPage() {
        document.querySelector('.section-content__cards').insertAdjacentHTML('afterbegin', this.element)
    }

    showMore() {
        this.showMoreBtn = document.getElementById('moreDetailsVisitBtn')
        this.editBtn = document.getElementById('editBtn')
        this.showMoreBtn.addEventListener('click', (event) => {
            if (this.fullVisitInfo === null) {
                this.editBtn.style.display = "none"
                event.target.style.display = "none"
                this.fullVisitInfo = `
                <p class="card-text">Срочность: ${this.urgency}</p>
                <p class="card-text">Краткое описание визита: ${this.shortVisitInfo}</p>
                `
                let card = document.getElementById(`${this.id}`);
                card.querySelector(".card-body").insertAdjacentHTML('beforeEnd', this.fullVisitInfo);
            }
        })
    }

    deleteCard() {
        //удаляю карточку с срвера
        //проверяю удалилась ли она с сервера
        //удаляем её с экрана
        this.deleteCard = document.getElementById('deleteCardBtn');
        this.deleteCard.addEventListener('click', () => {
            document.getElementById(`${this.id}`).style.display = "none"
        })
    }

    editCard() {
        this.editBtn = document.getElementById('editBtn');
        this.editBtn.addEventListener('click', async (event) => {
            event.target.style.display = "none"

            //здесь будет вставлено модальное окно для ввода инфы, его мы импортируем из файла Алисы. html только для визуализации.

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