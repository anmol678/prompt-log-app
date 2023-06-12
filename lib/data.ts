import { Log, LogRequest } from "@/types/log"
import { logsAPI } from "./client"
import { calculateResponseTime } from "./utils";
import { Message } from "@/types/message";

export async function getLogs(): Promise<Log[]> {
    const logRequests: LogRequest[] = await logsAPI.getLogs();
    return convertLogRequestsToLogs(logRequests);
}

export async function getLog(id: number): Promise<Log> {
    const logRequest: LogRequest = await logsAPI.getLog(id);
    return convertLogRequestToLog(logRequest);
}

function convertLogRequestsToLogs(logRequests: LogRequest[]): Log[] {
    return logRequests.map(convertLogRequestToLog);
}

function convertLogRequestToLog(logRequest: LogRequest): Log {
    const date = new Date(logRequest.request_start_time)
    const dateFormater = new Intl.DateTimeFormat('en-US', { month: 'long', day: '2-digit' });
    const timeFormater = new Intl.DateTimeFormat('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });

    const response_time = calculateResponseTime(logRequest.request_start_time, logRequest.request_end_time)

    let prompt = logRequest.prompt;
    if (Array.isArray(prompt) && typeof prompt[0] === 'string') {
        prompt = [{ content: prompt[0], role: 'user' }];
    }

    let response = logRequest.response;
    if (typeof response === 'object' && 'text' in response && typeof response.text === 'string') {
        response = [{ content: response.text, role: 'assistant' }];
    }

    return {
        id: logRequest.id,
        request_time: `${dateFormater.format(date)}, ${timeFormater.format(date)}`,
        function_name: logRequest.function_name,
        provider: logRequest.provider_type,
        model: logRequest.kwargs.model || logRequest.kwargs.model_name || '',
        tags: logRequest.tags,
        prompt: prompt as Message[],
        response: response as Message[],
        cost: logRequest.cost,
        tokens: logRequest.token_usage.total_tokens,
        temperature: logRequest.kwargs.temperature ?? -1,
        response_time,
        project: logRequest.project,
        prompt_templates: logRequest.prompt_templates,
    };
}