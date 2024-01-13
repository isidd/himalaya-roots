'use client'
import { Box, Button, Container, FormControl, Grid, InputAdornment, TextField, Typography } from "@mui/material";
import pic1 from "@/assets/pictures/honey1.jpg"
import pic2 from "@/assets/pictures/honey4.jpeg"
import Image from "next/image";
import { Star } from "@mui/icons-material";
import { useState } from "react";
import FavoriteTwoToneIcon from '@mui/icons-material/Favorite';
import SpaTwoToneIcon from '@mui/icons-material/Spa';
import AcUnitTwoToneIcon from '@mui/icons-material/AcUnit';
import AddShoppingCartTwoToneIcon from '@mui/icons-material/AddShoppingCart';

export default function ProductDetails(){

    const [selected,setSelected] = useState(0)

    return (
            <>
                {/* <Box sx={{
                    backgroundImage : `url(${pic1.src})`,
                        backgroundPosition: "top",
                        backgroundRepeat:"no-repeat",
                        backgroundSize : "cover",
                        width:"100%",
                        height : "150px",
                        backgroundPositionY : "-100px",
                        opacity:.4,
                }} >
                </Box> */}
                <Container maxWidth="xl"  >
                    <Grid container md={12} p={3} >
                        <Grid item md={5} 
                            sx={{
                                backgroundImage : `url(${pic2.src})`,
                                backgroundRepeat:"no-repeat",
                                backgroundSize : "cover",
                                boxShadow : "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                                borderRadius:"15px",
                            }}
                            textAlign={"center"}
                            height={600}
                        >
                            {/* <Image
                                src={pic2}
                                alt="random"
                                width={400}
                                height={400}
                            /> */}
                        </Grid>
                        <Grid item md={1}></Grid>
                        <Grid item md={6} mt={6} >
                            <Box>
                                <Typography variant="h3" >
                                    Himalayan Honey
                                </Typography>
                                <Typography variant="body1" color={"gray"} >
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo a nesciunt autem doloribus debitis vel modi aliquid, eligendi iusto reiciendis aperiam dignissimos voluptatum tempore saepe explicabo possimus ab quibusdam odit? 
                                </Typography>
                            </Box>
                            <Box mt={1} display={"flex"} justifyContent={"space-between"} width={"50%"} >
                                <Box>
                                    <FavoriteTwoToneIcon  sx={{height:"40px",width:"40px"}} />
                                </Box>
                                <Box>
                                    <SpaTwoToneIcon sx={{height:"40px",width:"40px"}} />
                                </Box>
                                <Box>
                                    <AcUnitTwoToneIcon sx={{height:"40px",width:"40px"}} />
                                </Box>
                                <Box>
                                    <AddShoppingCartTwoToneIcon sx={{height:"40px",width:"40px"}} />
                                </Box>

                            </Box>
                            <Box mt={2} >
                                <Star sx={{color:"gold",height:"20px",width:"20px"}} />
                                <Star sx={{color:"gold",height:"20px",width:"20px"}} />
                                <Star sx={{color:"gold",height:"20px",width:"20px"}} />
                                <Star sx={{color:"gold",height:"20px",width:"20px"}} />
                                <Star sx={{color:"gray",height:"20px",width:"20px"}} />
                            </Box>
                            <Box >
                                <Typography variant="h5" > ₹ 2,000 </Typography>
                                {/* <Typography variant="h5" color={"gray"} ><s> ₹ 2,000 </s></Typography> */}
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
                                                            theme.palette.secondary.dark 
                                                            : 
                                                            theme.palette.secondary.main
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
                                <Typography variant="h6" mb={1} >
                                    Delivery and Service Estimate
                                </Typography>
                                <FormControl >
                                    <TextField
                                        size="small"
                                        type="number"
                                        inputProps={{
                                            style: {},
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
                                                        background:theme.palette.primary.main,position:"absolute",
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
                                <Button variant="contained" sx={{borderRadius:"0px"}} > <Typography>Add To Bucket</Typography></Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
                
            </>)
}  