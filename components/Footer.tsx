import { cn } from "@/lib/utils";
import Logo from "@/public/images/logo.png"
import Image from "next/image";

const Footer = () => {
    return (
        <footer className={cn('p-8 mt-10 text-left py-14 space-y-10 bg-background z-10 h-96')}>
            <Image src={Logo} alt="Logo of HelloPurly" width={250} height={36} />
        </footer>
    );
};

export default Footer;