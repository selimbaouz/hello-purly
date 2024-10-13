"use client";
import TitleContentPair from "@/components/TitleContentPair";
import { cn } from "@/lib/utils";
import ContainerCard from "../ContainerCard";
import Image1 from "@/public/images/bidet/after.png";
import Image2 from "@/public/images/bidet/before.png";
import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';

const VersusCard = () => {
    return (
        <ContainerCard>
            <div className={cn("w-full space-y-5 rounded-3xl py-14 bg-gradient-combined", "md:space-y-8", "xl:space-y-14")}>
                <div className={cn("px-4 space-y-8", "md:px-20", "xl:px-24 xl:space-y-20")}>
                    <TitleContentPair
                        title="papier toilette vs bidet wc"
                        content="Découvrez pourquoi tant de personnes disent adieu au papier."
                    />
                    <ReactBeforeSliderComponent
                        firstImage={{
                        imageUrl: Image1.src,
                        }}
                        secondImage={{
                        imageUrl: Image2.src,
                        }}
                        className={cn("custom-slider")}
                        delimiterIconStyles={{
                            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" stroke="none" stroke-width="0" stroke-linecap="round" stroke-linejoin="round" transform="rotate(90)"><path d="M18.2 9.3l-6.2-6.3-6.2 6.3c-.2.2-.3.4-.3.7s.1.5.3.7c.2.2.4.3.7.3h11c.3 0 .5-.1.7-.3.2-.2.3-.5.3-.7s-.1-.5-.3-.7zM5.8 14.7l6.2 6.3 6.2-6.3c.2-.2.3-.5.3-.7s-.1-.5-.3-.7c-.2-.2-.4-.3-.7-.3h-11c-.3 0-.5.1-.7.3-.2.2-.3.5-.3.7s.1.5.3.7z"/></svg>')`,
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat',
                            width: '35px',
                            height: '35px',
                            cursor: 'pointer',
                        }}
                        delimiterColor="#319795"
                    />
                </div>
            </div>
        </ContainerCard>
    );
};

export default VersusCard;