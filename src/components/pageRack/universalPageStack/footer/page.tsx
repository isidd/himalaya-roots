'use client'
import { Box,Container,Typography } from "@mui/material"


export default function Footer(){

    return(
        <Container maxWidth="xl" sx={{padding:"50px",}} >
                    <Box>
                        <Typography textAlign={"center"} >
                            © 2023 Himalayan Roots. All Rights Reserved.
                        </Typography>
                    </Box>
        </Container>
    )
}