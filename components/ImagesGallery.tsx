"use client"

import { cn } from "@/lib/utils";
import Image1 from "@/public/images/bidet/1.webp";
import Image2 from "@/public/images/bidet/2.png";
import Image3 from "@/public/images/bidet/3.png";
import Image4 from "@/public/images/bidet/4.png";
import Image5 from "@/public/images/bidet/5.png";
import Image6 from "@/public/images/bidet/6.png";
import Image, { StaticImageData } from 'next/image';
import React, { useState } from 'react';

const ImagesGallery = () => {
    const [bigImage, setBigImage] = useState<StaticImageData>(Image2);
    
    const handleImageClick = (image: StaticImageData) => {
        setBigImage(image);
    };
    
    const images = [
        {
            image: Image2,
        },
        {
            image: Image1
        },
        {
            image: Image3
        },
        {
            image: Image4
        },
        {
            image: Image5
        },
        {
            image: Image6
        },
    ];

    return (
        <div className={cn("flex flex-col gap-3 w-full", "xl:sticky xl:top-0")}>
            <Image src={bigImage?.src ?? ""} alt='Main Images of Bidet-Wc' className={cn('bg-white h-96 mx-auto w-full', 'xl:rounded-3xl xl:h-auto')} width={387} height={355} />
            <div className={cn("flex gap-2 items-center px-4", "lg:px-0")}>
                {images.map((data, index) => (
                    <div key={index} className={cn('w-full rounded-xl cursor-pointer')}  onClick={() => handleImageClick(data.image)}>
                        <Image src={data.image} alt='Images of Bidet-Wc' className={cn(
                            'bg-white rounded-xl mx-auto w-auto', 
                            'xl:w-full',
                            bigImage.src === data.image.src ? "border-4 border-foreground" : ""
                        )} width={150} height={150} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ImagesGallery;