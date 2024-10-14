"use client";
import GetRatings from '@/lib/getRating';
import { cn } from '@/lib/utils';
import React, { FC, useState } from 'react';
import { AddToCart } from '../cart/add-to-cart';
import { Product } from '@/types/types';
import Image from 'next/image';
import { FiPlus } from 'react-icons/fi';
import { CgClose } from 'react-icons/cg';
import { useVisibleFloatingCartStore } from '@/store/cart';
import { motion } from 'framer-motion';

interface FloatingBarProps {
    product: Product;
}
const FloatingBar: FC<FloatingBarProps> = ({
    product
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const { isVisible } = useVisibleFloatingCartStore();

    return (
        <motion.div className='sticky bottom-10 px-4 max-w-screen-md mx-auto'>
            <motion.div 
             initial={{ y: 100 }}
             animate={isVisible ? { y: 100 } : { y: 0 }}
             exit={{ y: 100 }}
             transition={{ duration: 0.3 }}
            className={cn('w-full flex justify-end pr-4 -mt-14', "lg:justify-center")}>
                <button
                    className={cn(
                        "rounded-full text-base w-max px-10 p-2 hover:backdrop-blur-md hover:bg-background/75 bg-foreground hover:border-foreground border border-transparent hover:text-foreground text-white font-bold",
                        isOpen && "hidden"
                    )}
                    onClick={() => setIsOpen(true)}
                >
                    <FiPlus className={cn("text-4xl font-bold")} />
                </button>
            </motion.div>
            {isOpen && (
                <div className={cn("-mt-32 z-50 relative shadow-md shadow-black p-[1px] bg-gradient-to-b from-foreground to-[#2D3748] rounded-3xl")}>
                    <CgClose className='absolute top-4 right-4 text-2xl z-50 text-white cursor-pointer' onClick={() => setIsOpen(false)}/>
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
            )}
        </motion.div>
    );
};

export default FloatingBar;