import axios from 'axios';
import { useAuthStore } from '@/stores/auth';

export function request(method, url, config, withAuth = true) {
    const authStore = useAuthStore();
    const token = authStore.getAccessToken();
    const baseURL = import.meta.env.VITE_API_BASE_URL;
    const {
        params,
        data,
        headers,
    } = config;
    const defaultHeader = {
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + token,
    };
    const axiosHeaders = { ...defaultHeader, ...headers };
    return new Promise((resolve, reject) => {
        axios({
            method: method,
            baseURL: baseURL,
            url: url,
            params: params,
            data: data,
            headers: axiosHeaders
        }).then((response) => {
            resolve(response.data);
        }).catch((error) => {
            if (error.response.status === 401 && withAuth) {
                authStore.clearCredentials();
                window.location = `/login`;
            }
            reject(error.response)
        });
    });
}

export function get(url, config) {
    return request("GET", url, config);
}

export function post(url, config) {
    return request("POST", url, config);
}

export function postLogin(url, config) {
    return request("POST", url, config, false);
}

export function put(url, config) {
    return request("PUT", url, config);
}

export function destroy(url, config) {
    return request("DELETE", url, config);
}

export function postForm(url, config) {
    config.headers['Content-Type'] = 'multipart/form-data';
    return request("POST", url, config);
}

export function putForm(url, config) {
    config.headers['Content-Type'] = 'multipart/form-data';
    return request("PUT", url, config);
}