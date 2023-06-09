import axios, { AxiosInstance } from 'axios';
import { RequestOptions, APIResponse } from '@/types/client';
import { LogRequest } from '@/types/log';

class Client {
    private http: AxiosInstance;

    constructor() {
        this.http = axios.create({
            baseURL: 'http://127.0.0.1:8000/api',
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }

    async request<T>({ method, url, data }: RequestOptions): Promise<T> {
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

    getLogs(): Promise<LogRequest[]> {
        return this.request({ method: 'GET', url: '/logs' });
    }

}

export const logsAPI = new LogsAPI();
