import axios from 'axios';

export const api = axios.create({
    withCredentials: true,
    baseURL: 'https://6539e09ee3b530c8d9e8c729.mockapi.io/api/v1/',
});
