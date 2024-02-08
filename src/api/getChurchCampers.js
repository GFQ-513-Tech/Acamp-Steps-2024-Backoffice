const getUsersByChurch = async (params) => {
    try {
        var urlServer = `${urlAPIServer}/${reportsByChurchModule}/${params}`;

        const response = await fetch(urlServer);
    
        if(!response.ok) return {status: response.status};
        
        const data = await response.json();
    
        return {data, status: response.status};
    } catch (error) {
        console.log(error);

        return {status: 500}
    }
}