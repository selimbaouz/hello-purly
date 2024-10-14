import GetRatings from '@/lib/getRating';
import { cn } from '@/lib/utils';
import React, { FC } from 'react';
import { AddToCart } from '../cart/add-to-cart';
import { Product } from '@/types/types';
import Image from 'next/image';

interface FloatingBarProps {
    product: Product;
}
const FloatingBar: FC<FloatingBarProps> = ({
    product
}) => {
    return (
        <div className={cn("z-50 relative shadow-md shadow-black p-[1px] bg-gradient-to-b from-foreground to-[#2D3748] rounded-3xl")}>
            <div className={cn("rounded-3xl p-4 bg-gradient-to-b from-[#171923] to-[#11121A] text-white relative flex flex-col justify-center")}>
                <div className={cn("flex items-center gap-6")}>
                    <Image src={product.images.edges[0].node.originalSrc} alt="Image of Product" width={14} height={14} className="w-max size-14 rounded-full object-contain" />
                    <div className={cn("space-y-0.5")}>
                        <h6 className={cn("uppercase font-bold text-2xl", "lg:text-3xl")}>
                            {product.title}
                        </h6>
                        <div className={cn("flex items-center gap-2")}>
                            <GetRatings value={5} className={cn("text-sm", "md:text-md")} />
                            <p className={cn("hidden font-light text-sm xs:block")}>
                                4.8/5 sur <span className="font-bold">319 avis</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className='py-4'>
                    <div className='border absolute w-full border-foreground left-0'/>
                </div>
                <div className={cn("flex items-center justify-between")}>
                    <div className={cn("flex items-end gap-2", "lg:gap-3")}>
                        <p className={cn("font-semibold text-2xl")}>
                            {product.priceRange.minVariantPrice.amount} €
                        </p>
                        <p className={cn("line-through text-base")}>
                            79.99 €
                        </p>
                    </div>
                    <AddToCart product={product} color='foreground' />
                </div>
            </div>
        </div>
    );
};

export default FloatingBar;