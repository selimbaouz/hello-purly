import { cn } from "@/lib/utils";
import { FC } from "react";
import { IconType } from "react-icons";

interface EssentialsCardProps {
    icon: IconType;
    title: string;
    index: number;
}

const EssentialsCard: FC<EssentialsCardProps> = ({
    icon: Icon,
    title,
    index
}) => {
    return (
        <div className={cn("relative shadow-md shadow-black p-[1px] rounded-3xl from-[#2D3748]/50 via-background via-50% to-foreground",
            {
                "bg-gradient-to-br": index === 0,
                "bg-gradient-to-bl": index === 1,
                "bg-gradient-to-tr": index === 2,
                "bg-gradient-to-tl": index === 3,
            },
        )}>
            <div className={cn("rounded-3xl h-44 flex flex-col justify-center items-center space-y-4", {
                "bg-gradient-essential-first": index === 0,
                "bg-gradient-essential-second": index === 1,
                "bg-gradient-essential-third": index === 2,
                "bg-gradient-essential-four": index === 3,
            })}>
                <div className={cn("border border-foreground rounded-full p-4 bg-gradient-to-b from-[#2D3748] to-[#171923]")}>
                    <Icon className={cn("text-xl")} />
                </div>
                <p className="text-base text-center font-medium">
                    {title}
                </p>
            </div>
        </div>
    );
};

export default EssentialsCard;