import { cn } from "@/lib/utils";
import Image from "next/image";
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
        <div className="relative shadow-md shadow-black p-[1px] bg-gradient-to-b from-[#319795] to-[#2D3748]/50 rounded-3xl">
            <div className={cn("w-full rounded-3xl bg-gradient-combined flex flex-col justify-between text-left")}>
                <Image
                    src={image}
                    alt="Image of Product"
                    width={337}
                    height={200}
                    className={cn("rounded-t-3xl border w-full", "md:h-80")}
                />
                <div className={cn("p-6 space-y-2", "md:p-8 md:space-y-3")}>
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