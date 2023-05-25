import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Message } from "@/types/message";

export type MessageStackProps = {
    messages: Message[]
}

export function MessageStack({ messages }: MessageStackProps) {
    return (
        <Accordion>
            {messages.map((message, index) => (
                <MessageAccordion key={index} message={message} index={index} />
            ))}
        </Accordion>
    )
}

type AccordionItemProps = {
    message: Message
    index: number
}

function MessageAccordion({ message: { role, content }, index }: AccordionItemProps) {
    return (
        <AccordionItem value={`${index}`}>
            <AccordionTrigger>{role}</AccordionTrigger>
            <AccordionContent>{content}</AccordionContent>
        </AccordionItem>
    )
}
