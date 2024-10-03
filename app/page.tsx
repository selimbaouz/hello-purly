import BenefitCard from "@/components/card/BenefitCard";
import ModesCard from "@/components/card/bentoGrid/ModesCard";
import Header from "@/components/Header";
import NavBar from "@/components/navigation/NavBar";
import StickyBar from "@/components/navigation/StickyBar"
import TitleContentPair from "@/components/TitleContentPair";
import { benefitsData, essentialsData, trustsData } from "@/data";
import { cn } from "@/lib/utils";
import EssentialsCard from "@/components/card/bentoGrid/EssentialsCard";
import BottomBar from "@/components/navigation/BottomBar";
import Bento from "@/components/card/bentoGrid/Bento";
import { Reviews } from "@/components/Reviews";
import CTACard from "@/components/card/CTACard";
import TrustFeatures from "@/components/TrustFeatures";

export default function Home() {
  return (
    <div>
      <div className="sticky top-0 w-full z-50">
        <StickyBar />
        <NavBar />
      </div>
      <Header />
      <section className="p-4 text-center space-y-24">
        <TitleContentPair 
          title="La nouvelle révolution pour vos toilettes" 
          content="Profitez du luxe d’un jet d’eau qui vous fera dire sayonara au papier."
        />
        <div className={cn("flex flex-col gap-4")}>
          {benefitsData.map((data, index) => (
            <BenefitCard 
              key={index}
              icon={data.icon}
              title={data.title}
              content={data.content}
            />
          ))}
        </div>
      </section>
      <section className="p-4 text-center py-24 space-y-4">
        <ModesCard />
        <div className={cn("grid grid-cols-2 gap-2")}>
          {essentialsData.map((data, index) => (
            <EssentialsCard
              key={index}
              icon={data.icon}
              title={data.title}
              index={index}
            />
          ))}
        </div>
        <Bento 
          image=""
          title="Précis, écolo, économique"
          content={`Vous n’aurez plus qu’une question : ''Pourquoi je ne l’ai pas installé plus tôt ?''`}
        />
      </section>
      <section className="text-center pb-24 space-y-20">
        <div className={cn("p-4")}>
          <TitleContentPair 
              title="ce que disent nos clients" 
              content="Excellent, basé sur"
              contentBold="319 avis"
            />
        </div>
          <Reviews />
      </section>
      <section className="p-4 text-center py-24 space-y-4">
        <CTACard />
      </section>
      <section className="p-4 text-center pb-24 space-y-4">
        <div className={cn("flex flex-col space-y-20 justify-center items-center text-center")}>
          {trustsData.map((data, index) => (
            <TrustFeatures
              key={index}
              index={index}
              icon={data.icon}
              title={data.title}
              content={data.content}
            />
          ))}
        </div>
      </section>
      <BottomBar />
    </div>
  );
}
