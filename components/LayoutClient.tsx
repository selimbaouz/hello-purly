"use client";
import { FC } from "react";
import Snowfall from 'react-snowfall';

interface LayoutClientProps {
    children: React.ReactNode;
}
const LayoutClient: FC<LayoutClientProps> = ({children}) => {
    return (
        <main>
            <Snowfall color="white" radius={[0.5, 1.5]} wind={[-0.5, 0.5]} style={{zIndex: 70}}/>
            {children}
        </main>
    );
};

export default LayoutClient;