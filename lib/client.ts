import { RequestOptions, APIResponse } from '@/types/client';
import { LogRequest } from '@/types/log';
import { PromptTemplate, PromptTemplateCreate, PromptTemplatePatch } from '@/types/prompt-template';

class Client {
    private baseURL: string;

    constructor() {
        this.baseURL = 'http://127.0.0.1:8000/api';
    }

    async request<T>({ method, url, data, useNoStore = false }: RequestOptions): Promise<T> {
        try {
            const response = await fetch(this.baseURL + url, {
                method,
                headers: {
                    'Content-Type': 'application/json',
                },
                ...(data && ({
                    body: JSON.stringify(data),
                })),
                ...(useNoStore && ({
                    cache: 'no-store',
                }))
            });

            if (!response.ok) {
                throw new Error(response.statusText);
            }

            return response.json();
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

    getLog(id: number): Promise<LogRequest> {
        return this.request({ method: 'GET', url: `/logs/${id}` });
    }
}

class PromptTemplatesAPI extends Client {
    getPromptTemplates(): Promise<PromptTemplate[]> {
        return this.request({ method: 'GET', url: '/prompt-templates', useNoStore: true });
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
