import BenefitCard from "@/components/card/BenefitCard";
import ModesCard from "@/components/card/bentoGrid/ModesCard";
import Header from "@/components/Header";
import NavBar from "@/components/navigation/NavBar";
import StickyBar from "@/components/navigation/StickyBar"
import TitleContentPair from "@/components/TitleContentPair";
import { benefitsData, essentialsData, trustsData } from "@/data";
import { cn } from "@/lib/utils";
import EssentialsCard from "@/components/card/bentoGrid/EssentialsCard";
/* import BottomBar from "@/components/navigation/BottomBar"; */
import Bento from "@/components/card/bentoGrid/Bento";
import { Reviews } from "@/components/Reviews";
import CTACard from "@/components/card/CTACard";
import TrustFeatures from "@/components/TrustFeatures";
import Footer from "@/components/Footer";
import { getMenu } from "@/data/shopify";

export default async function Home() {
  const menu = await getMenu("main-menu");
  const footerMenu = await getMenu("footer");

  return (
    <div>
      <div className="sticky top-0 w-full z-50">
        <StickyBar />
        <NavBar menu={menu} />
      </div>
      <Header />
      <section className={cn("p-4 text-center space-y-24", "lg:space-y-36 lg:py-14 lg:px-6", "xl:px-0")}>
        <TitleContentPair 
          title={`La nouvelle révolution\npour vos toilettes`} 
          content="Profitez du luxe d’un jet d’eau qui vous fera dire sayonara au papier."
        />
        <div className={cn("flex flex-col gap-4 max-w-screen-xl mx-auto", "lg:grid lg:grid-cols-3 lg:items-center lg:h-full")}>
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
      <section className={cn("p-4 text-center py-24 space-y-4 max-w-screen-xl mx-auto", "lg:p-6", "xl:space-y-3 xl:py-32 xl:px-0")}>
        <ModesCard />
        <div className={cn("flex flex-col gap-5", "md:gap-3", "lg:grid lg:grid-cols-2 lg:items-start lg:h-full")}>
          <div className={cn("grid grid-cols-2 gap-2", "md:h-full md:gap-3")}>
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
            image="/images/bidet/men-back.webp"
            title="Précis, écolo, économique"
            content={`Vous n’aurez plus qu’une question :\n''Pourquoi je ne l’ai pas installé plus tôt ?''`}
          />
        </div>
      </section>
      <section className={cn("text-center pb-24 space-y-24", "lg:py-20", "xl:pt-0 xl:pb-36 xl:space-y-28")}>
        <TitleContentPair 
            title={`Fesses heureuses\nclients satisfaits`} 
            content="Excellent, selon"
            contentBold="319 fesses approuvées"
          />
          <Reviews id="avis" />
      </section>
      <section className={cn("p-4 text-center py-24 space-y-4 max-w-screen-xl mx-auto", "lg:p-6", "xl:px-0")}>
        <CTACard />
      </section>
      <section className={cn("p-4 text-center pb-24 space-y-4 max-w-screen-xl mx-auto", "lg:my-14 lg:space-y-0", "xl:px-0")}>
        <div className={cn("flex flex-col space-y-20 justify-center items-center text-center", "md:grid md:grid-cols-2 md:items-start md:space-y-0 md:gap-y-14", "xl:grid-cols-4 xl:justify-between xl:gap-4")}>
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
      <section className="relative pt-10">
        <div className='w-full h-[313px] bg-foreground/80 blur-3xl absolute top-4 -z-10' />
        <Footer 
          menu={menu}
          footerMenu={footerMenu}
        />
      </section>
      {/* <BottomBar /> */}
    </div>
  );
}
