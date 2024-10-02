import { cn } from "@/lib/utils";
import { FC } from "react";

interface StatsListProps {
    title: string;
    content: string;
}

const StatsList: FC<StatsListProps>= ({
    title, 
    content
}) => {
    return (
        <div className={cn("space-y-5")}>
            <h3 className={cn("font-bold text-4xl")}>
                {title}
            </h3>
            <p className={cn("font-regular text-base")}>
                {content}
            </p>
        </div>
    );
};

export default StatsList;