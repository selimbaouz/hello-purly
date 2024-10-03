import { cn } from "@/lib/utils";
import { FC } from "react";
import { IconType } from "react-icons";

interface TrustFeaturesProps {
    icon: IconType;
    title: string;
    content: string;
}

const TrustFeatures: FC<TrustFeaturesProps> = ({
    icon: Icon,
    title,
    content
}) => {
    return (
        <div className="text-center w-full space-y-6 flex flex-col justify-center items-center">
            <Icon className="text-[40px] text-foreground" />
            <h6 className={cn("text-xl font-medium")}>
                {title}
            </h6>
            <p className={cn("font-extralight text-sm px-14")}>
                {content}
            </p>
        </div>
    );
};

export default TrustFeatures;