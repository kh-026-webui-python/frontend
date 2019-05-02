import axios from 'axios/index'

export const BASE = axios.create({
    baseURL: 'http://localhost:8000',
    headers: {
        'Authorization': 'Token ' + localStorage.token
    }
})

export function getUserData() {
    return BASE.get(`/api/profile/`);
}

export function getAuthUser() {
    return BASE.get(`/api/auth/user/`);
}

