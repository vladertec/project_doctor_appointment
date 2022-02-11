export default class Modal {
    constructor(name, surname, doctor, urgency, shortVisitInfo) {
        this.name = name;
        this.surname = surname;
        this.doctor = doctor;
        this.urgency = urgency;
        this.shortVisitInfo = shortVisitInfo;
        this.pressure = null;
        this.BMI = BMI;
        this.heartDiseases,
            this.age,
            this.lastVisitDate,
            this.visitStatus = "Открыт"
    }

    render() {
        this.handleSelectInputs();
    }

    createModalByLoadPage() {
        let modalWindow = document.createElement("div");
        let btn = document.querySelector(".section-menu__btn-create-visit");
        btn.after(modalWindow);
        modalWindow.innerHTML = `
    <div class="modal fade" data-backdrop="static" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-modal="true" aria-hidden="true" role="dialogue">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Создание визита к доктору</h5>
          </div>
        <div class="modal-body">
        <p class="h6 indent"> Выберите доктора: </p>
        <select class="form-select modal-doctor-select" aria-label="Default select example">
        <option class = "modal-doctor-select-cardiologist" value="Кардиолог">Cardiologist</option>
        <option class = "modal-doctor-select-dentist" value="Стоматолог">Dentist</option>
        <option class = "modal-doctor-select-therapist" value="Терапевт">Therapist</option>
      </select>
     
      <p class="h6 indent"> Введите данные: </p>
    
      <div class="input-group">
    <span class="input-group-text">Имя и фамилия</span>
    <input type="text" aria-label="First name" class="form-control first-name-input" placeholder="Имя">
    <input type="text" aria-label="Last name" class="form-control last-name-input" placeholder="Фамилия">
    </div>
    
    <input type="text" class="form-control purpose-input ident" placeholder="Цель визита">
    <input type="text" class="form-control descriptio-input ident static-input" placeholder="Описание визита">
    
    <div class="cardiologist-input-wrap"><input type="text" class="form-control blood-pressure-input ident cardiologist-input" placeholder="Нормальное давление">
    <input type="text" class="form-control BMI-input ident cardiologist-input" placeholder="Индекс массы тела">
    <input type="text" class="form-control heart-diseases-input ident cardiologist-input" placeholder="Есть ли сердечные заболевания?">
    <input type="text" class="form-control age-input ident cardiologist-input" placeholder="Возраст">
    </div>
  <div class="dentist-input-wrap"></div>
    <div class="therapist-input-wrap"></div>

    <p class="h6 indent"> Выберите срочность визита: </p>
    <select class="form-select modal-doctor-select" aria-label="Default select example">
    <option class = "modal-priority-regular" value="Обычная">Regular</option>
    <option class = "modal-priority-priority" value="Приоритетная">Queue priority</option>
    <option class = "modal-priority-emergency" value="Emergency">Неотложная</option>

    </select>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary modal-close-btn" data-bs-dismiss="modal">Закрыть</button>
          <button type="button" class="btn btn-primary">Сохранить изменения</button>
        </div>
      </div>
    </div>
    </div>
    `
    }

    createTherapistvisit() {
        let therWrap = document.querySelector(".therapist-input-wrap");
        therWrap.insertAdjacentHTML(
            `<input type="text" class="form-control age-input ident" placeholder="Age of visitor" `
        );
    }

    handleSelectInputs() {
        let select = document.querySelector(".modal-doctor-select");
        let cardiologistExtraInput = document.querySelector(
            ".cardiologist-input-wrap"
        );
        let therapistExtraInp = document.querySelector(".therapist-input-wrap");
        let dentistExtraInp = document.querySelector(".dentist-input-wrap");

        select.onchange = function () {
            if (select.value == "Cardiologist") {
                cardiologistExtraInput.innerHTML = `<input type="text" class="form-control blood-pressure-input ident cardiologist-input" placeholder="What is normal blood pressure?">
              <input type="text" class="form-control BMI-input ident cardiologist-input" placeholder="BMI of visitor">
              <input type="text" class="form-control heart-diseases-input ident cardiologist-input" placeholder="Is visitor has any heart deseases?">
              <input type="text" class="form-control age-input ident cardiologist-input" placeholder="Age of visitor">
              `;
                therapistExtraInp.innerHTML = ``;
                dentistExtraInp.innerHTML = ``;
                console.log(cardiologistExtraInput);
            }
            if (select.value == "Dentist") {
                dentistExtraInp.innerHTML = `<input type="text" class="form-control last-visit-input ident" placeholder="When was last doctor visit?">`;
                therapistExtraInp.innerHTML = ``;
                cardiologistExtraInput.innerHTML = ``;
            } else if (select.value == "Therapist") {
                therapistExtraInp.innerHTML = `<input type="text" class="form-control age-input ident" placeholder="Age of visitor"> `;
                dentistExtraInp.innerHTML = ``;
                cardiologistExtraInput.innerHTML = ``;
                console.log(therapistExtraInp);
            }
        };
    }
}
