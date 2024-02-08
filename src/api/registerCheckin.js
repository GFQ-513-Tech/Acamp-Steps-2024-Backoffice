const registerCheckin = async (id) => {
    const urlServer = `${urlAPIServer}/${registerCheckinEndpoint}`

    const response = await fetch(urlServer, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "userId": `${id}`,
        })
    });

    if(!response.ok) return {status: response.status};
    
    const data = await response.json();
    
    return {data, status: response.status};
}