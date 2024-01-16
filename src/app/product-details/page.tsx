'use client'
import * as React from 'react';
import { Box, Button, Container, Divider, FormControl, Grid, InputAdornment, LinearProgress, Pagination, Tab, Tabs, TextField, Typography } from "@mui/material";
import pic2 from "@/assets/pictures/honey4.jpeg"
import { LocalShippingOutlined, LocalShippingTwoTone, Star } from "@mui/icons-material";
import { useState } from "react";
import FavoriteTwoToneIcon from '@mui/icons-material/Favorite';
import SpaTwoToneIcon from '@mui/icons-material/Spa';
import AcUnitTwoToneIcon from '@mui/icons-material/AcUnit';
import AddShoppingCartTwoToneIcon from '@mui/icons-material/AddShoppingCart';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import StarIcon from '@mui/icons-material/Star';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import VerifiedIcon from '@mui/icons-material/Verified';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


export default function ProductDetails(){

    const [selected,setSelected] = useState(0);
    const myRef = React.useRef(null);

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function CustomTabPanel(props: any) {
  const { children, value, index, ...other } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
          <Typography sx={{p:3}} >{children}</Typography>
      )}
    </Box>
  );
}

const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

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
                    <Grid container p={3} >
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
                            {/* <Box mt={1} display={"flex"} justifyContent={"space-between"} width={"50%"} >
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

                            </Box> */}
                            {/* <Divider component="div" role="presentation"> */}
                            {/* <Typography  ></Typography> */}
                            <Box mt={2} onClick={()=>window.scrollTo({ top: 950, behavior: "smooth" })} sx={{cursor:"pointer"}} >
                                <Star sx={(theme)=>({height:"20px",width:"20px",color:theme.palette.primary.main})} />
                                <Star sx={(theme)=>({height:"20px",width:"20px",color:theme.palette.primary.main})} />
                                <Star sx={(theme)=>({height:"20px",width:"20px",color:theme.palette.primary.main})} />
                                <Star sx={(theme)=>({height:"20px",width:"20px",color:theme.palette.primary.main})} />
                                <Star sx={(theme)=>({height:"20px",width:"20px",color:theme.palette.primary.main})} />
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
                                    <LocalShippingTwoTone sx={{width:"30px",height:"30px",color:"#E7CEC0",marginLeft:"10px"}} />
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


                    <Box mt={4} mb={3} sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                            <Tab label={ <Typography variant="h6"> Origin Story </Typography>} {...a11yProps(0)} />
                            <Tab label={<Typography variant="h6"> Nutrition Facts </Typography>} {...a11yProps(1)} />
                            <Tab label={<Typography variant="h6"> Certification </Typography>} {...a11yProps(2)} />
                        </Tabs>
                    </Box>
                    <Box>
                        <CustomTabPanel value={value} index={0}>
                            <> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis voluptates molestias molestiae ex inventore sint a, placeat nulla? Illo non nam necessitatibus optio praesentium porro voluptas similique dicta tempora animi repudiandae voluptatem sunt distinctio corrupti consequuntur quos neque cumque quod, aperiam nobis reiciendis labore. Magni ab mollitia architecto corrupti voluptatum aut pariatur repellat nesciunt eaque accusamus aperiam tempore quam cumque ea sint, illo alias rem nemo praesentium molestias sit. Illo odit vitae necessitatibus soluta suscipit atque placeat quidem dolor cum. Optio tempora dolor illo quibusdam sunt totam, at incidunt, vel blanditiis tenetur saepe ex earum repellendus cum veritatis debitis corporis sapiente. Expedita ullam laborum reprehenderit totam ex culpa tenetur fugit aliquid aspernatur a fugiat consectetur, quas repudiandae! Saepe esse iste ullam ducimus aliquid molestiae atque cupiditate sequi vitae dolorum? Voluptate natus quae modi impedit in laboriosam id enim pariatur doloribus. Assumenda laudantium corporis quisquam natus sed deleniti ad ipsa, commodi reiciendis placeat officia sunt? Ab dolor enim consectetur voluptatum odit ipsum architecto libero? Ipsum non perspiciatis in error ullam? Repellendus ipsa dolores quos accusantium numquam, cumque officia, totam eum quaerat aut quibusdam? Fugit necessitatibus, debitis, qui ab reiciendis totam natus eius ex et voluptatum veritatis iure. Veniam exercitationem ab doloribus.</>
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={1}>
                            <> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio, aperiam saepe? Beatae laudantium, officiis, vero esse optio natus suscipit porro cupiditate sint nisi molestias earum ipsum voluptas dolor sunt fugit provident perferendis illo adipisci ipsa! Voluptatum, quis numquam ea repellat quisquam iusto quibusdam at neque quaerat porro consequatur incidunt enim nostrum doloremque consectetur illum doloribus modi eos totam vel repudiandae magni accusantium ullam? Nam cupiditate, laboriosam aliquid officiis voluptatum est! Repellendus deleniti aliquid animi fugiat molestiae magnam reprehenderit minima et, earum quam, saepe a architecto ex similique iste dicta minus possimus. Provident asperiores expedita delectus quo minus repudiandae voluptates ea, tenetur, fugiat debitis sunt blanditiis. Corrupti saepe quaerat ducimus doloribus provident sit veniam, consequuntur velit repudiandae molestiae voluptatum consequatur amet reprehenderit laudantium tempora, molestias fugiat assumenda officiis maiores deserunt! Itaque voluptates quae, magni velit provident dicta illo sequi possimus, voluptatibus recusandae tempora culpa nemo temporibus placeat dolore quis? Sint quam dolorem porro saepe quod neque veniam quisquam modi repudiandae fugit, rerum aspernatur mollitia magnam, voluptatem aut illo aliquid. Minus eum saepe a consectetur temporibus? Itaque animi officiis eius mollitia? Nulla officiis possimus illo molestias! Aut asperiores quod perspiciatis. Sint, facilis quasi eveniet in optio omnis voluptas explicabo impedit aliquid non. </>
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={2}>
                            <>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam facere esse labore odio dolorum non, dolores cumque iure suscipit possimus nihil rerum error ullam amet optio dolor voluptatibus! Optio ullam molestias labore recusandae veritatis mollitia eos fugit. Molestiae vero laudantium illo, asperiores, unde harum quaerat alias sed, magnam eveniet repellat. Qui numquam itaque accusantium laudantium, nisi assumenda amet? Obcaecati, nisi praesentium quis, necessitatibus, est eaque laboriosam cumque temporibus eveniet animi dignissimos! Maiores tenetur dolores aliquid doloremque autem eius eos deleniti voluptates quibusdam, velit, dolorem fugiat voluptate sequi! Est, soluta doloremque amet necessitatibus praesentium rem quia dolorem repellat corrupti reiciendis ex, fugit cupiditate quo assumenda obcaecati deserunt distinctio reprehenderit commodi. Ipsam asperiores iusto sunt a suscipit! Suscipit repellat mollitia laborum, incidunt placeat voluptates reiciendis maiores nihil eius, magni, quos harum voluptatum fugit sit sequi ut labore blanditiis commodi repellendus dolorem dicta ducimus natus. Quos nobis numquam quasi dolorum blanditiis ipsam necessitatibus non vitae, ex eveniet earum nisi ullam nihil eos obcaecati repellendus sit nam deleniti pariatur ea harum. Doloremque non ad eligendi labore quas possimus autem delectus voluptates sapiente corrupti iure consequuntur cumque, architecto sint nobis commodi ducimus quo deleniti voluptate, aliquid quod! Eveniet alias minus culpa cupiditate soluta quo delectus!
                            </>
                        </CustomTabPanel>
                    </Box>
                        <Container  maxWidth="xl" sx={{border:"1px solid lightgray"}} >
                            <Box mt={2}>
                                <Typography variant="h4" >
                                    Products Ratings & Reviews
                                </Typography>
                                <Box mt={1} display={"flex"} >
                                    <VerifiedUserIcon sx={{color:"green"}} />
                                    <Typography ml={1} >By verified users only </Typography>
                                </Box>
                            </Box>
                            <Grid container  alignItems={"center"} >
                                <Grid item md={1}></Grid>
                                <Grid item md={1} >
                                    <Box display={"flex"} >
                                        <Typography variant="h5" >4.2</Typography>
                                        <StarIcon sx={{color:"green"}} />
                                    </Box>
                                </Grid>
                                <Grid item md={7} sx={{borderLeft:"1px solid lightgray"}} alignItems={"center"} >
                                    <Box ml={2} display={"flex"} justifyContent={"flex-start"} >
                                        <Box><Typography variant="body1" >5</Typography></Box>
                                        <Box><StarIcon sx={{height:"15px",width:"15px"}} /></Box>
                                        <Box ml={3} display={"flex"} alignItems={"center"} >
                                            <LinearProgress sx={{width:"300px",height:"6px",borderRadius:"10px"}} variant="determinate" value={91} valueBuffer={10} />
                                            </Box>
                                    </Box>
                                    <Box ml={2} display={"flex"} justifyContent={"flex-start"} >
                                        <Box><Typography variant="body1" >4</Typography></Box>
                                        <Box><StarIcon sx={{height:"15px",width:"15px"}} /></Box>
                                        <Box ml={3} display={"flex"} alignItems={"center"} >
                                            <LinearProgress sx={{width:"300px",height:"6px",borderRadius:"10px"}} variant="determinate" value={72} valueBuffer={10} />
                                            </Box>
                                    </Box>
                                    <Box ml={2} display={"flex"} justifyContent={"flex-start"} >
                                        <Box><Typography variant="body1" >3</Typography></Box>
                                        <Box><StarIcon sx={{height:"15px",width:"15px"}} /></Box>
                                        <Box ml={3} display={"flex"} alignItems={"center"} >
                                            <LinearProgress sx={{width:"300px",height:"6px",borderRadius:"10px"}} variant="determinate" value={92} valueBuffer={10} />
                                            </Box>
                                    </Box>
                                    <Box ml={2} display={"flex"} justifyContent={"flex-start"} >
                                        <Box><Typography variant="body1" >2</Typography></Box>
                                        <Box><StarIcon sx={{height:"15px",width:"15px"}} /></Box>
                                        <Box ml={3} display={"flex"} alignItems={"center"} >
                                            <LinearProgress sx={{width:"300px",height:"6px",borderRadius:"10px"}} variant="determinate" value={84} valueBuffer={10} />
                                            </Box>
                                    </Box>
                                    <Box ml={2} display={"flex"} justifyContent={"flex-start"} >
                                        <Box><Typography variant="body1" >1</Typography></Box>
                                        <Box><StarIcon sx={{height:"15px",width:"15px"}} /></Box>
                                        <Box ml={3} display={"flex"} alignItems={"center"} >
                                            <LinearProgress sx={{width:"300px",height:"6px",borderRadius:"10px"}} variant="determinate" value={36} valueBuffer={10} />
                                            </Box>
                                    </Box>
                                </Grid>
                            </Grid>
                            <Box mt={3} >
                               <Typography variant="h4" > Reviews </Typography>
                            </Box>
                            {Array.from({length:3},(_,i)=>(
                            <Container  key={i} maxWidth="xl" sx={{borderTop:"1px solid lightgray",marginTop:"30px",marginBottom:"30px"}}>
                                <Box mt={3} display={"flex"} >
                                    {Array.from({length:5},(_,i)=><StarIcon key={i} sx={{color:"green", width:"18px"}} />)}
                                </Box>
                                <Box display={"flex"} >
                                    <AccountCircleIcon sx={{width:"30px",height:"30px"}} />
                                    <Typography variant='h6' ml={1} >Siddhartha Pharasi</Typography>
                                    <VerifiedIcon sx={{color:"green",width:"15px"}} />
                                </Box>
                                <Box>
                                    <Typography variant='body1'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, exercitationem?</Typography>
                                    <Typography variant='body2' color={"gray"}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima nemo earum minus autem eligendi quibusdam porro. Quia magni qui explicabo! </Typography>
                                </Box>
                            </Container>
                            )) }
                            <Box mb={2} display={"flex"} justifyContent={"center"} ><Pagination count={8} /></Box>
                        </Container>
                </Container>
                
            </>)
}  