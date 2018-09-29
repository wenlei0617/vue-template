import axios from 'axios';
import { BASIC_URL, TIMEOUT } from '@/config';
import { Promise } from 'core-js';

const http = axios.create({
    baseURL: BASIC_URL,
    timeout: TIMEOUT
})

http.defaults.headers.common['deviceType'] = 3;

// 请求前拦截器
http.interceptors.request.use(function(config) {
    config.headers.common['Authorization'] = sessionStorage.getItem('TOKEN');
    return config;
}, function(error) {
    return Promise.reject(error);
});

// 返回前拦截器
http.interceptors.response.use(function(response) {
    return response;
}, function(error) {
    return Promise.reject(error);
})

export { http };