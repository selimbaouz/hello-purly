import Logo from "@/public/images/logo.png"
import Image from "next/image";
import { IoMenuOutline } from "react-icons/io5";
import { RiShoppingBag3Fill } from "react-icons/ri";

const NavBar = () => {
    return (
        <nav>
            <div className="p-4 flex justify-between items-center mt-1">
                <IoMenuOutline className="text-3xl" />
                <Image src={Logo} alt="Logo of HelloPurly" width={170} height={36} />
                <RiShoppingBag3Fill className="text-3xl text-white" />
            </div>
        </nav>
    );
};

export default NavBar;