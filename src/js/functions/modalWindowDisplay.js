import Modal from "../class/Modal.js";
import createModalByLoadPage from "./createModalFunctions.js";



export default function modalWindowDisplay(){
    this.createModalByLoadPage()
    let modal = new Modal
    modal.render()
}
