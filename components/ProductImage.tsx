"use client";
import { checkProduct, detailsProduct } from "@/data";
import GetRatings from "@/lib/getRating";
import { cn } from "@/lib/utils";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { Product } from "@/types/types";
import { FC } from "react";
import { AddToCart } from "./cart/add-to-cart";
import Link from "next/link";

interface ProductImageProps {
    product: Product;
}

const ProductImage: FC<ProductImageProps> = ({product}) => {
    return (
        <div className={cn("space-y-4")}>
            <h3 className={cn("text-left uppercase text-5xl font-bold pointer-events-none whitespace-pre-wrap bg-gradient-to-b bg-clip-text text-transparent from-white to-foreground")}>
                {product.title}
            </h3>
            <div className={cn("flex items-center gap-3")}>
                <GetRatings value={5} className={cn("text-xl text-yellow-400", "md:text-lg", "xl:text-base")} />
                <Link href="#avis" className={cn("font-medium text-lg underline")}>
                    4.8/5 basé sur 319 avis
                </Link>
            </div>
            
            <div className={cn("space-y-10 py-4")}>
                <div className={cn("space-y-8")}>
                    {/* <div className={cn("space-y-4")}>
                        <div className="relative p-0.5 bg-gradient-to-r from-white to-foreground rounded-full w-max">
                            <div className="bg-background py-1 px-4 rounded-full text-sm font-medium">
                                Offre du moment
                            </div>
                        </div>
                    </div> */}
                    <div className="space-y-3">
                        <div className={cn("flex items-end gap-4")}>
                            <p className={cn("line-through text-3xl")}>
                                79.99 €
                            </p>
                            <p className={cn("font-bold text-3xl")}>
                                {product.priceRange.minVariantPrice.amount} €
                            </p>
                        </div>
                            <p>Vous économisez <span className="font-medium">20,00€ (25%)</span>, assez pour vous offrir un bon repas… ou une soirée cinéma avec pop-corn à gogo !</p>
                    </div>
                </div>
                <ul className={cn("space-y-2")}>
                    {checkProduct.map((data, index) => (
                        <li 
                            key={index}
                            className={cn("flex items-center gap-4")}>
                                <div className="size-2 bg-white rounded-full"/>
                                <p className={cn("text-regular text-lg")}>
                                    {data.title}
                                </p>
                        </li>
                    ))}
                </ul>
                <AddToCart product={product} size="fullWidth" />
                <Accordion type="single" collapsible className="w-full">
                    {detailsProduct.map((data, index) => (
                        <AccordionItem key={index} value={`item-${index}`} className={cn("border-white py-1 whitespace-pre-line")}>
                            <AccordionTrigger className={cn("text-lg")}>
                                {data.title}
                            </AccordionTrigger>
                            <AccordionContent className={cn("text-sm pt-2")}>
                                {data.content}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </div>
    );
};

export default ProductImage;