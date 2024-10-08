"use client";
import TitleContentPair from "@/components/TitleContentPair";
import { cn } from "@/lib/utils";
import ContainerCard from "../ContainerCard";
/* import ReactCompareImage from 'react-compare-image';
import Image1 from "@/public/images/1.png";
import Image2 from "@/public/images/auto.png"; */

const VersusCard = () => {
    return (
        <ContainerCard>
            <div className={cn("w-full space-y-5 rounded-3xl py-14 bg-gradient-combined", "md:space-y-8", "xl:space-y-14")}>
                <div className={cn("px-4 space-y-8", "md:px-20", "xl:px-24")}>
                    <TitleContentPair
                        title="papier toilette vs bidet wc"
                        content="Découvrez pourquoi tant de personnes disent adieu au papier."
                    />
                    {/* <ReactCompareImage 
                        leftImage={Image1.src} 
                        rightImage={Image2.src} 
                        aspectRatio="wider"
                        handleSize={20}
                    /> */}
                </div>
            </div>
        </ContainerCard>
    );
};

export default VersusCard;