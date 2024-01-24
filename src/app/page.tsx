'use client'
import React, { useEffect, useState } from "react";
import  {LandingPageStack}  from "@/components/pageRack/landingPageStack";
import BasicModal from "@/components/ui/modals";
const ProductBanner = React.lazy(()=>import("./../components/pageRack/landingPageStack/productBannerSection")) 
const ProductSuggestion = React.lazy(()=>import("./../components/pageRack/landingPageStack/productSuggestion")) 
const MostExploredProducts = React.lazy(()=>import("./../components/pageRack/landingPageStack/mostExploredProducts")) 
const NewArrival = React.lazy(()=>import("./../components/pageRack/landingPageStack/newArrival")) 
const Philosophy = React.lazy(()=>import("./../components/pageRack/landingPageStack/philosophy")) 
const WhyChooseFromUs = React.lazy(()=>import("./../components/pageRack/landingPageStack/whyChooseFromUs")) 
const JoinUs = React.lazy(()=>import("./../components/pageRack/landingPageStack/joinUs"))

export default function Home() {
    const [showModal,setShowModal] = useState<boolean>(false);

  useEffect(()=>{
      let id = setTimeout(()=>setShowModal(true),10000)
      return ()=>clearTimeout(id)
  },[]) 

  return (
    <main>
      {showModal && <BasicModal isOpen={showModal} />}
        {LandingPageStack()}
    </main>
  );
}
