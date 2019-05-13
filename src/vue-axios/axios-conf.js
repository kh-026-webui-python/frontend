import axios from 'axios/index'

export const BASE = axios.create({
    baseURL: 'http://127.0.0.1:8000',
    headers: {
        'Authorization': 'Token ' + localStorage.token
    }
});