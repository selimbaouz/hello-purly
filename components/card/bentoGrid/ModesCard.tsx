"use client";
import SelectButton from "@/components/SelectButton";
import TitleContentPair from "@/components/TitleContentPair";
import { cn } from "@/lib/utils";
import { useState } from "react";
import Image from "next/image";
import { modeSelected, selectionModesData } from "@/data";
import ContainerCard from "../ContainerCard";


const ModesCard = () => {
    const [selected, setSelected] = useState(0);

    return (
        <ContainerCard>
            <div className={cn("w-full space-y-5 rounded-3xl px-4 py-14 bg-gradient-combined", "md:px-20 md:space-y-8", "xl:px-64 xl:space-y-14")}>
                <TitleContentPair
                    title="3 Modes Disponibles"
                    content="Personnalisez votre expérience avec des modes conçus pour répondre à tous vos besoins."
                />
                <div className={cn("flex items-center justify-center gap-1 py-4")}>
                    {selectionModesData.map((data, index) => (
                        <SelectButton
                            key={index} 
                            onClick={() => setSelected(index)}
                            title={data.title}
                            icon={data.icon}
                            classname={`cursor-pointer ${selected === index ? "bg-gradient-to-b from-foreground/50 to-[#171923]/50 border border-foreground" : "bg-gradient-to-b from-[#2D3748] to-[#111219] border border-[#2D3748]"}`}
                        />
                    ))}
                </div>
                <div className={cn("md:grid md:grid-cols-2 md:justify-between md:items-start md:gap-10 md:text-left")}>
                    <div className="w-full flex items-center justify-center py-2">
                        <Image
                            src={modeSelected(selected).image ?? ""}
                            alt="Image of Product"
                            width={337}
                            height={283}
                            className={cn("rounded-3xl border bg-background", "lg:w-full lg:h-[350px]")}
                        />
                    </div>
                    <div className={cn("py-2 px-4", "md:space-y-4", "lg:space-y-8")}>
                        <h6 className={cn("hidden", "md:block md:text-3xl md:font-bold", "xl:text-4xl")}>
                            {modeSelected(selected).title}
                        </h6>
                        <p className={cn("text-sm", "lg:text-base", "xl:text-lg")}>
                            {modeSelected(selected).content}
                        </p>
                    </div>
                </div>
            </div>
        </ContainerCard>
    );
};

export default ModesCard;