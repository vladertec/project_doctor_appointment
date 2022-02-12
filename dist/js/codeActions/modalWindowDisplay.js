import Modal from "../class/Modal.js";


// export default function modalWindowDisplay(){
//     this.createModalByLoadPage()
//     let modal = new Modal
//     modal.render()
// }

export default function showVisitModal() {

    const newVisitModal = new Modal ();
    newVisitModal.render()
    newVisitModal.getInputValues()
    console.log(newVisitModal);
}
