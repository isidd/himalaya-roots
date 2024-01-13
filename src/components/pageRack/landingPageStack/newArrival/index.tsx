'use client'
import { Box, Button, Chip, Container, Grid, Typography } from "@mui/material"
import honey from "@/assets/pictures/honey2.jpg"


export default function NewArrival(){
    return(
        <Container maxWidth="xl" sx={{background:"#fff",padding:"80px"}} >
            <Box sx={(props)=>({padding:"0 50px",color:props.palette.primary.main})}>
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
                            borderRadius:"10px",
                            boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0), 0 6px 20px 0 rgba(0, 0, 0, .5)"
                            }}>
                        <Chip 
                            label={"product"} 
                            sx={(props)=>({
                                background:props.palette.primary.main,
                                opacity:.7,
                                color:"white",
                                position:"relative",
                                top:"190px",
                                left:"5px",
                                cursor:"pointer"
                                })} 
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
                        <Button variant="contained" sx={(theme)=>({background:theme.palette.primary.main,color:"white",borderRadius:"40px"})} >
                            <Typography variant="body2" textAlign={"center"} >
                                See More
                            </Typography>
                        </Button>
                    </Grid> 
            </Grid>
        </Container>
    )
}