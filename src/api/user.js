import { get, post, handleError } from 'Utils/http';

export const getProfile = (token) => get({
    url: '/user/profile',
    headers: {
        'Authorization': `Bearer ${token}`,
    },
}).then(
    (response) => response.data,
    handleError
);

export const login = ({ login, password }) => post({
    url: '/user/login',
    params: { login, password },
}).then(
    (response) => response.data,
    handleError
);

export const signup = ({ login, password, avatar }) => post({
    url: '/user/signup',
    params: { login, password, avatar },
}).then(
    (response) => response.data,
    handleError
);