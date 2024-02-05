'use client'
import { Box, Chip, Container, Grid, Typography } from "@mui/material";
import honey from "@/assets/pictures/honey4.jpeg"

export default function MostExploredProducts(){
    return(
        <Container maxWidth="xl" sx={(theme)=>({background:theme.palette.primary.main, marginTop:"60px",padding:"50px 0",color:"#fff"})} >
            <Box>
                    <Typography textAlign={"center"} variant="h3">
                            Our Most Explored Products
                    </Typography>
            </Box>
            <Box>
                    <Typography textAlign={"center"} variant="h5">
                            Good for environment, good for you..!
                    </Typography>
            </Box>
            <Grid md={12} xs={12} item container>
                    {Array.from({length:4},(_,i)=>`Product \n ${i+1}`).map((p,index)=>(
                    <Grid key={Math.random()*1000} p={1} md={3} xs={12} item sx={{display:"flex", justifyContent:'center'}} >
                        <Box 
                            sx={{
                                marginTop:"30px",
                                height:"200px", 
                                width:{xs:"400px",md:"270px"},
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