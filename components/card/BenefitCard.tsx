import { cn } from "@/lib/utils";
import { FC } from "react";
import { IconType } from "react-icons";

interface BenefitCardProps {
    icon: IconType;
    title: string;
    content: string;
}

const BenefitCard: FC<BenefitCardProps> = ({
    icon: Icon,
    title,
    content
}) => {
    return (
        <div className={cn("relative shadow-md shadow-black p-[1px] bg-gradient-to-b from-[#111219] to-[#2D3748] rounded-3xl max-w-screen-xl mx-auto", "lg:h-full")}>
            <div className={cn("w-full text-left space-y-5 rounded-3xl p-8 bg-gradient-to-b from-[#171923] to-[#11121A]", "md:p-10", "md:h-[304px]", "lg:max-w-[480px] lg:h-full lg:p-8")}>
                <div className={cn("rounded-full size-12 bg-gradient-to-b from-foreground to-[#171923] border border-white flex flex-col items-center justify-center", "lg:size-14")}>
                    <Icon className={cn("size-6")}/>
                </div>
                <h4 className={cn("font-bold text-3xl", "md:text-4xl", "lg:text-[26px]", "xl:text-3xl")}>
                    {title}
                </h4>
                <p className={cn("font-light text-base")}>
                    {content}
                </p>
            </div>
        </div>
    );
};

export default BenefitCard;