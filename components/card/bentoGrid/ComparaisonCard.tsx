import { comparaisonVariantSelected } from "@/data";
import { cn } from "@/lib/utils";
import { FC } from "react";

interface ComparaisonCardProps {
    variant?: "without" | "with";
}

const ComparaisonCard: FC<ComparaisonCardProps> = ({
    variant = "without"
}) => {
    return (
        <div className={cn(
            "relative shadow-md shadow-black p-[1px] rounded-3xl",
            variant === "with" ? "bg-gradient-to-b from-[#319795] to-[#2D3748]/50" : "bg-[#2D3748]"
        )}>
            <div className={cn(
                "w-auto h-full rounded-3xl flex flex-col justify-between text-left",
                variant === "with" ? "bg-gradient-comparaison-combined" : "bg-gradient-to-b from-[#171923] to-[#111219]"
            )}>
                <div className={cn("px-6 py-8 border-b", "md:px-8 md:py-10")}>
                    <h6 className={cn(
                        "font-bold text-lg", 
                        "md:text-2xl",
                        variant === "with" ? "text-white" : "text-white/50"
                    )}>
                        {comparaisonVariantSelected(variant).title}
                    </h6>
                </div>
                <ul className={cn("px-6 py-8 space-y-2", "md:px-8 md:py-10 md:space-y-3", "lg:py-14")}>
                    {comparaisonVariantSelected(variant).lists.map((data, index) => (
                        <li key={index} className={cn("flex gap-6 items-center")}>
                            <data.icon className={cn(
                                "text-2xl",
                                "lg:text-3xl",
                                variant === "with" ? "text-white" : "text-white/50"
                            )} />
                            <p className={cn(
                                "text-base font-medium", 
                                "md:text-lg",
                                variant === "with" ? "text-white" : "text-white/50"
                            )}>
                                {data.content}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ComparaisonCard;