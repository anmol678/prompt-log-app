import { Card, Title, Text } from "@tremor/react";
import { Log } from "@/types/log"

type LogHeaderProps = {
    log: Log
}

export default async function HeaderCard({ log }: LogHeaderProps) {

    return <LogHeader log={log} />


    return (
        <Card className="h-[calc(100%)]">
            <Title className="mb-2">{log.function_name}</Title>
            <Text>{log.provider}, {log.model}</Text>
            <Text>{log.tags}</Text>
        </Card>
    )
}

const LogHeader = ({ log: {
    function_name,
    request_time,
    provider,
    model,
    temperature,
    tags,
    cost,
    tokens,
    response_time,
} }: LogHeaderProps) => {
    return (
        <Card className="bg-background rounded-lg p-6 flex gap-4 justify-between">
            <div className="flex flex-col justify-between flex-shrink-2 w-2/3">
                <div className="flex flex-col">
                    <Title className="text-foreground text-2xl font-bold mr-2 break-words">{function_name}</Title>
                    <Text className="text-accent-foreground text-md">{request_time}</Text>
                </div>
                <div className="flex flex-col space-y-4">
                    <div className="flex flex-wrap">
                        {tags.map((tag) => (
                            <span
                                key={tag}
                                className="bg-gray-200 text-accent-foreground py-1 px-3 rounded-xl text-sm mr-2 mb-2"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-between items-start flex-shrink-0">
                <div className="flex items-center mb-4">
                    <div className="flex items-center">
                        <Text className="font-mono text-md text-accent-foreground/75 font-semibold bg-secondary mr-2 px-3 py-1 rounded-lg border">
                            {model}
                        </Text>
                        <Text className="text-md text-accent-foreground/75 font-semibold bg-secondary rounded-lg border px-3 py-1 text-right">T: {temperature}</Text>
                    </div>
                </div>
                <div className="bg-secondary py-2 px-4 rounded-lg w-full border">
                    <p className="text-accent-foreground/75 text-right">
                        <span className="font-semibold">{tokens} tokens</span>
                    </p>
                    <p className="text-accent-foreground/75 text-right">
                        <span className="font-semibold">${cost}</span>
                    </p>
                    <p className="text-accent-foreground/75 text-right">
                        <span className="font-semibold">{response_time}</span>
                    </p>
                </div>
            </div>
        </Card>
    );
};
