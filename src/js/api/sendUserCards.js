import instance from "./instance.js";

export default async function sendUserCards(body) {
    const {data} = await instance.post('cards', {body});
    return data;
}




