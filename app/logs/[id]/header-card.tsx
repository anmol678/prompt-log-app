import { Card, Title, Text } from "@tremor/react";
import { Log } from "@/types/log"

type LogHeaderProps = {
    log: Log
}

export default async function LogHeader({ log: {
    function_name,
    request_time,
    provider,
    model,
    temperature,
    tags,
    cost,
    tokens,
    response_time,
} }: LogHeaderProps) {
    return (
        <Card className="p-6 flex gap-4 justify-between">
            <div className="flex flex-col justify-between flex-shrink-2 w-[calc(100%-243px)] gap-4">
                <div className="flex flex-col">
                    <Title className="text-foreground/90 text-2xl font-bold mr-2 break-words">{function_name}</Title>
                    <Text className="text-accent-foreground/90 text-md">{request_time}</Text>
                </div>
                <div className="flex flex-col space-y-4">
                    <div className="flex flex-wrap gap-2">
                        {tags.map((tag) => (
                            <span
                                key={tag}
                                className="bg-secondary text-accent-foreground/75 font-medium text-md border py-1 px-2 rounded-lg"
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
