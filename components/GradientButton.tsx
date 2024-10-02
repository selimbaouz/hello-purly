import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

const GradientButton = () => {
    return (
        <div className="relative p-0.5 bg-gradient-to-l from-foreground to-[#899CAA]/30 rounded-full mx-auto w-max">
            <div className="bg-background p-[3px] rounded-full text-sm font-bold">
                <Button className={cn(
                    "bg-gradient-to-b from-background via-background via-50% to-foreground px-[60px] py-[22px] rounded-full text-white text-base font-medium",
                    "hover:bg-gradient-to-b hover:from-foreground hover:via-background hover:via-50% hover:to-background"
                    )}>Découvrir</Button>
            </div>
        </div>
    );
};

export default GradientButton;