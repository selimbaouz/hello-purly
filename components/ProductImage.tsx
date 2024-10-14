"use client";
import { checkProduct, detailsProduct } from "@/data";
import GetRatings from "@/lib/getRating";
import { cn } from "@/lib/utils";
import { CheckIcon } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { Product } from "@/types/types";
import { FC } from "react";
import { AddToCart } from "./cart/add-to-cart";

interface ProductImageProps {
    product: Product;
}

const ProductImage: FC<ProductImageProps> = ({product}) => {

    return (
        <div className={cn("space-y-4")}>
            <h3 className={cn("text-left uppercase text-5xl font-bold pointer-events-none whitespace-pre-wrap bg-gradient-to-b bg-clip-text text-transparent from-white to-foreground")}>
                {product.title}
            </h3>
            <div className={cn("flex items-start gap-4")}>
                <GetRatings value={5} className={cn("text-xl", "md:text-lg", "xl:text-base")} />
                <p className={cn("font-medium text-base")}>
                    4.8/5 basé sur 319 avis
                </p>
            </div>
            <div className={cn("space-y-14 py-4")}>
                <div className={cn("flex items-end gap-6")}>
                    <p className={cn("font-bold text-4xl")}>
                        {product.priceRange.minVariantPrice.amount} €
                    </p>
                    <p className={cn("line-through text-base")}>
                        79.99 €
                    </p>
                </div>
                <ul className={cn("space-y-2")}>
                    {checkProduct.map((data, index) => (
                        <li 
                            key={index}
                            className={cn("flex items-center gap-2")}>
                                <CheckIcon />
                                <p className={cn("text-regular text-base")}>
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