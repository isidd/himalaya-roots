'use client'
import { Box, Chip, Container, Grid, Typography } from "@mui/material";
import honey from "@/assets/pictures/honey4.jpeg"

export default function MostExploredProducts(){
    return(
        <Container maxWidth="xl" sx={{background:"#658C4A", marginTop:"60px",padding:"50px 0",color:"#fff"}} >
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
            <Grid container sx={{marginTop:"25px"}} >
                {Array.from({length:4},(_,i)=>( 
                <Grid item key={i} xs={3} sx={{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center"}} > 
                    <Box 
                        sx={{
                            marginTop:"30px",
                            height:"230px", 
                            width:"200px",
                            backgroundImage : `url(${honey.src})`,
                            backgroundRepeat:"no-repeat",
                            backgroundSize : "cover", 
                            borderRadius:"10px"
                            }}>
                        <Chip 
                            label={"product"} 
                            sx={{
                                background:"#658C4A",
                                opacity:.7,
                                color:"white",
                                position:"relative",
                                top:"190px",
                                left:"5px",
                                cursor:"pointer"
                                }} 
                                />
                    </Box>
                    <Box sx={{marginTop:"10px"}} >
                        <Typography variant="body2" textAlign={"center"} > Himalayan Dripped Honey </Typography>
                    </Box> 
                    <Box sx={{marginTop:"10px"}} >
                        <Typography variant="h6" textAlign={"center"} > ₹ 1,000 </Typography>
                    </Box> 
                    <Box sx={{marginTop:"0px"}} >
                        <Typography variant="body2" textAlign={"center"} > <s> ₹ 1,500</s> </Typography>
                    </Box> 
                </Grid>
                ))}
            </Grid>
        </Container>
    )
}