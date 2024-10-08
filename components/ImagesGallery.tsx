"use client"

import { cn } from "@/lib/utils";
import Image1 from "@/public/images/bidet/1.webp";
import Image2 from "@/public/images/bidet/2.png";
import Image3 from "@/public/images/bidet/3.png";
import Image4 from "@/public/images/bidet/4.png";
import Image5 from "@/public/images/bidet/5.png";
import Image6 from "@/public/images/bidet/6.png";
import Image from 'next/image';
import React, { useState } from 'react';

const ImagesGallery = () => {
    const [bigImageIndex, setBigImageIndex] = useState(0);
    const images = [Image2, Image1, Image3, Image4, Image5, Image6];
    
    const handleImageClick = (index: number) => {
        setBigImageIndex(index);
    };

    const handleSwipe = (direction: 'left' | 'right') => {
        if (direction === 'left') {
            setBigImageIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : images.length - 1)); // Précédent
        } else {
            setBigImageIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : 0)); // Suivant
        }
    };

    const handleTouchStart = (e: React.TouchEvent<HTMLImageElement>) => {
        const touchStartX = e.touches[0].clientX;

        const handleTouchMove = (event: TouchEvent) => {
            const touchEndX = event.touches[0].clientX;
            const touchDiff = touchStartX - touchEndX;

            if (touchDiff > 50) {
                handleSwipe('right'); // Glisser à droite
                document.removeEventListener('touchmove', handleTouchMove);
            } else if (touchDiff < -50) {
                handleSwipe('left'); // Glisser à gauche
                document.removeEventListener('touchmove', handleTouchMove);
            }
        };

        // Ajoutez un écouteur pour le mouvement
        document.addEventListener('touchmove', handleTouchMove as EventListener);

        // Supprimez l'écouteur lorsque l'événement touche est terminé
        const handleTouchEnd = () => {
            document.removeEventListener('touchmove', handleTouchMove as EventListener);
            document.removeEventListener('touchend', handleTouchEnd);
        };
        document.addEventListener('touchend', handleTouchEnd);
    };

    return (
        <div className={cn("flex flex-col gap-3 w-full", "xl:sticky xl:top-0")}>
            <Image
                src={images[bigImageIndex]} // Utilisez l'index pour obtenir l'image
                alt='Main Images of Bidet-Wc'
                className={cn('bg-white h-[26rem] mx-auto w-full', "lg:h-auto", 'xl:rounded-3xl')}
                width={387}
                height={355}
                onTouchStart={handleTouchStart} // Ajoutez l'événement touch
            />
            <div className={cn("flex gap-2 items-center px-4", "lg:px-0")}>
                {images.map((image, index) => (
                    <div key={index} className={cn('w-full rounded-xl cursor-pointer')} onClick={() => handleImageClick(index)}>
                        <Image
                            src={image}
                            alt='Images of Bidet-Wc'
                            className={cn(
                                'bg-white rounded-xl mx-auto w-auto',
                                'xl:w-full',
                                images[bigImageIndex].src === image.src ? "border-4 border-foreground" : ""
                            )}
                            width={150}
                            height={150}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ImagesGallery;