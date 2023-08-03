import axios from 'axios';
import {config} from "@/config";
import storage from "@/services/storage";
import {get} from 'lodash';

const request = axios.create({
    baseURL: config.API_URL,
    params: {},
    headers: {
        common: {
            'Accept': 'application/json',
            'Content-Type': 'application/json; charset=utf-8',
        },
    },
})

request.interceptors.request.use((config) => {
    const token = get(JSON.parse(storage.get('settings')), 'state.token', null);
    if (token) {
        config.headers['token'] = `${token}`
    }

    return config;
}, (error) => {
    return  Promise.reject(error);
    }
);

request.interceptors.response.use((response) => {
    return response;
}, (error) => {
    return Promise.reject(error);
})

export {request};

