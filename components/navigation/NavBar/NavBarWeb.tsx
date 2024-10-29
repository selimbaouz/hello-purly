"use client"
import { cn } from "@/lib/utils";
import { useCartStore, useOpenCartStore } from "@/store/cart";
import Link from "next/link";
import { RiShoppingBag3Fill } from "react-icons/ri";
import Logo from "@/public/images/logo.webp"
import { Menu } from "@/types/types";
import { FC } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

interface NavBarWebProps {
    menu: Menu[];
}
const NavBarWeb: FC<NavBarWebProps> = ({ menu }) => {
    const classLink = "font-light text-base text-white lg:text-sm xl:text-base hover:underline";
    const { cart } = useCartStore();
    const { setIsOpenCart } = useOpenCartStore();
    const pathname = usePathname();

    return (
        <div className={cn("hidden", "relative max-w-screen-xl lg:p-6 lg:flex lg:justify-between lg:items-center lg:mx-auto lg:py-6", "xl:px-0")}>
            <Link href="/" className="cursor-pointer z-50">
                <Image src={Logo} alt="Logo of HelloPurly" width={170} height={36} className={cn("lg:w-32", "xl:w-44")} />
            </Link>
            <ul className={cn("absolute inset-0 m-auto flex justify-center items-center gap-5", "xl:gap-6")}>
                {menu.map((data, i) => (
                    <li key={i}>
                        {data.path.includes("contact") ? (
                            <Link 
                                href="mailto:hellopurly7@gmail.com"
                                target="_blank" 
                                rel="noopener noreferrer"
                                className={cn(classLink, data.path === pathname && "font-bold underline")}
                            >Contact</Link>
                        ) : (
                            <Link href={data.path} className={cn(classLink, data.path === pathname && "font-bold underline")}>{data.title}</Link>
                        )}
                    </li>
                ))}
            </ul>
            <div 
                className="relative p-2 cursor-pointer group" 
                onClick={() => setIsOpenCart(true)}
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
    );
};

export default NavBarWeb;