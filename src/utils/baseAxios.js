import axios from 'axios';

import baseUrl from './baseUrl';

let baseAxios = null;

function getBaseAxios() {
    // Возвращаем axios, если он уже инициализирован
    if (baseAxios) return baseAxios;

    baseAxios = axios.create({
        baseURL: baseUrl(),
        timeout: 60000,
        responseType: 'json',
    });

    return baseAxios;
}

getBaseAxios();

export default baseAxios;
