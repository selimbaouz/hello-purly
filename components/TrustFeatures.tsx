import { cn } from "@/lib/utils";
import { FC } from "react";
import { IconType } from "react-icons";
import GradientIcon from "./GradientIcon";

interface TrustFeaturesProps {
    icon: IconType;
    title: string;
    content: string;
    index: number;
}

const TrustFeatures: FC<TrustFeaturesProps> = ({
    icon,
    title,
    content,
    index
}) => {
    return (
        <div className="text-center w-full space-y-6 flex flex-col justify-center items-center">
           <GradientIcon 
            icon={icon}
            strokeWith={index === 2 ? 2 : 0}
            isFill={index === 0 || index === 1 || index === 3}
            isStroke={index === 2}
           />
            <h6 className={cn("text-2xl font-medium")}>
                {title}
            </h6>
            <p className={cn("font-light text-white/70 text-base px-10", "md:px-6", "lg:px-20", "xl:px-10")}>
                {content}
            </p>
        </div>
    );
};

export default TrustFeatures;