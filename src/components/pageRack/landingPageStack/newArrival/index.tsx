'use client'
import { Box, Button, Chip, Container, Grid, Typography } from "@mui/material"
import honey from "@/assets/pictures/honey2.jpg"


export default function NewArrival(){
    return(
        <Container maxWidth="xl" sx={{background:"#fff",padding:"80px"}} >
            <Box sx={{padding:"0 50px",color:"#658C4A"}}>
                <Typography variant="h3" > New Arrival</Typography>
                <Typography variant="body2" color={"gray"} > Be the first to have the class product</Typography>
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
                    <Box >
                        <Typography variant="body2" color={"gray"} textAlign={"center"} > <s> ₹ 1,500</s> </Typography>
                    </Box> 
                </Grid>
                ))}
                    <Grid container sx={{marginTop:"40px",justifyContent:"center"}} >
                        <Button variant="outlined" sx={{background:"#658C4A",color:"white",borderRadius:"40px"}} >
                            <Typography variant="body2" textAlign={"center"} >
                                See More
                            </Typography>
                        </Button>
                    </Grid> 
            </Grid>
        </Container>
    )
}