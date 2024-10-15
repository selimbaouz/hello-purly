import { cn } from "@/lib/utils";
import Logo from "@/public/images/logo.png"
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    const classLink = "font-light text-base";
    return (
        <>
            <footer className={cn('p-8 text-left py-10 space-y-20 bg-background z-10 h-full', "xl:px-0")}>
                <div className={cn("max-w-screen-xl mx-auto space-y-14", "lg:p-6")}>
                    <Image src={Logo} alt="Logo of HelloPurly" width={250} height={36} />
                    <div className={cn("flex flex-col space-y-10", "lg:flex-row lg:items-start lg:justify-between lg:space-y-0 lg:max-w-6xl")}>
                        <div className={cn("space-y-4")}>
                            <h6 className={cn("uppercase text-lg font-medium")}>À propos de Hello Curly</h6>
                            <p className={cn(classLink, "max-w-xs", "lg:max-w-sm")}>
                                {"Chez Hello Curly, nous avons lancé cette boutique pour révolutionner votre expérience de toilette. Notre mission est de promouvoir une hygiène supérieure tout en réduisant notre empreinte écologique. Ensemble, faisons un geste pour nos fesses et pour la planète !"}
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
                            <h6 className={cn("uppercase text-lg font-medium")}>Pages</h6>
                            <ul>
                                <li>
                                    <Link href="" className={cn(classLink)}>BidetWc</Link>
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
                        </div>
                    </div>
                </div>
            </footer>
            <div className={cn("py-6 border-t bg-gradient-to-t from-[#171923] to-background z-[100]")}>
                <div className={cn("max-w-screen-xl mx-auto flex flex-col px-6 justify-center items-center", "lg:flex-row lg:justify-between")}>
                    <p className={cn("text-sm hidden", "lg:block")}>
                        © 2024 Tous droits réservés.
                    </p>
                    <Link href="https://sejiux.com" target="_blank" rel="noopener noreferrer" className={cn("border-b-2 w-max p-2 rounded-full border-white hover:border-t-2 hover:border-b-0")}>
                        <p className="text-sm text-white font-medium flex items-center gap-2">
                            <span>
                                <Image src="/images/sejiux.png" alt="Logo of HelloPurly" width={36} height={36} />
                            </span>
                        </p>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Footer;