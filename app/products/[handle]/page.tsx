import Bento from '@/components/card/bentoGrid/Bento';
import WhyCard from '@/components/card/bentoGrid/WhyCard';
import CTACard from '@/components/card/CTACard';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import NavBar from '@/components/navigation/NavBar';
import StickyBar from '@/components/navigation/StickyBar';
import ProductImage from '@/components/ProductImage';
import { Reviews } from '@/components/Reviews';
import TitleContentPair from '@/components/TitleContentPair';
import TrustFeatures from '@/components/TrustFeatures';
import { benefitsFeelingData, trustsData } from '@/data';
import { cn } from '@/lib/utils';
import ImagesGallery from '@/components/ImagesGallery';
import VersusCard from '@/components/card/bentoGrid/VersusCard';
import ComparaisonCard from '@/components/card/bentoGrid/ComparaisonCard';
import { redirect } from 'next/navigation';
import { getHandleOfProduct } from '@/data/shopify';
import Image1 from "@/public/images/bidet/money.png";
import Image2 from "@/public/images/bidet/eco.png";
import BenefitCard from '@/components/card/BenefitCard';
import FloatingBar from '@/components/navigation/FloatingBar';

export default async function ProductPage({ params }: { params: { handle: string } }) {
    if(params.handle !== "le-bidet-wc") {
        redirect('/')
    }

    const product = await getHandleOfProduct(params.handle);

    return (
        <div className='relative'>
            <div className="sticky top-0 w-full z-40">
                <StickyBar />
                <NavBar />
            </div>
            <section className={cn(
                "w-full text-left space-y-10 max-w-screen-xl mx-auto", 
                "lg:space-y-36 lg:py-14", 
                "xl:grid xl:grid-cols-2 xl:items-start xl:space-y-0 xl:justify-start xl:gap-10"
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
                "lg:p-6", 
                "xl:space-y-3 xl:py-32 xl:px-0"
            )}>
                <WhyCard />
            </section>
            <section className={cn(
                "p-4 text-center pb-24 space-y-24 max-w-screen-xl mx-auto", 
                "lg:p-6", 
                "xl:space-y-32 xl:pb-32 xl:px-0"
            )}>
                <TitleContentPair
                    title="pour des fesses impeccable" 
                    content="Fini les résidus gênants et les irritations ! Doux, efficace, et ultra-hygiènique."
                />
                <div className={cn('flex flex-col gap-4')}>
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
                "xl:pt-0 xl:pb-36 xl:px-0"
            )}>
                <TitleContentPair 
                    title="Des Avantages Qui Câlinent Vos Fesses" 
                    content="Parce qu'elles méritent le meilleur."
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
                "xl:pt-0 xl:pb-36 xl:space-y-28"
            )}>
                <TitleContentPair 
                    title="ce que disent nos clients" 
                    content="Excellent, basé sur"
                    contentBold="319 avis vérifiés"
                />
                <Reviews />
            </section>
            <section className={cn(
                "text-center pb-24 space-y-10 max-w-screen-lg mx-auto", 
                "lg:py-20", 
                "xl:pt-0 xl:pb-36"
            )}>
                <TitleContentPair 
                    title="FAQ" 
                    content="Foire aux questions"
                />
                <FAQ />
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
                <Footer />
            </section>
            {product && (
                <FloatingBar
                    product={product}
                />
            )}
        </div>
    );
};