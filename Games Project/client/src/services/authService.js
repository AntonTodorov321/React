import * as request from '../lib/request';

const baseUrl = 'http://localhost:3030/users';

export const login = (email, password) => request.post(`${baseUrl}/login`, {
    email,
    password
});

export const register = (email, password) => request.post(`${baseUrl}/register`, {
    email,
    password
});

export const logout = () => request.get(`${baseUrl}/logout`);
