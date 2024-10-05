import { cn } from "@/lib/utils";
import { FC } from "react";

interface TitleContentPairProps {
    title: string;
    content: string;
    contentBold?: string;
}

const TitleContentPair: FC<TitleContentPairProps> = ({title, content, contentBold}) => {
    return (
        <div className={cn("space-y-8 text-center w-full p-4 max-w-screen-xl mx-auto", "md:max-w-[600px]", "xl:max-w-[800px]")}>
          <h2 className={cn("uppercase font-extrabold text-3xl leading-tight", "md:text-4xl", "xl:text-5xl")}>
            {title}
          </h2>
          <p className={cn("font-regular text-base", "md:text-xl", "lg:mx-auto lg:text-base lg:max-w-sm", "xl:max-w-xl xl:text-2xl")}>
            {content}{" "}
            <span className="font-bold">{contentBold}</span>
          </p>
        </div>
    );
};

export default TitleContentPair;