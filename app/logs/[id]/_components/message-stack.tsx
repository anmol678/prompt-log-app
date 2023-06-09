import { Accordion } from "@/components/ui/accordion";
import MessageAccordion from "./message-accordion";
import { Message } from "@/types/message";

type MessageStackProps = {
    messages: Message[]
}

export default function MessageStack({ messages }: MessageStackProps) {
    return (
        <Accordion type="multiple">
            {messages.map((message, index) => (
                <MessageAccordion key={index} message={message} index={index} />
            ))}
        </Accordion>
    )
}
