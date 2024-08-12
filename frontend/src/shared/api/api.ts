import axios, { AxiosInstance } from 'axios';

export const $api = axios.create({
    baseURL: __API__,
});

class ApiService {
    baseURL: string = '';
    client: AxiosInstance;

    constructor(baseURL: string, client: AxiosInstance) {
        this.baseURL = baseURL;
        this.client = client;
    }
}

export { ApiService };
