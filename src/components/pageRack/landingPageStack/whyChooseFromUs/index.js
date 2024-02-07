'use client'
import { Box, Button, Chip, Container, Grid, Typography } from "@mui/material"
import honey from "@/assets/pictures/honey2.jpg"
import shipping from "@/assets/pictures/shipping.svg"
import satisfaction from "@/assets/pictures/smile.svg"
import eco from "@/assets/pictures/eco.svg"
import cs from "@/assets/pictures/cs.svg"
import Image from "next/image"


export default function WhyChooseFromUs(){

    const WHYUS = [
        {
            img: shipping,
            heading:"Free Shipping",
            title : "Something about free shipping text to engage user"
        },
        {
            img: satisfaction,
            heading:"Satisfaction Guaranteed",
            title : "Something about free shipping text to engage user"
        },
        {
            img: eco,
            heading:"Eco Friendly Packaging",
            title : "Something about free shipping text to engage user"
        },
        {
            img: cs,
            heading:"Fast Response",
            title : "Something about free shipping text to engage user"
        }
    ]

    return(
        <Container maxWidth="xl" sx={{background:"#fff",padding:{md:"20px",xs:'10px'}, marginTop:"50px"}} >
            <Box  >
                <Typography textAlign={"center"} color={(theme)=>theme.palette.primary.main} variant="h3" >Why Choose Us ?</Typography>
            </Box>
            <Grid container sx={{marginTop:{md:"80px",xs:"30px"}}} >
                {WHYUS.map(p=>( 
                <Grid mt={2} item key={Math.random()*1000} md={3} xs={6} sx={{display:"flex",flexDirection:"column",alignItems:"center"}} > 
                    <Image
                        src={p.img}
                        alt="pic"
                    />
                    <Box sx={{marginTop:"10px"}} >
                        <Typography variant="h6" sx={{textAlign :{ md:"left" ,xs:"center"}}} > {p.heading} </Typography>
                    </Box> 
                    <Box p={1} >
                        <Typography variant="body2" sx={{textAlign :{ md:"left" ,xs:"center"}}} color={"gray"} > {p.title} </Typography>
                    </Box> 
                </Grid>
                ))}
            </Grid>
        </Container>
    )
}