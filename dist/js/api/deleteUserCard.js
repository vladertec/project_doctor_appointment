import instance from "./instance.js";

export default async function deleteUserCard(id) {
  const {status} = await instance.delete(`cards/${id}`)
  return status;
}

