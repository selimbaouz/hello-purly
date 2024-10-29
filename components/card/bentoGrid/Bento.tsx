import ImageLoader from "@/components/ImageLoader";
import { cn } from "@/lib/utils";
import { FC } from "react";

interface BentoProps {
    image: string;
    title: string;
    content: string;
}

const Bento: FC<BentoProps> = ({
    image,
    title,
    content
}) => {
    return (
        <div className="relative shadow-md shadow-black p-[1px] bg-gradient-to-b from-[#111219] to-[#2D3748] rounded-3xl">
            <div className={cn("w-auto h-full rounded-3xl bg-gradient-combined flex flex-col justify-between text-left")}>
                <ImageLoader
                    src={image!}
                    alt="Image of Product"
                    width={1080}
                    height={1080}
                    className={cn("rounded-t-3xl w-full", "md:h-[450px]", "lg:h-[350px]", "xl:h-[450px]")}
                />
                <div className={cn("p-6 space-y-2 border-t", "md:p-8 md:space-y-3")}>
                    <h6 className={cn("font-bold text-lg", "md:text-2xl")}>
                        {title}
                    </h6>
                    <p className={cn("text-sm font-light whitespace-pre-line", "md:text-base")}>
                        {content}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Bento;