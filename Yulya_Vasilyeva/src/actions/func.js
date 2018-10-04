
export default function requestData(url, options){
    const baseURL = 'http://127.0.0.1:3000/';
    return fetch(`${baseURL}${url}`,options)
        .then((response) => response.json())
        .catch(err => console.error(err))         
} 