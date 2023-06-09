import { Card, Title, Text } from "@tremor/react";
import { Log } from "@/types/log"
import { Tag } from "@/components/ui/tag";
import { MetadataBadge } from "@/components/ui/metadata-badge";

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
    project,
    cost,
    tokens,
    response_time,
} }: LogHeaderProps) {
    return (
        <Card className="p-6 flex flex-col md:flex-row gap-4 justify-between min-h-[calc(15vh)]">
            <div className="flex flex-col justify-between flex-shrink-2 md:w-[calc(100%-240px)] gap-4">
                <div className="flex flex-col">
                    <Title className="text-foreground/90 text-2xl font-bold mr-2 break-words">{function_name}</Title>
                    <Text className="text-accent-foreground/90 text-md">{request_time}</Text>
                </div>
                <div className="flex flex-col space-y-4">
                    <div className="flex flex-wrap gap-2">
                        {project && <MetadataBadge title='project' content={project.title} mono={false} />}
                        {tags.map((tag, index) => (
                            <Tag key={index} content={tag} />
                        ))}
                    </div>
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

