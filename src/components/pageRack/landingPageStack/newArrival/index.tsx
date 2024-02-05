'use client'
import { Box, Button, Chip, Container, Grid, Typography } from "@mui/material"
import honey from "@/assets/pictures/honey4.jpeg"


export default function NewArrival(){
    return(
        <Container maxWidth="xl" sx={{background:"#fff",mt:12}} >
            <Box sx={(props)=>({color:props.palette.primary.main})} textAlign={"left"} >
                <Typography variant="h3" > New Arrival</Typography>
                <Typography variant="body2" color={"gray"} > Be the first to have the class product</Typography>
            </Box>
            <Grid md={12} xs={12} item container>
                    {Array.from({length:4},(_,i)=>`Product \n ${i+1}`).map((p,index)=>(
                    <Grid key={Math.random()*1000} p={1} md={3} xs={12} item sx={{display:"flex", justifyContent:'center'}} >
                        <Box 
                            sx={{
                                marginTop:"30px",
                                height:"200px", 
                                width:{xs:"100%",md:"270px"},
                                backgroundImage : `url(${honey.src})`,
                                backgroundRepeat:"no-repeat",
                                backgroundSize : "cover", 
                                borderRadius:"10px",
                                boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0), 0 6px 20px 0 rgba(0, 0, 0, .5)"
                                }}>
                            <Chip 
                                onClick={()=>{}}
                                label={p} 
                                sx={(theme)=>({
                                    background:theme.palette.primary.main,
                                    opacity:.7,
                                    color:"white",
                                    position:"relative",
                                    top:"160px",
                                    right:{xs : "-10px" ,md:"-10px"},
                                    cursor:"pointer"
                                    }
                                )} />
                        </Box>
                    </Grid>
                    ))
                    }
                </Grid>
        </Container>
    )
}