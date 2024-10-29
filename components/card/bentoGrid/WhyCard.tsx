"use client";
import SelectButton from "@/components/SelectButton";
import TitleContentPair from "@/components/TitleContentPair";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { selectionWhyData, whySelected } from "@/data";
import ContainerCard from "../ContainerCard";
import HeroVideoDialog from "@/components/ui/hero-video-dialog";


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
            <div className={cn("w-full space-y-10 rounded-3xl py-14 bg-gradient-combined", "md:space-y-10", "xl:space-y-20 xl:pb-20")}>
                <div className={cn("px-4 space-y-8", "md:px-20", "xl:px-24")}>
                    <TitleContentPair
                        title="Découvrez HelloPurly"
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
                <div className={cn("relative z-10 px-8", "md:h-[433px] md:w-[661px] md:mx-auto", "xl:h-[533px] xl:w-[961px]")}>
                    <HeroVideoDialog
                        className="block"
                        animationStyle="from-center"
                        videoSrc="https://www.youtube.com/embed/eg_taJ7b9rE"
                        thumbnailSrc="/images/bidet/wc.webp"
                        thumbnailAlt="Hero Video"
                    />
                </div>
            </div>
        </ContainerCard>
    );
};

export default WhyCard;