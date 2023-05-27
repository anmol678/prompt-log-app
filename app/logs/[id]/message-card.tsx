import { Card, Title } from "@tremor/react";
import { MessageStack } from "./message-stack";
import { Message } from "@/types/message";

type MessageCardProps = {
    title: string
    messages: Message[]
}

export default async function MessageCard({ title, messages }: MessageCardProps) {
    return (
        <Card className="h-[calc(80vh)] flex flex-col overflow-hidden">
            <Title className="text-foreground/90 font-bold text-xl mb-4">{title}</Title>
            <MessageStack messages={messages} />
        </Card>
    )
}
