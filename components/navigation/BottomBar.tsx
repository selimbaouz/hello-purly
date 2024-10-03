import { cn } from "@/lib/utils";

const BottomBar = () => {
    return (
        <div className="sticky -bottom-0.5 w-full py-3 flex flex-col justify-center items-center bg-background border-t-2 border-foreground z-50">
            <p className={cn("text-center font-light text-base uppercase animate-pulse")}>Promo -30% | code: <span className="font-bold">PURLY30</span></p>
        </div>
    );
};

export default BottomBar;