export default function filterFormInputsValues(event){
    event.preventDefault();
    const search = event.target.elements.search.value;
    const status = event.target.elements.status.value;
    const urgency = event.target.elements.urgency.value;
    console.log(search, status, urgency);
}