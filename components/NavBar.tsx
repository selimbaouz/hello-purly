import Logo from "@/public/images/logo.png"
import Image from "next/image";
import { IoMenuOutline } from "react-icons/io5";
import { RiShoppingBag3Fill } from "react-icons/ri";

const NavBar = () => {
    return (
        <nav className="backdrop-blur-md -mt-0.5 bg-background/75">
            <div className="p-4 flex justify-between items-center">
                <IoMenuOutline className="text-3xl hover:text-foreground" />
                <Image src={Logo} alt="Logo of HelloPurly" width={170} height={36} />
                <RiShoppingBag3Fill className="text-3xl text-white hover:text-foreground" />
            </div>
        </nav>
    );
};

export default NavBar;