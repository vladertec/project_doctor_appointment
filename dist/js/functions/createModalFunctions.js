export default 
function createModalByLoadPage(){
    let modalWindow = document.createElement("div");
    let btn = document.querySelector(".section-menu__btn-create-visit");
    btn.after(modalWindow);
    modalWindow.innerHTML = `
    <div class="modal fade" data-backdrop="static" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-modal="true" aria-hidden="true" role="dialogue">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
          </div>
        <div class="modal-body">
        <p class="h6 indent"> Select your doctor: </p>
        <select class="form-select modal-doctor-select" aria-label="Default select example">
        <option class = "modal-doctor-select-cardiologist" value="Cardiologist">Cardiologist</option>
        <option class = "modal-doctor-select-dentist" value="Dentist">Dentist</option>
        <option class = "modal-doctor-select-therapist" value="Therapist">Therapist</option>
      </select>
     
      <p class="h6 indent"> Enter data: </p>
    
      <div class="input-group">
    <span class="input-group-text">First and last name</span>
    <input type="text" aria-label="First name" class="form-control first-name-input" placeholder="First name">
    <input type="text" aria-label="Last name" class="form-control last-name-input" placeholder="Last name">
    </div>
    
    <input type="text" class="form-control purpose-input ident" placeholder="Purpose of visit">
    <input type="text" class="form-control descriptio-input ident static-input" placeholder="Description of visit">
    
    <div class="cardiologist-input-wrap"><input type="text" class="form-control blood-pressure-input ident cardiologist-input" placeholder="What is normal blood pressure?">
    <input type="text" class="form-control BMI-input ident cardiologist-input" placeholder="BMI of visitor">
    <input type="text" class="form-control heart-diseases-input ident cardiologist-input" placeholder="Is visitor has any heart deseases?">
    <input type="text" class="form-control age-input ident cardiologist-input" placeholder="Age of visitor">
    </div>
  <div class="dentist-input-wrap"></div>
    <div class="therapist-input-wrap"></div>

    <p class="h6 indent"> Select priority of visit: </p>
    <select class="form-select modal-doctor-select" aria-label="Default select example">
    <option class = "modal-priority-regular" value="Regular">Regular</option>
    <option class = "modal-priority-priority" value="Priority">Queue priority</option>
    <option class = "modal-priority-emergency" value="Emergency">Emergency</option>

    </select>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary modal-close-btn" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
    </div>
   
    `
    }