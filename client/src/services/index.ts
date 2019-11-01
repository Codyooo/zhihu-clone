import axios from 'axios';

import Storage from '../utils/storage';

const ajax = axios.create({
    timeout: 5000,
});

ajax.interceptors.request.use(config => {
    let token = Storage.getToken();
    if (token) config.headers['Authorization'] = `Bearer ${token}`
    return config;
}, error => Promise.reject(error))

export default ajax;