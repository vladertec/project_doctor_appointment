export default async function sendUserCards(name, surname, doctor, urgency, shortVisitInfo, id, token) {
    const body = {
        name: name,
        surname: surname,
        doctor: doctor,
        urgency: urgency,
        shortVisitInfo: shortVisitInfo,
        id: id
    }
    const {data} = await axios.post('https://ajax.test-danit.com/api/v2/cards', body, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    console.log(data)
    return data;
}




