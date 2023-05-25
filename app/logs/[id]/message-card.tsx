import { Card, Title } from "@tremor/react";
import { MessageStack, MessageStackProps } from "./message-stack";

type MessageCardProps = {
    title: string
    messages: MessageStackProps
}

export default async function MessageCard({ title, messages }: MessageCardProps) {
    return (
        <Card className="bg-background h-[calc(80vh)] flex flex-col overflow-hidden">
            <Title className="text-foreground mb-4">{title}</Title>
            <MessageStack messages={messages} />
        </Card>
    )
}
