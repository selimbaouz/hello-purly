import { cn } from "@/lib/utils";
import { FC } from "react";

interface TitleContentPairProps {
    title: string;
    content: string;
}

const TitleContentPair: FC<TitleContentPairProps> = ({title, content}) => {
    return (
        <div className="space-y-8 text-center mx-auto w-full px-4">
          <h2 className={cn("uppercase font-extrabold text-3xl leading-tight", "md:text-5xl")}>
            {title}
          </h2>
          <p className={cn("font-regular text-base", "md:text-2xl")}>
            {content}
          </p>
        </div>
    );
};

export default TitleContentPair;