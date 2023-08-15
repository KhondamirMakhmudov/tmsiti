import axios from 'axios';
import {config} from "@/config";
import storage from "@/services/storage";
import {get} from 'lodash';


// Request for SHNK
const requestSHNK = axios.create({
    baseURL: config.BASE_SHNK_URL,
    params: {},
    headers: {
        common: {
            'Accept': 'application/json',
            'Content-Type': 'application/json; charset=utf-8',
        },
    },
})

requestSHNK.interceptors.request.use((config) => {
    const token = get(JSON.parse(storage.get('settings')), 'state.token', null);
    if (token) {
        config.headers['token'] = `${token}`
    }

    return config;
}, (error) => {
    return  Promise.reject(error);
    }
);

requestSHNK.interceptors.response.use((response) => {
    return response;
}, (error) => {
    return Promise.reject(error);
})


// Request for TMSITI
const requestTMSITI = axios.create({
    baseURL: config.BASE_TMSITI_URL,
    params: {},
    headers: {
        common: {
            'Accept': 'application/json',
            'Content-Type': 'application/json; charset=utf-8',
        },
    },
})


requestTMSITI.interceptors.request.use((config) => {
        const token = get(JSON.parse(storage.get('settings')), 'state.token', null);
        if (token) {
            config.headers['token'] = `${token}`
        }

        return config;
    }, (error) => {
        return  Promise.reject(error);
    }
);

requestTMSITI.interceptors.response.use((response) => {
    return response;
}, (error) => {
    return Promise.reject(error);
})

export {requestSHNK, requestTMSITI};

