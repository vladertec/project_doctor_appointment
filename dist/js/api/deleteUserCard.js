export default async function deleteUserCard(id, token) {
  const data = await axios.delete(`https://ajax.test-danit.com/api/v2/cards/${id}`,
    {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }
  )
  return data.status;
}

