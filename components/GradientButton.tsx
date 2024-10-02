import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

const GradientButton = () => {
    return (
        <div className="relative p-0.5 bg-gradient-to-l from-foreground to-[#899CAA]/30 rounded-full mx-auto w-max">
            <div className="bg-background p-[3px] rounded-full text-sm font-bold">
                <Button className={cn("bg-gradient-to-b px-[60px] py-[22px] from-background to-foreground rounded-full text-white text-base font-medium")}>Découvrir</Button>
            </div>
        </div>
    );
};

export default GradientButton;