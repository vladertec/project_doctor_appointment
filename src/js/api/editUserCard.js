// import instance from "./instance.js";


// export default async function editUserCard (id, object) {
//     const res = await instance.put(`cards/${id}`, object);

// }


export default async function editUserCard(id, object) {
    console.log(id);
    console.log(object);
    const token = localStorage.getItem('token')
    fetch(`https://ajax.test-danit.com/api/v2/cards/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(object)
    })
      .then(response => response.json())
      .then(response => console.log(response))
}
