import { Message } from "./message"

export type Log = {
    id: number
    function_name: string
    provider: string
    model: string
    temperature: number
    prompt: Array<Message> | Record<string, unknown>
    response: Array<Message> | Record<string, unknown>
    request_time: string
    response_time: string
    tokens: number
    cost: number
    tags: string[]
    project: {
        title: string
        tags: string[]
        id: number
    } | null
}

export type LogRequest = {
    function_name: string
    prompt: Array<Message> | Record<string, unknown>
    kwargs: Partial<{
        model: string;
        model_name: string
        n: number
        max_tokens: number | null
        request_timeout: number | null
        stream: boolean
        temperature: number
    }>;
    request_start_time: string
    request_end_time: string
    response: Array<Message> | Record<string, unknown>
    provider_type: string
    token_usage: {
        prompt_tokens: number
        completion_tokens: number
        total_tokens: number
    };
    cost: number
    tags: string[]
    id: number
    project: {
        title: string
        tags: string[]
        id: number
    } | null
}