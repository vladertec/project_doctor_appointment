export default 

class Modal {
  constructor(
    doctor,
    visitPurpose,
    visitDescription,
    urgency,
    fullName,
    bloodPressure,
    BMI,
    heartDiseases,
    age,
    lastVisit
  ) {}
  render() {
    this.handleSelectInputs();
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
