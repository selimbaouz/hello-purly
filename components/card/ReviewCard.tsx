import GetRatings from "@/lib/getRating";
import { cn } from "@/lib/utils";

const ReviewCard = ({
    score,
    name,
    content,
  }: {
    score?: number;
    name: string;
    content: string;
  }) => {
    return (
        <div className="relative shadow-md shadow-black p-[1px] bg-gradient-to-b from-[#111219] to-[#2D3748] rounded-3xl">
            <div
                className={cn(
                    "relative space-y-3 w-80 h-full cursor-pointer overflow-hidden text-left rounded-3xl p-8 bg-gradient-to-b from-[#171923] to-[#11121A]",
                    "md:w-96 md:space-y-6",
                    "xl:min-h-56"
                )}
            >
                <div className="flex flex-row items-center justify-between">
                    <h6 className={cn("text-lg font-medium dark:text-white", "md:text-2xl", "xl:text-xl")}>
                        {name}
                    </h6>
                    <GetRatings value={score ?? 0} className={cn("text-sm", "md:text-lg", "xl:text-base")} />
                </div>
                <p className={cn("text-sm font-light", "md:text-base", "xl:text-sm")}>{content}</p>
            </div>
        </div>
    );
};

export default ReviewCard;