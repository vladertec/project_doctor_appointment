export default class Card {
    constructor({title, age, weight}) {
        this.title = title;
        this.age = age;
        this.weight = weight;
        this.element = null;
    }

    render(parentsSelector) {
        this.createElement();
        this.addPage(parentsSelector);
    }

    createElement() {
        this.element = `
            <div class="card">
            <h3>Age: ${this.age}</h3>
            <h3>Title: ${this.title}</h3>
            <h3>Weight: ${this.weight}</h3>
            </div>`
    }

    addPage(parentsSelector) {
        document.querySelector(parentsSelector).insertAdjacentHTML('beforeend',this.element);
    }
}