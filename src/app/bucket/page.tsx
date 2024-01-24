"use client"
import HorizontalLinearStepper from "@/components/ui/stepper"
import { Container } from "@mui/material";
import React from "react";
import Bucket from "./steps/bucket";


export default function Checkout(){
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set<number>());
    console.log(activeStep)

    const Details = [
        {label : "Total Price",value:"4,000"}
    ]

    return <>
        <HorizontalLinearStepper {...{activeStep,setActiveStep,skipped,setSkipped}} />
        <Container maxWidth="xl" >
            {activeStep == 0 && <Bucket setActiveStep={setActiveStep} />}
        </Container>
    </>
}