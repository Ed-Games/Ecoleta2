import axios from 'axios';

const api = axios.create({
    baseURL: 'http://exp://192.168.1.104:3333',
});

export default api;