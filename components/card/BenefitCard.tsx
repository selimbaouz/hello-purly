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
        <div className="relative shadow-md shadow-black p-[1px] bg-gradient-to-b from-[#111219] to-[#2D3748] rounded-3xl">
            <div className={cn("w-full text-left space-y-5 rounded-3xl p-8 bg-gradient-to-b from-[#171923] to-[#11121A]")}>
                <div className={cn("rounded-full size-12 bg-gradient-to-b from-foreground to-[#171923] border border-white flex flex-col items-center justify-center")}>
                    <Icon className="size-8"/>
                </div>
                <h4 className={cn("font-bold text-3xl", "md:text-5xl")}>
                    {title}
                </h4>
                <p className={cn("font-light text-sm")}>
                    {content}
                </p>
            </div>
        </div>
    );
};

export default BenefitCard;