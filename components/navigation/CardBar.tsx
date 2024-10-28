"use client"

import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "../ui/sheet";
import { useOpenCartStore } from "@/store/cart";
import Cart from "../cart/Cart";
import { FC } from "react";

interface CardBarProps {
    variantId: string;
}
const CardBar:FC<CardBarProps> = ({variantId}) => {
    const { isOpenCart, setIsOpenCart } = useOpenCartStore();

    return (
        <Sheet open={isOpenCart} onOpenChange={setIsOpenCart}>
            <SheetContent side="right" className="h-full w-full">
                <SheetHeader>
                    <SheetTitle className="text-white text-xl font-bold">Mon Panier</SheetTitle>
                </SheetHeader>
                <SheetDescription></SheetDescription>
                <Cart variantId={variantId} />
            </SheetContent>
        </Sheet>
    );
};

export default CardBar;