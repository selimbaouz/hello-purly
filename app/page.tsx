import BenefitCard from "@/components/card/BenefitCard";
import ModesCard from "@/components/card/bentoGrid/ModesCard";
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import StickyHeader from "@/components/StickyHeader"
import TitleContentPair from "@/components/TitleContentPair";
import { benefitsData } from "@/data";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <div>
      <div className="sticky top-0 w-full z-50">
        <StickyHeader />
        <NavBar />
      </div>
      <Header />
      <section className="p-4 text-center py-24 space-y-24">
        <TitleContentPair 
        title="La nouvelle révolution pour vos toilettes" 
        content="Profitez du luxe d’un jet d’eau qui vous fera dire sayonara au papier."
        />
        <div className={cn("flex flex-col gap-4")}>
          {benefitsData.map((data, index) => (
            <div key={index}>
              <BenefitCard 
                icon={data.icon}
                title={data.title}
                content={data.content}
              />
            </div>
          ))}
        </div>
      </section>
      <section className="p-4 text-center py-24 space-y-24">
        <ModesCard />
      </section>
    </div>
  );
}
