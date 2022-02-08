export default async function getAllUserCards(token) {
    const data = await axios.get('https://ajax.test-danit.com/api/v2/cards', {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    return data;
}



