import { cn } from "@/lib/utils";
import Logo from "@/public/images/logo.png"
import Image from "next/image";
import Link from "next/link";
import { IoMenuOutline } from "react-icons/io5";
import { RiShoppingBag3Fill } from "react-icons/ri";

const NavBar = () => {
    const classLink = "font-light text-base text-white";
    return (
        <nav className="backdrop-blur-md -mt-0.1 bg-background/75">
            <div className={cn("p-4 flex justify-between items-center max-w-screen-xl mx-auto", "lg:hidden")}>
                <IoMenuOutline className="text-3xl hover:text-foreground" />
                <Image src={Logo} alt="Logo of HelloPurly" width={170} height={36} />
                <RiShoppingBag3Fill className="text-3xl text-white hover:text-foreground" />
            </div>
            <div className={cn("hidden", "lg:flex lg:justify-between lg:items-center lg:max-w-screen-xl lg:mx-auto lg:py-6")}>
                <Link href="/">
                    <Image src={Logo} alt="Logo of HelloPurly" width={170} height={36} />
                </Link>
                <ul className="lg:flex lg:items-center lg:gap-8">
                    <li>
                        <Link href="" className={cn(classLink)}>Bidet WC</Link>
                    </li>
                    <li>
                        <Link href="" className={cn(classLink)}>Suivre ma commande</Link>
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
                </ul>
                <RiShoppingBag3Fill className="text-3xl text-white hover:text-foreground cursor-pointer" />
            </div>
        </nav>
    );
};

export default NavBar;