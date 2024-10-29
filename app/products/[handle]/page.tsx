import Bento from '@/components/card/bentoGrid/Bento';
import WhyCard from '@/components/card/bentoGrid/WhyCard';
import CTACard from '@/components/card/CTACard';
import FAQ from '@/components/FAQ';
import ProductImage from '@/components/ProductImage';
import { Reviews } from '@/components/Reviews';
import TitleContentPair from '@/components/TitleContentPair';
import TrustFeatures from '@/components/TrustFeatures';
import { benefitsFeelingData, statsData, trustsData } from '@/data';
import { cn } from '@/lib/utils';
import ImagesGallery from '@/components/ImagesGallery';
import VersusCard from '@/components/card/bentoGrid/VersusCard';
import ComparaisonCard from '@/components/card/bentoGrid/ComparaisonCard';
import { redirect } from 'next/navigation';
import { getHandleOfProduct, getMenu } from '@/data/shopify';
import Image1 from "@/public/images/bidet/money.webp";
import Image2 from "@/public/images/bidet/eco.webp";
import BenefitCard from '@/components/card/BenefitCard';
import FloatingBar from '@/components/navigation/FloatingBar';
import StatsList from '@/components/StatsList';
import Footer from '@/components/Footer';
import StickyBar from '@/components/navigation/StickyBar';
import NavBar from '@/components/navigation/NavBar';

