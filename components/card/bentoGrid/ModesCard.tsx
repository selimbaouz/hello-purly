"use client";
import SelectButton from "@/components/SelectButton";
import TitleContentPair from "@/components/TitleContentPair";
import { cn } from "@/lib/utils";
import { useState } from "react";
import Image from "next/image";
import { modeSelected, selectionModesData } from "@/data";
import ContainerCard from "../ContainerCard";
import ModeImage from "@/public/images/bidet/mode.webp";


const ModesCard = () => {
    const [selected, setSelected] = useState(0);

    return (
        <ContainerCard>
            <div className={cn("w-full space-y-5 rounded-3xl px-4 py-14 bg-gradient-combined", "md:px-20 md:space-y-8", "xl:px-64 xl:space-y-14")}>
                <div className={cn("px-4 space-y-8", "md:px-20", "xl:px-24")}>
                    <TitleContentPair
                        title="2 Modes Disponibles"
                        content={modeSelected(selected).content}
                    />
                    <div className={cn("grid grid-cols-2 items-center justify-center gap-2 py-4 max-w-2xl mx-auto", "xl:gap-3")}>
                        {selectionModesData.map((data, index) => (
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
                <div className="w-full flex items-center justify-center py-2">
                    <Image
                        src={ModeImage}
                        alt="Image of Product"
                        width={1080}
                        height={1080}
                        className={cn("rounded-3xl border bg-background", "lg:w-full lg:h-[650px]")}
                    />
                </div>
            </div>
        </ContainerCard>
    );
};

export default ModesCard;