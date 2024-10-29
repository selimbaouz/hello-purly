"use client";
import { FC } from "react";
import Snowfall from 'react-snowfall';

interface LayoutClientProps {
    children: React.ReactNode;
}
const LayoutClient: FC<LayoutClientProps> = ({children}) => {
    return (
        <main>
            <Snowfall color="white"/>
            {children}
        </main>
    );
};

export default LayoutClient;