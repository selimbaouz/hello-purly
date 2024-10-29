import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";
import LayoutClient from "@/components/LayoutClient";
import { getMenu } from "@/data/shopify";
import StickyBar from "@/components/navigation/StickyBar";
import NavBar from "@/components/navigation/NavBar";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
  ],
  subsets: ["latin"],
  variable: "--font-ms",
});

export const metadata: Metadata = {
  title: "HelloPurly - Le bidet qui révolutionne vos toilettes",
  description: "Découvrez HelloPurly, le bidet WC moderne pour une hygiène optimale, un confort quotidien et une économie durable.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const menu = await getMenu("main-menu");
  const footerMenu = await getMenu("footer");

  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} font-montserrat relative`}
      >
        <Providers>
          <LayoutClient>
          <div className="sticky top-0 w-full z-50">
            <StickyBar />
            <NavBar menu={menu} />
          </div>
            {children}
            <section className="relative pt-10">
              <div className='w-full h-[313px] bg-foreground/80 blur-3xl absolute top-4 -z-10' />
              <Footer 
                menu={menu}
                footerMenu={footerMenu}
              />
            </section>
          </LayoutClient>
        </Providers>
      </body>
    </html>
  );
}
