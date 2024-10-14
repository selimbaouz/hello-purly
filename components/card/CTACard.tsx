"use client"

import { cn } from "@/lib/utils";
import GradientButton from "../GradientButton";
import TitleContentPair from "../TitleContentPair";
import ContainerCard from "./ContainerCard";
import { Separator } from "../ui/separator";
import { statsData } from "@/data";
import StatsList from "../StatsList";
import { FC } from "react";
import { AddToCart } from "../cart/add-to-cart";
import { Product } from "@/types/types";

interface CTACardProps {
    title?: string;
    product?: Product;
}
const CTACard: FC<CTACardProps> = ({title, product}) => {
    return (
        <ContainerCard>
            <div className={cn("w-full space-y-5 rounded-3xl py-14 bg-gradient-combined")}>
                <div className={cn("px-4 space-y-8")}>
                    <TitleContentPair
                        title="fini les traces sur vos fesses"
                        content="Pourquoi continuer à frotter quand un jet d’eau fait tout le travail ?"
                    />
                    {product ? (
                        <AddToCart product={product} size="initial" />
                    ) : (
                        <GradientButton
                            link="/products/le-bidet-wc"
                            title={title}
                        />
                    )}
                </div>
                <div className={cn("pt-14")}>
                    <Separator className="text-[#262D3C]" />
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

export default CTACard;