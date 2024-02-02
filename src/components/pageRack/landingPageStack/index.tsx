import React, { useId } from 'react'
const ProductBanner = React.lazy(()=>import("./productBannerSection")) 
const ProductSuggestion = React.lazy(()=>import("./productSuggestion")) 
const MostExploredProducts = React.lazy(()=>import("./mostExploredProducts")) 
const NewArrival = React.lazy(()=>import("./newArrival")) 
const Philosophy = React.lazy(()=>import("./philosophy")) 
const WhyChooseFromUs = React.lazy(()=>import("./whyChooseFromUs")) 
const JoinUs = React.lazy(()=>import("./joinUs")) 

const LANDING_PAGE_STACK = [
    {
        stackOrder: 6,
        name : ProductBanner
    },
    {
        stackOrder: 5,
        name : ProductSuggestion
    },
    // {
    //     stackOrder: 4,
    //     name : MostExploredProducts
    // },
    // {
    //     stackOrder: 3,
    //     name : NewArrival
    // },
    // {
    //     stackOrder: 2,
    //     name : Philosophy
    // },
    // {
    //     stackOrder: 1,
    //     name : WhyChooseFromUs
    // },
    // {
    //     stackOrder: 0,
    //     name : JoinUs
    // },
]

export function LandingPageStack(){
    let landingPage = [];
    for(var Component of LANDING_PAGE_STACK){
        landingPage.push(<Component.name key={Component.stackOrder} />)
    }
    return landingPage ;
}