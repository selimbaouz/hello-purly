"use client";
import { FC } from "react";
import Snowfall from 'react-snowfall';
import Favicon from "@/app/favicon.ico";
import FaviconInactive from "@/app/favicon-inactive.ico";
import { usePageVisibility } from "@/lib/hook";

interface LayoutClientProps {
    children: React.ReactNode;
}

const LayoutClient: FC<LayoutClientProps> = ({children}) => {
    usePageVisibility({
        title: "Fais pas languir tes fesses, reviens vite !",
        onVisible: "HelloPurly - Le bidet qui révolutionne vos toilettes",
        onHidden: () => console.log("L'utilisateur a décidé que le bonheur de ses fesses peut attendre !"),
        favicon: Favicon.src,
        faviconInactive: FaviconInactive.src
    });
    return (
        <main>
            <Snowfall color="white" radius={[0.5, 1.5]} wind={[-0.5, 0.5]} style={{zIndex: 70}}/>
            {children}
        </main>
    );
};

export default LayoutClient;