"use client";
import SelectButton from "@/components/SelectButton";
import TitleContentPair from "@/components/TitleContentPair";
import { cn } from "@/lib/utils";
import { MdAutorenew } from "react-icons/md";
import { IoManOutline, IoWomanOutline } from "react-icons/io5";
import { useState } from "react";
import Image from "next/image";
import { imageSelected } from "@/data";


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
    const [selected, setSelected] = useState(0);

    return (
        <div className="relative shadow-md shadow-black p-[1px] bg-gradient-to-b from-[#319795] to-[#2D3748]/50 rounded-3xl">
            <div className={cn("w-full space-y-5 rounded-3xl px-4 py-14 bg-gradient-combined")}>
                <TitleContentPair
                    title="3 Modes Disponibles"
                    content="Personnalisez votre expérience avec des modes conçus pour répondre à tous vos besoins."
                />
                <div className={cn("flex items-center justify-center gap-1 py-4")}>
                    {[
                        {
                            title: "Auto", icon: MdAutorenew
                        },
                        {
                            title: "Masculin", icon: IoManOutline
                        },
                        {
                            title: "Féminin", icon: IoWomanOutline
                        }
                    ].map((data, index) => (
                        <div 
                            key={index} 
                            onClick={() => setSelected(index)}
                        >
                            <SelectButton
                                title={data.title}
                                icon={data.icon}
                                classname={`${selected === index ? "bg-gradient-to-b from-foreground/50 to-[#171923]/50 border border-foreground" : "bg-gradient-to-b from-[#2D3748] to-[#111219] border border-foreground/50"}`}
                            />
                        </div>
                    ))}
                </div>
                <div className="w-full flex items-center justify-center py-2">
                    <Image
                        src={imageSelected(selected).image}
                        alt="Image of Product"
                        width={337}
                        height={283}
                        className={cn("rounded-3xl border bg-background")}
                    />
                </div>
                <p className={cn("text-sm py-2 px-4")}>
                    {imageSelected(selected).content}
                </p>
            </div>
        </div>
    );
};

export default ModesCard;