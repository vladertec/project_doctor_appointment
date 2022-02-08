export default async function getUserToken(valueEmail, valuePassword) {
    let {data, status} = await axios.post("https://ajax.test-danit.com/api/v2/cards/login", {
        email: valueEmail,
        password: valuePassword
    });
    return data;
}