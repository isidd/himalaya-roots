"use client"
import HorizontalLinearStepper from "@/components/ui/stepper"
import { Container } from "@mui/material";
import React, { useState } from "react";
import Bucket from "./steps/bucket";
import BasicModal from "@/components/ui/modals/loginModal";
import Address from "./steps/address"


export default function Checkout(){
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set<number>());
    const [showModal,setShowModal] = useState(false)
    console.log(activeStep)
    const [isOpen,setOpen] = useState(true);

    const Details = [
        {label : "Total Price",value:"4,000"}
    ]

    return <>
        <HorizontalLinearStepper {...{activeStep,setActiveStep,skipped,setSkipped}} />
        <Container maxWidth="xl" >
            {activeStep == 0 && <Bucket setActiveStep={setShowModal} />}
            {activeStep == 0 && showModal && <BasicModal isOpen={isOpen} setActiveStep={setActiveStep}  />}
            {activeStep == 1 && <Address setActiveStep={setActiveStep} />}
        </Container>
    </>
}