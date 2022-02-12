export default async function sendUserCards(body, token) {

    const {data} = await axios.post('https://ajax.test-danit.com/api/v2/cards', {body}, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    console.log(data)
    return data;
}




