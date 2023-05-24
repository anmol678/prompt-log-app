
export type Log = {
    request_time: string
    function_name: string
    model: string
    provider: string
    tags: string[]
}

export type LogRequest = {
    function_name: string;
    prompt: Array<{ content: string; role: string }> | Record<string, unknown>;
    kwargs: Partial<{
        max_tokens: number | null;
        model: string;
        model_name: string;
        n: number;
        request_timeout: number | null;
        stream: boolean;
        temperature: number;
    }>;
    request_start_time: string;
    request_end_time: string;
    response: Array<{ content: string; role: string }> | Record<string, unknown>;
    provider_type: string;
    token_usage: {
        prompt_tokens: number;
        completion_tokens: number;
        total_tokens: number;
    };
    cost: number;
    tags: string[];
    id: number;
    project: {
        name: string;
        tags: string[];
        id: number;
    } | null;
}