import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeContextProvider } from "@/themeRack";
import HeadSection from "@/components/pageRack/universalPageStack/headSection/headSection";
import Product from "@/components/pageRack/universalPageStack/productSection";
import Footer from "@/components/pageRack/universalPageStack/footer/page";
import QrToolTip from "@/components/pageRack/universalPageStack/qrToolTip";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Himalaya Roots",
  description: "The perfect place for buying the authentic farm fresh products",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ThemeContextProvider>
        <body>
          <section style={{position:"sticky",top:0, background:"#fff",zIndex:10}} >
            {/* <div style={{width:"100%",height:"20px",background:"#658C4A"}} ></div> */}
          <HeadSection />
          <Product />
          </section>
          {children}
          <QrToolTip />
        <Footer/>
        </body>
      </ThemeContextProvider>
    </html>
  );
}
