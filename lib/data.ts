import { Log, LogRequest } from "@/types/log"
import api from "./client"
import { calculateResponseTime } from "./utils";

export async function getLogs(): Promise<Log[]> {
    const logRequests: LogRequest[] = await api.getLogs();
    return convertLogRequestsToLogs(logRequests);
}

function convertLogRequestToLog(logRequest: LogRequest): Log {
    const date = new Date(logRequest.request_start_time)
    const dateFormater = new Intl.DateTimeFormat('en-US', { month: 'long', day: '2-digit' });
    const timeFormater = new Intl.DateTimeFormat('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });

    const response_time = calculateResponseTime(logRequest.request_start_time, logRequest.request_end_time)

    return {
        id: logRequest.id,
        request_time: `${dateFormater.format(date)}, ${timeFormater.format(date)}`,
        function_name: logRequest.function_name,
        provider: logRequest.provider_type,
        model: logRequest.kwargs.model || logRequest.kwargs.model_name || "",
        tags: logRequest.tags,
        prompt: logRequest.prompt,
        response: logRequest.response,
        cost: logRequest.cost,
        tokens: logRequest.token_usage.total_tokens,
        temperature: logRequest.kwargs.temperature ?? -1,
        response_time,
    };
}

function convertLogRequestsToLogs(logRequests: LogRequest[]): Log[] {
    return logRequests.map(convertLogRequestToLog);
}

export const logs: LogRequest[] = [
    {
        "function_name": "langchain.PromptLayerChatOpenAI.async",
        "prompt": [
            {
                "content": "You are PrivacyGPT, ",
                "role": "system"
            },
            {
                "content": "PrivacyGPT, ",
                "role": "user"
            }
        ],
        "kwargs": {
            "max_tokens": null,
            "model": "gpt-3.5-turbo",
            "n": 1,
            "request_timeout": null,
            "stream": false,
            "temperature": 0.3
        },
        "request_start_time": "2023-05-20T09:30:06",
        "request_end_time": "2023-05-20T09:30:00",
        "response": [
            {
                "content": "The provided text is not available. Please provide the text to be analyzed.",
                "role": "assistant"
            }
        ],
        "provider_type": "langchain",
        "token_usage": {
            "prompt_tokens": 500,
            "completion_tokens": 673,
            "total_tokens": 1173
        },
        "cost": 0.002346,
        "tags": [
            "Privacy Scorecard",
            "Google"
        ],
        "id": 1,
        "project": {
            "name": "test",
            "tags": [
                "tags"
            ],
            "id": 1
        }
    },
    {
        "function_name": "langchain.PromptLayerChatOpenAI.async",
        "prompt": [
            {
                "content": "You are PrivacyGPT, ",
                "role": "system"
            },
            {
                "content": "PrivacyGPT, ",
                "role": "user"
            }
        ],
        "kwargs": {
            "max_tokens": null,
            "model": "gpt-3.5-turbo",
            "n": 1,
            "request_timeout": null,
            "stream": false,
            "temperature": 0.3
        },
        "request_start_time": "2023-05-20T09:30:06",
        "request_end_time": "2023-05-20T09:30:00",
        "response": [
            {
                "content": "The provided text is not available. Please provide the text to be analyzed.",
                "role": "assistant"
            }
        ],
        "provider_type": "langchain",
        "token_usage": {
            "prompt_tokens": 500,
            "completion_tokens": 673,
            "total_tokens": 1173
        },
        "cost": 0.002346,
        "tags": [
            "Privacy Scorecard",
            "Google"
        ],
        "id": 2,
        "project": {
            "name": "test",
            "tags": [
                "tags"
            ],
            "id": 1
        }
    },
    {
        "function_name": "langchain.PromptLayerChatOpenAI.async",
        "prompt": [
            {
                "content": "You are PrivacyGPT, ",
                "role": "system"
            },
            {
                "content": "PrivacyGPT, ",
                "role": "user"
            }
        ],
        "kwargs": {
            "max_tokens": null,
            "model": "gpt-3.5-turbo",
            "n": 1,
            "request_timeout": null,
            "stream": false,
            "temperature": 0.3
        },
        "request_start_time": "2023-05-20T09:30:06",
        "request_end_time": "2023-05-20T09:30:00",
        "response": [
            {
                "content": "The provided text is not available. Please provide the text to be analyzed.",
                "role": "assistant"
            }
        ],
        "provider_type": "langchain",
        "token_usage": {
            "prompt_tokens": 500,
            "completion_tokens": 673,
            "total_tokens": 1173
        },
        "cost": 0.002346,
        "tags": [
            "Privacy Scorecard",
            "Google"
        ],
        "id": 3,
        "project": {
            "name": "tetra",
            "tags": [
                "req"
            ],
            "id": 2
        }
    }
]
