import { cn } from "@/lib/utils";
import Logo from "@/public/images/logo.png"
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    const classLink = "font-light text-base";
    return (
        <footer className={cn('p-8 text-left py-10 space-y-20 bg-background z-10 h-full', "xl:px-0")}>
            <div className={cn("max-w-screen-xl mx-auto space-y-14", "lg:p-6")}>
                <Image src={Logo} alt="Logo of HelloPurly" width={250} height={36} />
                <div className={cn("flex flex-col space-y-10", "lg:flex-row lg:items-start lg:justify-between lg:space-y-0")}>
                    <div className={cn("space-y-4")}>
                        <h6 className={cn("uppercase text-lg font-medium")}>Abonnez-vous</h6>
                        <p className={cn(classLink)}>
                            Restez au courant des nouveautés, <br />recevez des conseils et des offres !
                        </p>
                    </div>
                    <div className={cn("space-y-4")}>
                        <h6 className={cn("uppercase text-lg font-medium")}>Pages Légales</h6>
                        <ul>
                            <li>
                                <Link href="" className={cn(classLink)}>Conditions générales de ventes</Link>
                            </li>
                            <li>
                                <Link href="" className={cn(classLink)}>Livraison & retours</Link>
                            </li>
                            <li>
                                <Link href="" className={cn(classLink)}>Mentions légales</Link>
                            </li>
                            <li>
                                <Link href="" className={cn(classLink)}>Politique de confidentialité</Link>
                            </li>
                            <li>
                                <Link href="" className={cn(classLink)}>Politique de remboursement</Link>
                            </li>
                        </ul>
                    </div>
                    <div className={cn("space-y-4")}>
                        <h6 className={cn("uppercase text-lg font-medium")}>Aide</h6>
                        <ul>
                            <li>
                                <Link href="" className={cn(classLink)}>FAQ</Link>
                            </li>
                            <li>
                                <Link href="" className={cn(classLink)}>A propos</Link>
                            </li>
                            <li>
                                <Link href="" className={cn(classLink)}>Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={cn("py-4")}>
                    <Link href="https://sejiux.com" target="_blank" rel="noopener noreferrer" className={cn("text-sm text-white/30 font-bold", "lg:flex lg:justify-start lg:items-center")}>Made by Sejiux</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;