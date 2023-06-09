import axios, { AxiosInstance } from 'axios';
import { RequestOptions, APIResponse } from '@/types/client';
import { LogRequest } from '@/types/log';
import { PromptTemplate, PromptTemplateCreate, PromptTemplatePatch } from '@/types/prompt-template';

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

class PromptTemplatesAPI extends Client {

    getPromptTemplates(): Promise<PromptTemplate[]> {
        return this.request({ method: 'GET', url: '/prompt-templates' });
    }

    getPromptTemplate(id: number): Promise<PromptTemplate> {
        return this.request({ method: 'GET', url: `/prompt-templates/${id}` });
    }

    createPromptTemplate(data: PromptTemplateCreate): Promise<PromptTemplate> {
        return this.request({ method: 'POST', url: '/prompt-templates', data });
    }

    updatePromptTemplate(id: number, data: PromptTemplatePatch): Promise<PromptTemplate> {
        return this.request({ method: 'PATCH', url: `/prompt-templates/${id}`, data });
    }

    deletePromptTemplate(id: number): Promise<void> {
        return this.request({ method: 'DELETE', url: `/prompt-templates/${id}` });
    }

}

export const logsAPI = new LogsAPI();
export const promptTemplatesAPI = new PromptTemplatesAPI();
