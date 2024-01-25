import React from 'react'
import { Box, Button, Checkbox, Container, Divider, FormControl, Grid, InputLabel, MenuItem, Select, Typography } from "@mui/material";
import productImage from "@/assets/pictures/honey4.jpeg"
import Image from "next/image";
import { Close } from "@mui/icons-material";


    const PRODUCT = Array.from({length:3},(_,i)=>i) 

    const BucketItem = ()=> (
                <Grid mt={1} container item sx={{border:"1px solid lightgray",p:2,boxShadow : "0 2px 4px 0 rgba(0, 0, 0, 0.2)",}}>
                        <Grid item xs={4} mt={2} >
                            <Box >
                                <Image alt="product" src={productImage} style={{height:"150px",width:"150px"}}  />
                            </Box>
                        </Grid>
                        <Grid item xs={7} mt={2} >
                            <Typography variant="h6">
                                Himalayan Honey
                            </Typography>
                            <Typography color={"gray"} variant="body2">
                                some tagline here about the honey
                            </Typography>
                            <Box mt={2} display={"flex"} justifyContent={"space-around"}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Size</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={'20'}
                                        defaultValue="Ten"
                                        label="Age"
                                        onChange={()=>{}}
                                        sx={{width:"50%",height:"35px"}}
                                    >
                                        <MenuItem value={10}>1-Kg</MenuItem>
                                        <MenuItem value={20}>2-Kg</MenuItem>
                                        <MenuItem value={30}>3-Kg</MenuItem>
                                    </Select>
                                </FormControl>
                                {/* </Box>
                                <Box> */}
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Qty.</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={'20'}
                                        defaultValue="Ten"
                                        label="Age"
                                        onChange={()=>{}}
                                        sx={{width:"50%",height:"35px"}}
                                    >
                                        <MenuItem value={10}>1</MenuItem>
                                        <MenuItem value={20}>2</MenuItem>
                                        <MenuItem value={30}>3</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                            <Box mt={2} display={"flex"} justifyContent={"start"} >
                                <Typography> ₹ 2,000 </Typography>
                                <Typography ml={2} color={"gray"} > <s> ₹ 2,000 </s></Typography>
                                <Typography ml={2} color={"#e6aa89"} > 40% off</Typography>
                            </Box>
                            <Box  mt={2} display={"flex"} justifyContent={"start"}>
                                <Typography color={(theme)=>theme.palette.primary.main} > 5 Days Delivery time estimate </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={1} display={"flex"} justifyContent={"end"} ><Close /></Grid>
                    </Grid>
                    )

    const ItemsTopBar  = ()=>(
        <Grid container>
            <Grid lg={6} item display={"flex"} alignItems={"center"} >
                <Box>
                    {/* <Checkbox defaultChecked={true} /> */}
                </Box>
                <Box>
                    <Typography variant="h6">
                        {PRODUCT.length > 0 && PRODUCT.length} Products On Bucket
                    </Typography>
                </Box>
            </Grid>
            <Grid lg={6} item display={"flex"} alignItems={"center"} justifyContent={"end"} >
                <Typography>
                    Remove
                </Typography>
            </Grid>
                {PRODUCT.map((i)=><BucketItem key={i} />)}
        </Grid>
    )



interface IProps {
    setActiveStep : (val:any)=>void ;
}

export default function Bucket({setActiveStep}:IProps){
    return (
        <Grid container mt={4} >
                <Grid item lg={1}></Grid>
                <Grid item lg={6}>
                    <ItemsTopBar />
                </Grid>
                
                <Grid lg={1} item ><Divider orientation="vertical" sx={{color:"gray",width:"2px"}} variant="inset"  /></Grid>
                
                <Grid lg={4} item mt={1} >
                    <Grid>
                        <Typography variant="h5" >Billing Details</Typography>
                        <Divider sx={{mt:2,width:"70%"}}/>
                    </Grid>
                    <Grid container mt={4}> 
                        <Grid item xs={6}><Typography>Total Price</Typography></Grid>
                        <Grid item xs={6}><Typography>₹ 4,000</Typography></Grid>
                    </Grid>
                    <Grid container mt={2} > 
                        <Grid item xs={6}><Typography>Discount On Price</Typography></Grid>
                        <Grid item xs={6}><Typography color={(theme)=>theme.palette.primary.main} >-₹ 1,000</Typography></Grid>
                    </Grid>
                    <Grid container mt={2} > 
                        <Grid item xs={6}><Typography>Coupon Discount</Typography></Grid>
                        <Grid item xs={6}><Typography color={(theme)=>theme.palette.secondary.main} > Apply Coupon Discount</Typography></Grid>
                    </Grid>
                    <Grid container mt={2} > 
                        <Grid item xs={6}><Typography>Shipping Fee</Typography></Grid>
                        <Grid item xs={6}><Typography color={(theme)=>theme.palette.primary.main} > <s>₹60</s> FREE</Typography></Grid>
                    </Grid>

                    <Grid container mt={4} > 
                        <Grid item xs={12}><Divider /></Grid>
                    </Grid>

                    <Grid container mt={1} > 
                        <Grid item xs={6}><Typography variant="h6" >Total Price</Typography></Grid>
                        <Grid item xs={6}><Typography variant="h6" > ₹ 6,000</Typography></Grid>
                    </Grid>
                    <Grid container mt={4} > 
                        <Grid item xs={2}></Grid>
                        <Grid item xs={8}>
                            <Button sx={{width:"100%"}} variant="contained" onClick={()=>setActiveStep(true)} >
                                <Typography> Place Order</Typography>
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
    )
}