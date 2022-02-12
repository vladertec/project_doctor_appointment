import Modal from "../class/Modal.js";




// эта функция работает! она взаимодействует со слушателем события в файле index.js. 
// выводит модалку на экран при клике на кнопку "Создать визит"
// Но работает с ошибкой. Со второго раза. Нужно думать, как это решить. Подробнее я описала проблему в файле CardforServer

export default function showVisitModal() {
    const newVisitModal = new Modal ();
    newVisitModal.render()
    newVisitModal.getInputValues()
    console.log(newVisitModal);
}
