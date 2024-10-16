"use client";

import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "../ui/sheet";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/images/logo.png"
import { Menu } from "@/types/types";
import { usePathname } from "next/navigation";
import { Dispatch, SetStateAction } from "react";

interface SideBarProps {
    menu: Menu[];
    isOpenSidebar: boolean;
    setIsOpenSidebar: Dispatch<SetStateAction<boolean>>;
}

export default function SideBar ({
    menu,
    isOpenSidebar,
    setIsOpenSidebar
}: SideBarProps) {
    const classLink = "font-light text-base text-white lg:text-sm xl:text-base";
    const pathname = usePathname();

  return (
    <Sheet open={isOpenSidebar} onOpenChange={setIsOpenSidebar}>
        <SheetContent side="left" className="h-full min-w-full">
        <SheetHeader>
            <SheetTitle>
                <Image src={Logo} alt="Logo of HelloPurly" width={170} height={36} className={cn("lg:w-32", "xl:w-44")} />
            </SheetTitle>
        </SheetHeader>
        <SheetDescription></SheetDescription>
        <ul className={cn("pt-14")}>
            {menu?.map((data, i) => (
                <li key={i} className={cn("border-b border-[#2D3748] py-3 pl-4 hover:bg-[#2D3748]", data.path === pathname && "bg-[#2D3748]")}>
                    <Link 
                    href={data.path} 
                    target={data.title === "Suivre ma commande" ? "_blank" : undefined} 
                    rel={data.title === "Suivre ma commande" ? "noopener noreferrer" : undefined} 
                    className={cn(classLink)}
                    >
                        {data.title}
                    </Link>
                </li>
            ))}
        </ul>
        </SheetContent>
    </Sheet>
  );
}
