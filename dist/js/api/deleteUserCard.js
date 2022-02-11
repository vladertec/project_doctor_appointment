export default async function deleteUserCard(id, token) {
  const {status} = await axios.delete(`https://ajax.test-danit.com/api/v2/cards/${id}`,
    {
      headers: {'Authorization': `Bearer ${token}`}
    }
  )
  return status;
}

