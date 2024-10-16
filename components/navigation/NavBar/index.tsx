"use client";

import SideBar from "../SideBar";
import NavBarMobile from "./NavBarMobile";
import NavBarWeb from "./NavBarWeb";
import CardBar from "../CardBar";
import { Menu } from "@/types/types";
import { useState } from "react";

export default function NavBar({menu}: {menu: Menu[]}) {
    const [isOpenSidebar, setIsOpenSidebar] = useState(false);

    return (
        <nav className="backdrop-blur-md -mt-0.5 bg-background/75 z-[100]">
            <NavBarMobile setIsOpenSidebar={setIsOpenSidebar} />
            <NavBarWeb menu={menu} />

            {/* Panier */}
            <CardBar />
            {/* Liens */}
            <SideBar menu={menu} setIsOpenSidebar={setIsOpenSidebar} isOpenSidebar={isOpenSidebar} />
        </nav>
    );
};
