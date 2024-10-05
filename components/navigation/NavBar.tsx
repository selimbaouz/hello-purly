import { cn } from "@/lib/utils";
import Logo from "@/public/images/logo.png"
import Image from "next/image";
import Link from "next/link";
import { IoMenuOutline } from "react-icons/io5";
import { RiShoppingBag3Fill } from "react-icons/ri";

const NavBar = () => {
    const classLink = "font-light text-base text-white lg:text-sm xl:text-base";
    return (
        <nav className="backdrop-blur-md -mt-0.1 bg-background/75">
            <div className={cn("p-4 flex justify-between items-center max-w-screen-xl mx-auto", "lg:hidden")}>
                <IoMenuOutline className="text-3xl hover:text-foreground" />
                <Link href="/">
                    <Image src={Logo} alt="Logo of HelloPurly" width={170} height={36} />
                </Link>
                <RiShoppingBag3Fill className="text-3xl text-white hover:text-foreground" />
            </div>
            <div className={cn("hidden", "relative max-w-screen-xl lg:p-6 lg:flex lg:justify-between lg:items-center lg:mx-auto lg:py-6", "xl:px-0")}>
                <Link href="/">
                    <Image src={Logo} alt="Logo of HelloPurly" width={170} height={36} className={cn("lg:w-32", "xl:w-44")} />
                </Link>
                <ul className={cn("absolute inset-0 m-auto flex justify-center items-center gap-5", "xl:gap-6")}>
                    <li>
                        <Link href="" className={cn(classLink)}>Bidet WC</Link>
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
                <RiShoppingBag3Fill className={cn("text-3xl z-10 text-white hover:text-foreground cursor-pointer", "lg:text-2xl", "xl:text-3xl")} />
            </div>
        </nav>
    );
};

export default NavBar;