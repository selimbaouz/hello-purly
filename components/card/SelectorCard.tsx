import { cn } from '@/lib/utils';
import { FC } from 'react';

interface SelectorCardProps {
    title: string;
    content: string;
}
const SelectorCard: FC<SelectorCardProps> = ({
    title,
    content
}) => {
    return (
        <div className={cn("relative shadow-md shadow-black p-[1px] bg-gradient-to-b from-[#111219] to-[#2D3748] rounded-3xl", "lg:h-full")}>
            <div className={cn("w-full text-left space-y-5 rounded-3xl p-8 bg-gradient-to-b from-[#171923] to-[#11121A]", "md:p-10", "md:h-[304px]", "lg:h-full lg:p-8 lg:space-y-10 lg:flex lg:flex-col lg:justify-center lg:items-start")}>
                <h4 className={cn("font-bold text-3xl leading-snug", "md:text-4xl", "lg:text-[26px]", "xl:text-[40px] xl:leading-snug")}>
                    {title}
                </h4>
                <p className={cn("font-light text-sm whitespace-pre-line", "md:text-base", "lg:text-xl")}>
                    {content}
                </p>
            </div>
        </div>
    );
};

export default SelectorCard;