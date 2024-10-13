import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { FC } from "react";
import Link from "next/link";

interface GradientButtonProps {
    title?: string;
    size?: "fullWidth" | "initial",
    link?: string;
    onClick?: () => void;
}

const GradientButton: FC<GradientButtonProps> = ({
    title = "Découvrir",
    size = "initial",
    link,
    onClick
}) => {
    return (
        <div className={cn("relative p-0.5 bg-gradient-to-l from-foreground to-[#899CAA]/30 rounded-full mx-auto", size === "fullWidth" ? "w-full xl:w-max xl:mx-0" : "w-max")}>
            <div className="bg-background p-[3px] rounded-full text-sm font-bold">
                <Button className={cn(
                    "bg-gradient-to-b from-background via-background via-50% to-foreground px-[60px] py-[24px] rounded-full text-white text-base font-medium",
                    "hover:bg-gradient-to-b hover:from-foreground hover:via-background hover:via-50% hover:to-background",
                    size === "fullWidth" ? "w-full" : "w-max"
                )}
                    asChild
                    onClick={onClick}
                >
                    <Link href={link ?? ""}>
                    {title}
                    </Link>
                </Button>
            </div>
        </div>
    );
};

export default GradientButton;