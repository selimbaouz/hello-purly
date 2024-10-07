"use client";
import SelectButton from "@/components/SelectButton";
import TitleContentPair from "@/components/TitleContentPair";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { selectionWhyData, statsData, whySelected } from "@/data";
import ContainerCard from "../ContainerCard";
import { Separator } from "@/components/ui/separator";
import StatsList from "@/components/StatsList";


/* interface WhyCardProps {
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

const WhyCard = () => {
    const [selected, setSelected] = useState(0);

    return (
        <ContainerCard>
            <div className={cn("w-full space-y-5 rounded-3xl py-14 bg-gradient-combined", "md:space-y-8", "xl:space-y-14")}>
                <div className={cn("px-4 space-y-8", "md:px-20", "xl:px-24")}>
                    <TitleContentPair
                        title="Pourquoi HelloPurly ?"
                        content={whySelected(selected).content}
                    />
                    <div className={cn("grid grid-cols-2 items-center justify-center gap-2 py-4", "xl:grid-cols-4 xl:gap-3")}>
                        {selectionWhyData.map((data, index) => (
                            <SelectButton
                                key={index} 
                                onClick={() => setSelected(index)}
                                title={data.title}
                                icon={data.icon}
                                classname={`w-full cursor-pointer ${selected === index ? "bg-gradient-to-b from-foreground/50 to-[#171923]/50 border border-foreground" : "bg-gradient-to-b from-[#2D3748] to-[#111219] border border-[#2D3748]"}`}
                            />
                        ))}
                    </div>
                </div>
                <div className={cn("pt-14")}>
                    <Separator className="text-[#262D3C] " />
                </div>
                <div className={cn("flex flex-col space-y-14 py-8", "md:flex-row md:space-y-0 md:justify-center md:items-start md:gap-10", "lg:gap-14", "xl:gap-20")}>
                {statsData.map((data, index) => (
                    <div key={index}>
                        <StatsList 
                            title={data.title}
                            content={data.content}
                        />   
                    </div>
                ))}
                </div>
            </div>
        </ContainerCard>
    );
};

export default WhyCard;