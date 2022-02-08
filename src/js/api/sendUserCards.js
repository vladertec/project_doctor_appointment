export default async function getAllUserCards(title, age, weight, token) {
    const body = {
        title: title,
        age: age,
        weight: weight
    }
    const {data} = await axios.post('https://ajax.test-danit.com/api/v2/cards', body, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    console.log(data)
    return data;
}




