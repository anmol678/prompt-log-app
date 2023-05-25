
// import { Accordion, AccordionHeader, AccordionBody, AccordionList } from "@tremor/react";
// const MessageAccordion = ({ message }: Message) => {
//     return (
//         <Accordion className="w-full">
//             <AccordionHeader className="hover:bg-muted/50 font-semibold">
//                 {message.role}
//             </AccordionHeader>
//             <AccordionBody>
//                 {message.content}
//             </AccordionBody>
//         </Accordion>
//     )
// }

// export function MessageStack({ messages }: MessageStackProps) {

//     const accordionListRef = useRef();

//     useEffect(() => {
//         if (accordionListRef.current) {
//             const headers = accordionListRef.current.querySelectorAll('.tremor-Accordion-root');
//             const totalHeaderHeight = Array.from(headers).reduce((total, header) => total + header.offsetHeight, 0);
//             const accordianListHeight = Math.max(Math.round(Math.min(1.6 * totalHeaderHeight, 5096)), 800);
//             accordionListRef.current.style.height = `${accordianListHeight}px`;
//             const accordionBodyMaxHeight = accordianListHeight - totalHeaderHeight;
//             const bodies = accordionListRef.current.querySelectorAll('.tremor-AccordionBody-root');
//             Array.from(bodies).forEach(b => {
//                 b.style.maxHeight = `${accordionBodyMaxHeight}px`;
//             });
//         }
//     }, [messages]);

//     return (
//         <AccordionList className="w-full mb-1">
//             {messages.map((message, index) => (
//                 <MessageAccordion key={index} message={message} />
//             ))}
//         </AccordionList>
//     );
// }

