import { type } from "os"
import { Message } from "./message"
import { Project } from "./project"
import { PromptTemplateWithVersion } from "./prompt-template"

export type LogBase = {
    id: number
    function_name: string
    provider: string
    model: string
    temperature: number
    prompt: Message[]
    response: Message[]
    request_time: string
    response_time: string
    tokens: number
    cost: number
    tags: string[]
    project: Project | null
}

export type Log = LogBase & {
    prompt_templates: PromptTemplateWithVersion[]
}

export type LogWithPromptVersion = LogBase & {
    version_number: string
}

export type LogRequest = {
    function_name: string
    prompt: Message[] | Record<string, unknown>
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
    response: Message[] | Record<string, unknown>
    provider_type: string
    token_usage: {
        prompt_tokens: number
        completion_tokens: number
        total_tokens: number
    };
    cost: number
    tags: string[]
    id: number
    project: Project | null
    prompt_templates: PromptTemplateWithVersion[]
    version_number?: number
}