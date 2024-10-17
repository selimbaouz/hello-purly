"use client";

import { cn } from "@/lib/utils";
import { useCartStore, useOpenCartStore } from "@/store/cart";
import Link from "next/link";
import { IoMenuOutline } from "react-icons/io5";
import { RiShoppingBag3Fill } from "react-icons/ri";
import Logo from "@/public/images/logo.webp"
import Image from "next/image";
import { useOpenSidebarStore } from "@/store/sidebar";

const NavBarMobile = () => {
    const { cart } = useCartStore();
    const { setIsOpenCart } = useOpenCartStore();
    const { setIsOpenSidebar } = useOpenSidebarStore();
    
    return (
        <div className={cn("p-4 flex justify-between items-center max-w-screen-xl mx-auto", "lg:hidden")}>
            <div 
                onClick={() => setIsOpenSidebar(true)}
                className="p-1"
            >
                <IoMenuOutline className="text-3xl hover:text-foreground" />
            </div>
            <Link href="/" className="absolute left-1/2 transform -translate-x-1/2 cursor-pointer">
                <Image src={Logo} alt="Logo of HelloPurly" width={170} height={36} />
            </Link>
            <div 
                className="relative p-2 cursor-pointer group" 
                onClick={() => setIsOpenCart(true)}
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
    );
};

export default NavBarMobile;