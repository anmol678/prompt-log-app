
export type RequestOptions = {
    method: 'GET' | 'POST' | 'PATCH' | 'DELETE';
    url: string;
    data?: any;
    useNoStore?: boolean;
};

export type APIResponse<T> = {
    success: boolean;
    data: T;
    error?: string;
};