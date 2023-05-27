import { Card, Title } from "@tremor/react";
import { MessageStack } from "./message-stack";
import { Message } from "@/types/message";

type MessageCardProps = {
    title: string
    messages: Message[]
}

export default async function MessageCard({ title, messages }: MessageCardProps) {
    return (
        <Card className="h-full max-h-[calc(75vh)] flex flex-col overflow-hidden">
            <Title className="text-foreground/90 font-bold mb-4">{title}</Title>
            <MessageStack messages={messages} />
        </Card>
    )
}
