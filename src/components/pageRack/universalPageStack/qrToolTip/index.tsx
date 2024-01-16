'use client'
import BasicModal from "@/components/ui/modals"
import { QrCode2 } from "@mui/icons-material"
import { Box, Typography } from "@mui/material"
import { useState } from "react"
import { StyledHomeBox } from "./style"
import QRModal from "@/components/ui/modals/qrModal"



export default function QrToolTip(){

    const [checkAuth,setOnAuth] = useState(false);

        return(
            <>
                {checkAuth && <QRModal isOpen={checkAuth} setOnAuth={setOnAuth} />}
                <StyledHomeBox 
                    onClick={()=>setOnAuth(old=>!old)}
                    textAlign={'center'}>
                    <Box>
                    <QrCode2 sx={(theme)=>({
                        width:"60px",
                        height:"60px",
                        borderRadius:"5px",
                        cursor:"pointer",
                        marginTop:"2px",
                        })}/>
                    </Box>
                    <Box >
                        <Typography textAlign={"center"} color={"#fff"} > 
                            Check the authenticity of your product
                        </Typography>
                    </Box>
                </StyledHomeBox>
            </>
        )
}