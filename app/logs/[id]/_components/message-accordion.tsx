import { AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import TextContainer from "@/components/ui/text-container";
import { Message } from "@/types/message";

type AccordionItemProps = {
    message: Message
    index: number
}

export default function MessageAccordion({ message: { role, content }, index }: AccordionItemProps) {
    return (
        <AccordionItem value={`${index}`} className="mb-1">
            <AccordionTrigger title={role}>
                <span id="hide-text" className="pt-1">
                    {content.slice(0, 100)}
                </span>
            </AccordionTrigger>
            <AccordionContent>
                <TextContainer text={content} />
            </AccordionContent>
        </AccordionItem>
    )
}