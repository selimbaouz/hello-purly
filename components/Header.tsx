import { cn } from '@/lib/utils';
import React from 'react';
import GradientButton from './GradientButton';
import HeroVideoDialog from "@/components/ui/hero-video-dialog";
import StatsList from './StatsList';
import { statsData } from '@/data';

const Header = () => {
    return (
        <header className={cn('p-4 text-center py-24 space-y-10 max-w-screen-xl mx-auto', "lg:space-y-12")}>
            <div className="relative p-0.5 bg-gradient-to-r from-white to-foreground rounded-full mx-auto w-max">
                <div className="bg-background py-2 px-6 rounded-full text-sm font-medium">
                Pour une planète plus verte
                </div>
            </div>
            <h1 className={cn('uppercase font-bold text-4xl leading-tight', "md:text-6xl md:leading-[1.2]")}>
                <span className='pointer-events-none whitespace-pre-wrap bg-gradient-to-r bg-clip-text text-center text-transparent from-white to-foreground'>
                    -1500L d’eau économisés
                </span> {" "}
                et <br className={cn("hidden", "lg:block")} />des fesses toujours propre
            </h1>
            <p className={cn("text-base font-regular")}>
                Economisez jusqu{"'"}à 1500L par an tout en profitant d{"'"}une hygiène parfaite.
            </p>
            <GradientButton />
            <div className={cn("flex flex-col space-y-14 py-14 pb-20", "lg:flex-row lg:space-y-0 lg:justify-center lg:items-start lg:gap-20")}>
                {statsData.map((data, index) => (
                    <div key={index}>
                        <StatsList 
                            title={data.title}
                            content={data.content}
                        />   
                    </div>
                ))}
            </div>
            <div className={cn("relative z-10", "lg:h-[533px] lg:w-[861px] lg:mx-auto")}>
                <div className={cn('w-[389px] h-[313px] rounded-[50px] bg-foreground blur-2xl absolute top-5', "lg:h-[533px] lg:w-[861px]")} />
                    <HeroVideoDialog
                        className="block"
                        animationStyle="from-center"
                        videoSrc="https://www.youtube.com/embed/eg_taJ7b9rE"
                        thumbnailSrc="/images/1.png"
                        thumbnailAlt="Hero Video"
                    />
                </div>
        </header>
    );
};

export default Header;