'use client'
import * as React from 'react';
import { Box, Button, Container, FormControl, Grid, InputAdornment, TextField, Typography } from "@mui/material";
import pic2 from "@/assets/pictures/honey4.jpeg"
import { LocalShippingTwoTone, Star } from "@mui/icons-material";
import { useState } from "react";
import FavoriteTwoToneIcon from '@mui/icons-material/Favorite';
import SpaTwoToneIcon from '@mui/icons-material/Spa';
import AcUnitTwoToneIcon from '@mui/icons-material/AcUnit';
import AddShoppingCartTwoToneIcon from '@mui/icons-material/AddShoppingCart';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import ProductDetailTabs from './tab';
import { Ratings } from './ratings';

export default function ProductDetails(){

        const [selected,setSelected] = useState(0);
        const theme = useTheme();
        const matches = useMediaQuery(theme.breakpoints.down('sm'));

    return (
                <Container maxWidth="xl"  >
                    <Grid container p={"50px 2px"} >
                        <Grid item md={5}
                            sx={{
                                backgroundImage : `url(${pic2.src})`,
                                backgroundRepeat:"no-repeat",
                                backgroundSize : "cover",
                                boxShadow : "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                                borderRadius:{sx:"0px",md:"15px"},
                                margin :{xs: "auto", md:"inherit"}
                            }}
                                height={matches ? 400: 600}
                                width={matches ? 600 : 600}
                        >
                        </Grid>
                        <Grid item md={1} > </Grid>
                        <Grid item md={6} mt={6} >
                            <Box>
                                <Typography variant="h3" >
                                    Himalayan Honey
                                </Typography>
                                <Typography mt={2} variant="body1" color={"gray"} >
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo a nesciunt autem doloribus debitis vel modi aliquid, eligendi iusto reiciendis aperiam dignissimos voluptatum tempore saepe explicabo possimus ab quibusdam odit? 
                                </Typography>
                            </Box>
                            <Box mt={1} sx={{cursor:"pointer"}} display={"flex"} onClick={()=>scrollTo({top: 670, behavior: "smooth"} )} >
                                <Typography variant='h6' >Check out my story.!</Typography>
                                <KeyboardArrowDownIcon 
                                    sx={(theme)=>({
                                            alignSelf:"center", 
                                            marginLeft : 1, 
                                            width:"30px",
                                            height:"30px",
                                            color:theme.palette.primary.main,
                                            cursor:"pointer"})}
                                            />
                            </Box>
                            <Box mt={1} display={"flex"} justifyContent={"space-between"} width={"50%"} >
                                <Box>
                                    <AcUnitTwoToneIcon sx={(theme)=>({height:"40px",width:"40px",color:"gray"})} />
                                </Box>
                                <Box>
                                    <FavoriteTwoToneIcon  sx={(theme)=>({height:"40px",width:"40px",color:"gray"})} />
                                </Box>
                                <Box>
                                    <AddShoppingCartTwoToneIcon sx={(theme)=>({height:"40px",width:"40px",color:"gray"})}/>
                                </Box>
                                <Box>
                                    <SpaTwoToneIcon sx={(theme)=>({height:"40px",width:"40px",color:"gray"})} />
                                </Box>

                            </Box>
                            <Box mt={2} onClick={()=>window.scrollTo({ top: 950, behavior: "smooth" })} sx={{cursor:"pointer"}} >
                                <Star sx={(theme)=>({height:"20px",width:"20px",color:theme.palette.primary.main})} />
                                <Star sx={(theme)=>({height:"20px",width:"20px",color:theme.palette.primary.main})} />
                                <Star sx={(theme)=>({height:"20px",width:"20px",color:theme.palette.primary.main})} />
                                <Star sx={(theme)=>({height:"20px",width:"20px",color:theme.palette.primary.main})} />
                                <Star sx={(theme)=>({height:"20px",width:"20px",color:theme.palette.primary.main})} />
                            </Box>
                            <Box >
                                <Typography variant="h5" > ₹ 2,000 </Typography>
                            </Box>
                            <Box mt={3}>
                                <Typography variant="h5" >Size</Typography>
                            </Box>
                            <Box>
                                
                                {
                                    ["50ml","100ml","500ml","1kg","5Kg"].map((p,i)=>(
                                        <Button
                                        onClick={()=>setSelected(i)} 
                                            variant="contained" 
                                            sx={(theme)=>(
                                                {
                                                    margin:"10px",
                                                    borderRadius:"20px",
                                                    background:
                                                        i==selected ? 
                                                            "gray" 
                                                            : 
                                                            "lightgray"
                                                })} 
                                            key={p} >
                                                <Typography>
                                                    {p}
                                                </Typography>
                                        </Button>
                                    ))
                                }
                            </Box>
                            <Box mt={3} >
                                <Box display={"flex"}  >
                                    <Typography variant="h6" mb={1} >
                                        Delivery and Service Estimate
                                    </Typography>
                                    <LocalShippingTwoTone sx={{width:"30px",height:"30px",color:"#e6aa89",marginLeft:"10px"}} />
                                </Box>
                                <FormControl >
                                    <TextField
                                        size="small"
                                        type="number"
                                        inputProps={{
                                            style: {
                                                borderTopLeftRadius:"0"
                                            },
                                        }}
                                        variant="outlined"
                                        onChange={() => {}}
                                        label={""}
                                        onSelect={()=>console.log("herererer")}
                                        placeholder="Postal Code"
                                        sx={{width:"300px"}}
                                        InputProps={{
                                            endAdornment: (
                                            <InputAdornment position="end">
                                                <Button sx={(theme)=>(
                                                    {
                                                        borderRadius:"0 30px 30px 0",
                                                        color:"#fff",
                                                        background:"gray",position:"absolute",
                                                        marginLeft:"-71px",
                                                        marginTop:"-1px",
                                                        })} 
                                                    variant="contained" >
                                                     <Typography> Check </Typography>
                                                </Button>
                                            </InputAdornment>
                                            ),
                                            style: {
                                            borderRadius: "100px",
                                            },
                                        }}
                                    />
                                </FormControl>
                            </Box>
                            <Box mt={3} textAlign={"center"} >
                                <Button variant="contained" sx={(theme)=>({borderRadius:"0px",background:"gray"})} > <Typography>Add To Bucket</Typography></Button>
                            </Box>
                        </Grid>
                    </Grid>

                        <ProductDetailTabs />
                        <Ratings />

                </Container>
            )}