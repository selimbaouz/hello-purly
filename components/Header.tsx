import { cn } from '@/lib/utils';
import React from 'react';
import GradientButton from './GradientButton';
import HeroVideoDialog from "@/components/ui/hero-video-dialog";
import StatsList from './StatsList';
import { statsData } from '@/data';

const Header = () => {
    return (
        <header className={cn('p-4 text-center py-24 space-y-10 max-w-screen-xl mx-auto', "xl:space-y-12")}>
            <div className="relative p-0.5 bg-gradient-to-r from-white to-foreground rounded-full mx-auto w-max">
                <div className="bg-background py-2 px-6 rounded-full text-sm font-medium">
                Pour une planète plus verte
                </div>
            </div>
            <h1 className={cn('uppercase font-bold text-4xl leading-tight', "md:text-5xl md:leading-[1.2] md:max-w-xl md:mx-auto", "lg:max-w-3xl lg:text-4xl lg:border-white", "xl:text-6xl xl:max-w-max")}>
                <span className='pointer-events-none whitespace-pre-wrap bg-gradient-to-r bg-clip-text text-center text-transparent from-white to-foreground'>
                    -1500L d’eau économisés
                </span> {" "}
                et <br className={cn("hidden", "xl:block")} />des fesses toujours propre
            </h1>
            <p className={cn("text-base font-regular")}>
                Economisez jusqu{"'"}à 1500L par an tout en profitant d{"'"}une hygiène parfaite.
            </p>
            <GradientButton
                link="/products/le-bidet-wc"
            />
            <div className={cn("flex flex-col space-y-14 py-14 pb-20", "md:flex-row md:space-y-0 md:justify-center md:items-start md:gap-10", "lg:gap-14", "xl:gap-20")}>
                {statsData.map((data, index) => (
                    <div key={index}>
                        <StatsList 
                            title={data.title}
                            content={data.content}
                        />   
                    </div>
                ))}
            </div>
            <div className={cn("relative z-10", "md:h-[433px] md:w-[661px] md:mx-auto", "xl:h-[533px] xl:w-[961px]")}>
                <div className={cn('w-[389px] h-[313px] rounded-[50px] bg-foreground blur-2xl absolute top-5', "md:h-[433px] md:w-[661px]", "xl:h-[533px] xl:w-[961px]")} />
                    <HeroVideoDialog
                        className="block"
                        animationStyle="from-center"
                        videoSrc="https://www.youtube.com/embed/eg_taJ7b9rE"
                        thumbnailSrc="/images/1.webp"
                        thumbnailAlt="Hero Video"
                    />
                </div>
        </header>
    );
};

export default Header;