export default async function ProductPage({ params }: { params: { handle: string } }) {
    if(params.handle !== "le-bidet-wc") {
        redirect('/')
    }

    const product = await getHandleOfProduct(params.handle);
    const menu = await getMenu("main-menu");
    const footerMenu = await getMenu("footer");

    return (
        <div className='relative'>
            <div className="sticky top-0 w-full z-50">
                <StickyBar />
                <NavBar menu={menu} />
            </div>
            <section className={cn(
                "w-full text-left space-y-10 max-w-screen-xl mx-auto", 
                "lg:p-6 lg:grid lg:grid-cols-2 lg:items-start lg:space-y-0 lg:justify-start lg:gap-10"
            )}>
                <ImagesGallery
                    images={product?.images.edges ?? []}
                />
                <div className={cn("px-4", "lg:px-0")}>
                    <ProductImage product={product!} />
                </div>
            </section>
            <section className={cn(
                "p-4 text-center py-24 space-y-4 max-w-screen-xl mx-auto", 
                "lg:p-6 lg:space-y-0 lg:py-36 lg:grid lg:grid-cols-3 lg:items-center lg:gap-4", 
                "xl:py-24 xl:px-0"
            )}>
                {statsData.map((data, index) => (
                    <div key={index} className={cn("relative shadow-md shadow-black p-[1px] bg-gradient-to-b from-[#111219] to-[#2D3748] rounded-3xl max-w-screen-xl mx-auto", "lg:size-full")}>
                        <div className={cn("w-full text-center rounded-3xl px-8 py-20 bg-gradient-to-b from-[#171923] to-[#11121A]", "md:p-10", "md:h-[304px]", "lg:h-full lg:py-20 lg:px-8")}>
                            <StatsList 
                                title={data.title}
                                content={data.content}
                                titleClassname='text-4xl xl:text-5xl'
                                contentClassname='xl:text-lg'
                            />   
                        </div>
                    </div>
                ))}
            </section>
            <section className={cn(
                "p-4 text-center py-24 space-y-4 max-w-screen-xl mx-auto", 
                "lg:p-6", 
                "xl:space-y-3 xl:pb-32 xl:px-0"
            )}>
                <WhyCard />
            </section>
            <section className={cn(
                "p-4 text-center pb-24 space-y-24 max-w-screen-xl mx-auto", 
                "lg:p-6 lg:py-24 lg:max-w-screen-lg", 
                "xl:max-w-[1200px] xl:space-y-32 xl:pb-32 xl:px-0 xl:py-0"
            )}>
                <TitleContentPair
                    title="pour des fesses impeccable" 
                    content={`Fini les résidus gênants et les irritations ! \nDoux, efficace, et ultra-hygiènique, comme un spa pour votre derrière.`}
                />
                <div className={cn('flex flex-col gap-4')}>
                    <div className={cn('flex flex-col gap-4', 'lg:grid lg:grid-cols-2')}>
                        <Bento
                            image="/images/bidet/mode.webp"
                            title="Deux Modes, Deux Soins"
                            content={`Messieurs, précision assurée ! Mesdames, une touche de douceur ! C’est l’hygiène parfaite pour tous.`}
                        />
                        <Bento 
                            image="/images/bidet/compatibilite.webp"
                            title="Compatibilité sans compromis"
                            content={`Hellopurly s'adapte parfaitement à vos WC. Ultra-fin et discret, contrairement aux bidets plus épais.`}
                        />
                    </div>
                    <div className={cn('flex flex-col gap-4', 'lg:grid lg:grid-cols-2')}>
                        <Bento 
                            image={Image1.src}
                            title="Moins de papier, plus d’argent"
                            content={`Avec notre bidet, dites adieu aux piles de papier toilette et économisez jusqu’à 80%.`}
                        />
                        <Bento
                            image={Image2.src}
                            title="Un confort écologique"
                            content={`Notre bidet est un geste écologique majeur : Économisés 1500L d'eau chaque année.`}
                        />
                    </div>
                    <VersusCard />
                    <div className={cn('flex flex-col gap-4', 'lg:grid lg:grid-cols-2')}>
                        <ComparaisonCard 
                            variant='without'
                        />
                        <ComparaisonCard 
                            variant='with'
                        />
                    </div>
                </div>
            </section>
            <section className={cn(
                "p-4 text-center pb-24 space-y-24", 
                "lg:py-20 lg:space-y-36 lg:px-6", 
                "xl:pt-0 xl:py-36 xl:px-0"
            )}>
                <TitleContentPair 
                    title={`Des Avantages Qui \nCâlinent Vos Fesses`} 
                    content="Parce qu'elles aussi, méritent d'être heureuses... et chouchoutées !"
                />
                <div className={cn("flex flex-col gap-4 max-w-screen-xl mx-auto", "lg:grid lg:grid-cols-3 lg:items-center lg:h-full")}>
                {benefitsFeelingData.map((data, index) => (
                    <BenefitCard
                        key={index}
                        icon={data.icon}
                        title={data.title}
                        content={data.content}
                    />
                ))}
                </div>
            </section>
            <section className={cn(
                "text-center pb-24 space-y-24", 
                "lg:py-20", 
                "xl:pt-0 xl:pb-36 xl:space-y-36"
            )}>
                <TitleContentPair 
                    title={`Fesses heureuses\nclients satisfaits`} 
                    content="Excellent, selon"
                    contentBold="319 fesses approuvées"
                />
                <Reviews id="avis" />
            </section>
            <section className={cn(
                "text-center pb-24 space-y-10 max-w-screen-lg mx-auto", 
                "lg:py-20", 
                "xl:pt-0 xl:pb-36 xl:space-y-36"
            )}>
                <TitleContentPair 
                    title="Foire aux Fesses" 
                    content={`Parce qu'on sait que vous avez des questions... \net que vos fesses méritent les meilleures réponses !`}
                />
                <FAQ id="faq" />
            </section>
            <section className={cn(
                "p-4 text-center py-24 space-y-4 max-w-screen-xl mx-auto", 
                "lg:p-6", 
                "xl:px-0"
            )}>
                <CTACard product={product} />
            </section>
            <section className={cn(
                "p-4 text-center pb-24 space-y-4 max-w-screen-xl mx-auto", 
                "lg:my-14 lg:space-y-0", 
                "xl:px-0"
            )}>
                <div className={cn(
                    "flex flex-col space-y-20 justify-center items-center text-center", 
                    "md:grid md:grid-cols-2 md:items-start md:space-y-0 md:gap-y-14", 
                    "xl:grid-cols-4 xl:justify-between xl:gap-4"
                )}>
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
            {product && (
                <FloatingBar
                    product={product}
                />
            )}
        </div>
    );
};