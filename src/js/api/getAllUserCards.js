import instance from "./instance.js";

export default async function getAllUserCards() {
    const data = await instance.get('cards')
    return data;
}





