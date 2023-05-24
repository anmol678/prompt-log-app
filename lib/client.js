import axios from 'axios';

class Client {
    constructor() {
        this.http = axios.create({
            baseURL: 'http://127.0.0.1:8000/api',
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }

    async request({ method, url, data }) {
        try {
            const response = await this.http({
                method,
                url,
                data,
            });
            return response.data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
}

class LogsAPI extends Client {
    getLogs() {
        return this.request({ method: 'GET', url: '/logs' });
    }
}

const api = new LogsAPI();

export default api;
