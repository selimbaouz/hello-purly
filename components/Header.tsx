import { cn } from '@/lib/utils';
import React from 'react';
import GradientButton from './GradientButton';
import HeroVideoDialog from "@/components/ui/hero-video-dialog";
import StatsList from './StatsList';
import { statsData } from '@/data';

const Header = () => {
    return (
        <div className={cn('p-4 text-center py-24 space-y-10')}>
            <div className="relative p-0.5 bg-gradient-to-r from-white to-foreground rounded-full mx-auto w-max">
                <div className="bg-background py-2 px-8 rounded-full text-sm font-bold">
                Pour une planète plus verte
                </div>
            </div>
            <h1 className={cn('uppercase font-bold text-5xl leading-tight', "md:text-6xl md:leading-[1.2]")}>
                <span className='pointer-events-none whitespace-pre-wrap bg-gradient-to-r bg-clip-text text-center text-transparent from-white to-foreground'>
                    -1500L d’eau économisés
                </span> {" "}
                et des fesses toujours propre
            </h1>
            <p className={cn("text-base font-regular")}>
                Economisez jusqu{"'"}à 1500L par an tout en profitant d{"'"}une hygiène parfaite.
            </p>
            <GradientButton />
            <div className={cn("flex flex-col space-y-14 py-14 pb-20")}>
                {statsData.map((data, index) => (
                    <div key={index}>
                        <StatsList 
                            title={data.title}
                            content={data.content}
                        />   
                    </div>
                ))}
            </div>
            <div className="relative z-10">
                <div className='w-[389px] h-[200px] rounded-[50px] bg-foreground blur-2xl absolute top-5' />
                    <HeroVideoDialog
                        className="block"
                        animationStyle="from-center"
                        videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
                        thumbnailSrc="/public/images/logo.png"
                        thumbnailAlt="Hero Video"
                    />
                </div>
        </div>
    );
};

export default Header;