import { cn } from "@/lib/utils";

const BottomBar = () => {
    return (
        <div className="sticky -bottom-0.5 w-full py-2 flex flex-col justify-center items-center bg-background border-t-2 border-foreground z-50">
            <p className={cn("text-center font-light text-base")}>+319 clients satisfaits</p>
        </div>
    );
};

export default BottomBar;