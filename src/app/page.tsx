'use client'
import React, { useEffect, useState } from "react";
import  {LandingPageStack}  from "@/components/pageRack/landingPageStack";
import BasicModal from "@/components/ui/modals";

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
