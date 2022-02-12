import CardForServer from "../class/CardforServer.js"


export default class Modal {
  //убрала отсюда свойства. если сделать так как мы придумали - они нам не нужны.
  constructor(
  ) {}
  render() {
    this.createModalByLoadPage();
    this.handleSelectInputs()
    this.handleSubmitClick()
  }

  createModalByLoadPage() {
    let modalWindow = document.createElement("div");
    let btn = document.querySelector(".section-menu__btn");
    btn.after(modalWindow);
    modalWindow.innerHTML = `<div class="modal fade" data-backdrop="static" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-modal="true" aria-hidden="true" role="dialogue">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Создание визита к доктору</h5>
          </div>
        <div class="modal-body">
        <p class="h6 indent"> Выберите доктора: </p>
        <select class="form-select modal-doctor-select" aria-label="Default select example">
        <option class = "modal-doctor-select-cardiologist" value="Cardiologist">Кардиолог</option>
        <option class = "modal-doctor-select-dentist" value="Dentist">Стоматолог</option>
        <option class = "modal-doctor-select-therapist" value="Therapist">Терапевт</option>
      </select>
     
      <p class="h6 indent"> Введите данные: </p>
    
      <div class="input-group">
    <span class="input-group-text">Имя и фамилия</span>
    <input type="text" aria-label="First name" class="form-control first-name-input form-input" placeholder="Имя">
    <input type="text" aria-label="Last name" class="form-control last-name-input form-input" placeholder="Фамилия">
    </div>
    
    <input type="text" class="form-control purpose-input ident form-input" placeholder="Цель визита">
    <input type="text" class="form-control visit-description-input ident form-input" placeholder="Описание визита">
    
    <div class="cardiologist-input-wrap">
    <input type="text" class="form-control blood-pressure-input ident cardiologist-input form-input" placeholder="Нормальное давление">
    <input type="text" class="form-control BMI-input ident cardiologist-input form-input" placeholder="Индекс массы тела">
    <input type="text" class="form-control heart-diseases-input ident cardiologist-input form-input" placeholder="Есть ли сердечные заболевания?">
    <input type="text" class="form-control age-input ident cardiologist-input form-input" placeholder="Возраст">
    </div>
  <div class="dentist-input-wrap"></div>
    <div class="therapist-input-wrap"></div>

    <p class="h6 indent"> Выберите срочность визита: </p>
    <select class="form-select modal-urgency-select" aria-label="Default select example">
    <option class = "modal-priority-regular" value="Regular">Обычная</option>
    <option class = "modal-priority-priority" value="priority">Приоритетная</option>
    <option class = "modal-priority-emergency" value="Emergency">Неотложная</option>

    </select>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary modal-close-btn" data-bs-dismiss="modal">Закрыть</button>
          <button id = "submitVisitModalBtn" type="button" class="btn btn-primary submit-btn">Сохранить изменения</button>
        </div>
      </div>
    </div>
    </div>
    `
    console.log(2);
  }


  handleSelectInputs() {
    let select = document.querySelector('.modal-doctor-select');
    let cardiologistExtraInput = document.querySelector('.cardiologist-input-wrap')
    let therapistExtraInp = document.querySelector('.therapist-input-wrap')
    let dentistExtraInp = document.querySelector('.dentist-input-wrap')


    select.onchange = function () {
      if (select.value == "Cardiologist") {
        cardiologistExtraInput.innerHTML = `<input type="text" class="form-control blood-pressure-input ident cardiologist-input form-input" placeholder="Нормальное давление">
            <input type="text" class="form-control BMI-input ident cardiologist-input form-input" placeholder="Индекс массы тела">
            <input type="text" class="form-control heart-diseases-input ident cardiologist-input form-input" placeholder="Есть ли сердечные заболевания?">
            <input type="text" class="form-control age-input ident cardiologist-input form-input" placeholder="Возраст">
            `
        therapistExtraInp.innerHTML = ``
        dentistExtraInp.innerHTML = ``
        console.log(cardiologistExtraInput);
      }
      if (select.value == "Dentist") {
        dentistExtraInp.innerHTML = `<input type="text" class="form-control last-visit-input ident form-input" placeholder="When was last doctor visit?">`
        therapistExtraInp.innerHTML = ``
        cardiologistExtraInput.innerHTML = ``

      } else if (select.value == "Therapist") {

        therapistExtraInp.innerHTML = `<input type="text" class="form-control age-input ident form-input" placeholder="Age of visitor"> `
        dentistExtraInp.innerHTML = ``
        cardiologistExtraInput.innerHTML = ``
        console.log(therapistExtraInp);

      }
    }
  }

  handleSubmitClick() {
    let submitBtn = document.querySelector(".submit-btn")
    submitBtn.addEventListener("click", () => {
      this.checkIfEmpty();
    });
    console.log(submitBtn)
  }

  checkIfEmpty() {
    let allInputs = document.querySelectorAll(".form-input")
    allInputs.forEach((element) => {
      if (element.value == 0)
        this.addErrorMessage()
    })
  }

  addErrorMessage() {
    let modalUrgencySelect = document.querySelector(".modal-urgency-select")
    let errorText = document.createElement("p")
    modalUrgencySelect.after(errorText)
    errorText.innerHTML = `Заполните все поля для ввода, пожалуйста`
    errorText.classList.add('text-uppercase', 'font-weight-bold', 'text-danger')
  }
  getInputValues() {
    const submitVisitModalBtn = document.getElementById("submitVisitModalBtn")
    
    // добавила слушатель события. нужно подумать по поводу асинхронности. чтобы value не считывалось раньше времени
    submitVisitModalBtn.addEventListener('click', async () => {
      
        const name = await document.querySelector(".first-name-input").value;
        const surname = await document.querySelector(".last-name-input").value;
        const doctor = await document.querySelector(".modal-doctor-select").value;
        const urgency = await document.querySelector(".modal-urgency-select").value;
        console.log(surname);
        let newVisit = {
          name,
          surname,
           doctor,
          urgency
        }
        console.log(newVisit);
        const newCardForServer = new CardForServer(newVisit)
        console.log(newCardForServer);

        // вот эти все свойства тоже нужно будет передать. я пока их закоментила чтобы не тратить время. нужно настроить функционал.

        // this.shortVisitInfo = document.querySelector(".visit-description-input").value
        // this.pressure = document.querySelector(".blood-pressure-input").value
        // this.BMI = document.querySelector(".BMI-input").value
        // this.heartDiseases = document.querySelector(".heart-diseases-input").value
        // this.age = document.querySelector(".age-input").value
        // this.lastVisitDate = document.querySelector(".last-visit-input").value
      
      
    })
  }

  
}