import { cn } from "@/lib/utils";
import { FC } from "react";

interface TitleContentPairProps {
    title: string;
    content: string;
    contentBold?: string;
}

const TitleContentPair: FC<TitleContentPairProps> = ({title, content, contentBold}) => {
    return (
        <div className={cn("space-y-8 text-center w-full p-4 max-w-screen-xl mx-auto", "lg:max-w-[800px]")}>
          <h2 className={cn("uppercase font-extrabold text-3xl leading-tight", "md:text-5xl")}>
            {title}
          </h2>
          <p className={cn("font-regular text-base", "md:text-2xl", " lg:mx-auto lg:max-w-xl")}>
            {content}{" "}
            <span className="font-bold">{contentBold}</span>
          </p>
        </div>
    );
};

export default TitleContentPair;