import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeContextProvider } from "@/themeRack";
import HeadSection from "@/components/pageRack/universalPageStack/headSection/headSection";
import Product from "@/components/pageRack/universalPageStack/productSection";
import Footer from "@/components/pageRack/universalPageStack/footer/page";
import QrToolTip from "@/components/pageRack/universalPageStack/qrToolTip";
import { Suspense } from "react";
import { Container } from "@mui/material";

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
          <HeadSection />
          <Product />
          </section>
          {/* <Suspense fallback={<Container sx={{display:"flex",justifyContent:"center",margin:"auto",height:"100px"}}>Loading...</Container>} > */}
          {children}
          {/* </Suspense> */}
          <QrToolTip />
        <Footer/>
        </body>
      </ThemeContextProvider>
    </html>
  );
}