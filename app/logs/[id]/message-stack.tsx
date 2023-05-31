import { Accordion } from "@/components/ui/accordion";
import { Message } from "@/types/message";
import { MessageAccordion } from "./message-accordion";

type MessageStackProps = {
    messages: Message[]
}

export function MessageStack({ messages }: MessageStackProps) {
    return (
        <Accordion type="multiple">
            {messages.map((message, index) => (
                <MessageAccordion key={index} message={message} index={index} />
            ))}
        </Accordion>
    )
}
