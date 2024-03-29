import { Card } from "@tremor/react";
import { Heading2, Subtitle } from "@/components/ui/heading";
import MetadataBadge from "@/components/ui/metadata-badge";
import { Log } from "@/types/log"
import MetadataTags from "@/components/ui/metadata-tags";

type LogHeaderProps = {
    log: Log
}

export default function LogHeader({ log: {
    function_name,
    request_time,
    provider,
    model,
    temperature,
    tags,
    project,
    cost,
    tokens,
    response_time,
} }: LogHeaderProps) {
    return (
        <Card className="p-6 flex flex-col md:flex-row gap-4 justify-between min-h-[calc(15vh)]">
            <div className="flex flex-col justify-between flex-shrink-2 md:w-[calc(100%-240px)] gap-4">
                <div className="flex flex-col">
                    <Heading2 className="mr-2 break-words">{function_name}</Heading2>
                    <Subtitle>{request_time}</Subtitle>
                </div>
                <div className="flex flex-col space-y-4">
                    <MetadataTags project={project} tags={tags} />
                </div>
            </div>
            <div className="flex items-center content-start w-auto gap-2 flex-wrap py-2 md:px-4">
                <MetadataBadge title='model' content={model} />
                <MetadataBadge title='temperature' content={temperature} />
                <MetadataBadge title='response time' content={response_time} />
                <MetadataBadge title='tokens' content={tokens} />
                <MetadataBadge title='cost' content={cost} />
            </div>
        </Card>
    );
};

