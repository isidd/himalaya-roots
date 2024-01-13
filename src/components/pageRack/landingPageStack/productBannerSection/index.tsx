"use client"
import { Box, Button,Grid, Typography } from "@mui/material"
import honey from "@/assets/pictures/honey2.jpg";
import Carousel from "react-material-ui-carousel";
import { StyleSpan } from "./style";


export default function ProductList(){
    const Arrays = Array.from({length:3},(_,i)=><Grid key={i+1} container sx={{ p: 0, display:"flex", alignItems:"center"}}>
        <Grid item md={6} sm={12} xs={12} sx={{textAlign:"center",marginTop:"60px"}} >
          <Box> <Typography variant="h3">Himalayan Honey</Typography></Box>
          <StyleSpan>
            🐝
          </StyleSpan>
         <Box> <Typography variant="h5">Directly from the hives</Typography></Box>
         <Box> 
            <Grid container>
                <Grid item md={2}></Grid>
                <Grid item md={8}>
                    <Typography sx={{color:"gray",fontSize:"16px", marginTop:"8px"}} >
                        Yahan par kuch bhi random product summary/story daal denge basic reffernce ke liye.
                    </Typography>
                </Grid>
                <Grid item md={2}></Grid>
            </Grid>
            </Box>
        <Box sx={{marginTop:"40px"}}>
            <Button variant="contained" sx={(theme)=>({background:theme.palette.primary.main, borderRadius:"30px" })}>explore the story... </Button>
        </Box>
        </Grid>
        <Grid item md={6} sm={12} xs={12} >
            <Box sx={{
                backgroundImage : `url(${honey.src})`,
                height: '400px',
                backgroundRepeat:"no-repeat",
                backgroundSize : "cover",
                
            }} ></Box>
        </Grid>
      </Grid>
      )


    return (
        <Carousel sx={{background:"white" ,height:"370px",paddingTop:"1px" }} IndicatorIcon={''} animation="slide" duration={3000} interval={8000} navButtonsAlwaysVisible={false }>
            {Arrays}
        </Carousel>
  );
}