function render() {
  showModal();
}

function showModal() {
  let btn = document.querySelector(".section-menu__btn");
  btn.addEventListener("click", () => {
    createElement();
    handleModalClick();
  });
}

function createElement() {
  let modalWindow = document.createElement("div");
  let btn = document.querySelector(".section-menu__btn");
  modalWindowCommonContent(modalWindow);
  btn.after(modalWindow);
}

function handleModalClick() {
  let modalCloseBtn = document.querySelector(".modal-close-btn");
  let modalWindow = document.querySelector(".modal");
  modalCloseBtn.addEventListener("click", () => {
    modalWindow.remove();
  });
  // отправление на сервер
}

function modalWindowCommonContent(element) {
  element.innerHTML = ` <div class="modal fade show" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-modal="true" style="display:block" role="dialogue">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
          </div>
        <div class="modal-body">
        <p class="h6 indent"> Select your doctor: </p>
        <select class="form-select modal-doctor-select" aria-label="Default select example">
        <option class = "modal-doctor-select-cardiologist" value="1">Cardiologist</option>
        <option class = "modal-doctor-select-dentist" value="2">Dentist</option>
        <option class = "modal-doctor-select-therapist" value="3">Therapist</option>
      </select>
     
      <p class="h6 indent"> Enter data: </p>
  
      <div class="input-group">
    <span class="input-group-text">First and last name</span>
    <input type="text" aria-label="First name" class="form-control first-name-input" placeholder="First name">
    <input type="text" aria-label="Last name" class="form-control last-name-input" placeholder="Last name">
  </div>
  
  <input type="text" class="form-control purpose-input ident" placeholder="Purpose of visit">
  <input type="text" class="form-control descriptio-input ident" placeholder="Description of visit">
  
  <p class="h6 indent"> Select priority of visit: </p>
  <select class="form-select modal-doctor-select" aria-label="Default select example">
  <option class = "modal-priority-regular" value="1">Regular</option>
  <option class = "modal-priority-priority" value="2">Queue priority</option>
  <option class = "modal-priority-emergency" value="3">Emergency</option>
  </select>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary modal-close-btn" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
   </div>
   `;
}

render();


// class Modal {
//   constructor(doctor, visitPurpose, visitDescription, urgency, fullName) {
//     this.doctor = doctor;
//     this.visitPurpose = visitPurpose;
//     this.visitDescription = visitDescription;
//     this.urgency = urgency;
//     this.fullName = fullName;
//   }

//   render() {
//     this.showModal();
//   }

//    showModal() {
//       this.createElement();
//       this.handleModalClick();
//     });
//   }
//  createElement() {

// this.modalWindowCommonContent(modalWindow)
// }
//  handleModalClick() {}
//    function modalWindowCommonContent (element)
//    {}

// }
