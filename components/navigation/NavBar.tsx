"use client";

import { cn } from "@/lib/utils";
import Logo from "@/public/images/logo.png"
import Image from "next/image";
import Link from "next/link";
import { IoMenuOutline } from "react-icons/io5";
import { RiShoppingBag3Fill } from "react-icons/ri";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "../ui/sheet";
import { useCartStore, useOpenCartStore } from "@/store/cart";
import Cart from "../cart/Cart";

const NavBar = () => {
    const classLink = "font-light text-base text-white lg:text-sm xl:text-base";
    const { isOpen, setIsOpen } = useOpenCartStore();
    const { cart } = useCartStore();

    return (
        <nav className="backdrop-blur-md -mt-0.1 bg-background/75">
            <div className={cn("p-4 flex justify-between items-center max-w-screen-xl mx-auto", "lg:hidden")}>
                <div className="z-50">
                    <IoMenuOutline className="text-3xl hover:text-foreground" />
                </div>
                <Link href="/" className="absolute left-1/2 transform -translate-x-1/2">
                    <Image src={Logo} alt="Logo of HelloPurly" width={170} height={36} />
                </Link>
                <div 
                    className="relative p-2 cursor-pointer z-50 group" 
                    onClick={() => setIsOpen(true)}
                >
                    <RiShoppingBag3Fill 
                        className={cn("text-3xl text-white group-hover:text-foreground transition-all ease-in-out hover:scale-110", "lg:text-2xl", "xl:text-3xl")}  
                    />
                    {cart.totalQuantity ? (
                        <div className="absolute right-0 top-0 -mr-1 -mt-1 size-5 flex justify-center items-center rounded-full bg-foreground text-[11px] font-medium text-white">
                            {cart.totalQuantity}
                        </div>
                    ) : null}
                </div>
            </div>
            <div className={cn("hidden", "relative max-w-screen-xl lg:p-6 lg:flex lg:justify-between lg:items-center lg:mx-auto lg:py-6", "xl:px-0")}>
                <Link href="/">
                    <Image src={Logo} alt="Logo of HelloPurly" width={170} height={36} className={cn("lg:w-32", "xl:w-44")} />
                </Link>
                <ul className={cn("absolute inset-0 m-auto flex justify-center items-center gap-5", "xl:gap-6")}>
                    <li>
                        <Link href="/products/le-bidet-wc" className={cn(classLink)}>Bidet WC</Link>
                    </li>
                    <li>
                        <Link href="" className={cn(classLink)}>A propos</Link>
                    </li>
                    <li>
                        <Link href="" className={cn(classLink)}>FAQ</Link>
                    </li>
                    <li>
                        <Link href="" className={cn(classLink)}>Contact</Link>
                    </li>
                    <li>
                        <Link href="" className={cn(classLink)}>Suivre ma commande</Link>
                    </li>
                </ul>
                <div 
                    className="relative p-2 cursor-pointer z-50 group" 
                    onClick={() => setIsOpen(true)}
                >
                    <RiShoppingBag3Fill 
                        className={cn("text-3xl text-white group-hover:text-foreground transition-all ease-in-out hover:scale-110", "lg:text-2xl", "xl:text-3xl")}  
                    />
                    {cart.totalQuantity ? (
                        <div className="absolute right-0 top-0 -mr-2 -mt-2 size-6 flex justify-center items-center rounded-full bg-foreground text-[11px] font-medium text-white">
                            {cart.totalQuantity}
                        </div>
                    ) : null}
                </div>
            </div>

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetContent side="right" className="h-full w-full">
                    <SheetHeader>
                        <SheetTitle className="text-white text-xl font-bold">Mon Panier</SheetTitle>
                    </SheetHeader>
                    <SheetDescription></SheetDescription>
                    <Cart />
                </SheetContent>
            </Sheet>
        </nav>
    );
};

export default NavBar;