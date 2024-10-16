import { cn } from "@/lib/utils";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { faqData } from "@/data";

const FAQ = ({id}: {id: string}) => {
    return (
        <div id={id} className={cn(
            "p-4 text-left", 
            "lg:p-6", 
            "xl:px-10"
        )}>
            <Accordion type="single" collapsible className="w-full">
                {faqData.map((data, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className={cn("border-white py-1")}>
                        <AccordionTrigger className={cn("text-base", "xl:text-xl")}>
                            {data.title}
                        </AccordionTrigger>
                        <AccordionContent className={cn("text-sm pt-2 whitespace-pre-line", "xl:text-base xl:py-10")}>
                            {data.content}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    );
};

export default FAQ;