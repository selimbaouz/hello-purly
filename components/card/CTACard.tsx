import { cn } from "@/lib/utils";
import GradientButton from "../GradientButton";
import TitleContentPair from "../TitleContentPair";
import ContainerCard from "./ContainerCard";
import { Separator } from "../ui/separator";
import { statsData } from "@/data";
import StatsList from "../StatsList";

const CTACard = () => {
    return (
        <ContainerCard>
            <div className={cn("w-full space-y-5 rounded-3xl py-14 bg-gradient-combined")}>
                <div className={cn("px-4 space-y-8")}>
                    <TitleContentPair
                        title="fini les traces sur les fesses"
                        content="Pourquoi continuer à frotter quand un jet d’eau fait tout le travail ?"
                    />
                    <GradientButton />
                </div>
                <div className={cn("pt-14")}>
                    <Separator className="text-[#262D3C]" />
                </div>
                <div className={cn("flex flex-col space-y-14 py-8", "lg:flex-row lg:space-y-0 lg:justify-center lg:items-start lg:gap-20")}>
                {statsData.map((data, index) => (
                    <div key={index}>
                        <StatsList 
                            title={data.title}
                            content={data.content}
                        />   
                    </div>
                ))}
            </div>
            </div>
        </ContainerCard>
    );
};

export default CTACard;