import axios from './baseAxios';

const ACCEPT_LANGUAGE = 'ru-RU,ru';

export const get = ({ url, headers = {}, params = {} }) => axios({
    method: 'GET',
    url,
    headers: {
        'Content-Type': 'application/json',
        'Accept-Language': ACCEPT_LANGUAGE,
        ...headers,
    },
    params: {
        ...params,
    },
});

export const post = ({ url, headers = {}, params = {} }) => axios({
    method: 'POST',
    url,
    headers: {
        'Content-Type': 'application/json',
        'Accept-Language': ACCEPT_LANGUAGE,
        Accept: 'application/json',
        ...headers,
    },
    params: {
        ...params,
    },
});

export const handleError = (error) => alert(error.message);
