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
                    "relative space-y-3 w-80 h-full cursor-pointer overflow-hidden text-left rounded-3xl p-8 bg-gradient-to-b from-[#171923] to-[#11121A]"
                )}
            >
                <div className="flex flex-row items-center justify-between">
                    <h6 className="text-lg font-medium dark:text-white">
                        {name}
                    </h6>
                    <GetRatings value={score ?? 0} className="text-sm" />
                </div>
                <p className="text-sm font-light">{content}</p>
            </div>
        </div>
    );
};

export default ReviewCard;