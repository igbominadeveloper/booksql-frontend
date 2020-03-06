import axios from 'axios';

import LocalStorage from '@/services/localStorage';

const axiosInstance = axios.create({
    baseURL: `${process.env.VUE_APP_BASE_URL}/`,
    headers: {
        'Access-Control-Allow-Origin': '*',
        accept: 'Accept: application/json',
    },
});

axiosInstance.interceptors.request.use(
    function(config) {
        const token = LocalStorage.getItem('token');
        if (token) config.headers['Authorization'] = `Bearer ${token}`;
        return config;
    },
    function(error) {
        return Promise.reject(error);
    },
);

export default axiosInstance;
