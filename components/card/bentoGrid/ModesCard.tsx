"use client";
import TitleContentPair from "@/components/TitleContentPair";
import { cn } from "@/lib/utils";

/* interface ModesCardProps {
    title: string;
    description: string;
    content: string;
    image: string;
    tabs: {
        isSelected: boolean;
        selected: number;
        icon?: IconType;
        title: string;
    }[];
} */

const ModesCard = () => {
    return (
        <div className="relative shadow-md shadow-black p-[1px] bg-gradient-to-b from-[#319795] to-[#2D3748]/50 rounded-3xl">
            <div className={cn("w-full space-y-5 rounded-3xl px-4 py-20 bg-gradient-combined")}>
                <TitleContentPair
                    title="3 Modes Disponibles"
                    content="Personnalisez votre expérience avec des modes conçus pour répondre à tous vos besoins."
                />
            </div>
        </div>
    );
};

export default ModesCard;