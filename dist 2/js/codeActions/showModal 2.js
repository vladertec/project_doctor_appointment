export default async function showModal(event) {
    event.preventDefault();
    document.querySelector('.form').classList.toggle('show');
}

