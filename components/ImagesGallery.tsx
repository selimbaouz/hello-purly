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
    const [bigImage, setBigImage] = useState<StaticImageData>();

    const handleImageClick = (image: StaticImageData) => {
        setBigImage(image);
      };

    const images = [
        {
            src: Image2
        },
        {
            src: Image1
        },
        {
            src: Image3
        },
        {
            src: Image4
        },
        {
            src: Image5
        },
        {
            src: Image6
        },
      ];

    return (
        <div className={cn("flex flex-col gap-2", "xl:sticky xl:top-0")}>
            <Image src={bigImage?.src ?? ""} alt='Main Images of Bidet-Wc' className={cn('bg-white rounded-3xl h-96 mx-auto', 'xl:w-full xl:h-auto')} width={387} height={355} />
            <div className={cn("flex gap-2 items-center px-1")}>
                {images.map((data, index) => (
                    <div key={index} className={cn('w-full rounded-3xl cursor-pointer')}  onClick={() => handleImageClick(data.src)}>
                        <Image src={data.src} alt='Images of Bidet-Wc' className={cn('bg-white rounded-xl mx-auto w-auto', 'xl:w-full')} width={150} height={150} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ImagesGallery;