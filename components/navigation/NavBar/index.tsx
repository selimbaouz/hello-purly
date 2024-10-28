import SideBar from "../SideBar";
import NavBarMobile from "./NavBarMobile";
import NavBarWeb from "./NavBarWeb";
import CardBar from "../CardBar";
import { Menu } from "@/types/types";

interface NavBarProps {
    menu: Menu[];
}
export default function NavBar(
    {menu}: NavBarProps) {

    return (
        <nav className="backdrop-blur-md -mt-0.5 bg-background/75 z-[100]">
            <NavBarMobile />
            <NavBarWeb menu={menu} />

            {/* Panier */}
            <CardBar />
            {/* Liens */}
            <SideBar menu={menu} />
        </nav>
    );
};
