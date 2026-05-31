import axios from "axios";
const API_KEY = '56089833-df6fa8cd94c036835afda3ed5';

export function getImagesByQuery(query) {
    return axios
    .get('https://pixabay.com/api/', {
        params: {
            key: API_KEY,
            q: query,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: true,
        },
    })
    .then(response => response.data);
}