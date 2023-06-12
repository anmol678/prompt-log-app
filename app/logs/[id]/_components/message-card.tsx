import { Card } from "@tremor/react";
import { Heading3 } from "@/components/ui/heading";
import MessageStack from "./message-stack";
import { Message } from "@/types/message";

type MessageCardProps = {
    title: string
    messages: Message[]
}

export default function MessageCard({ title, messages }: MessageCardProps) {
    return (
        <Card className="h-full max-h-[calc(75vh)] flex flex-col overflow-hidden">
            <Heading3 className="mb-4">{title}</Heading3>
            <MessageStack messages={messages} />
        </Card>
    )
}
