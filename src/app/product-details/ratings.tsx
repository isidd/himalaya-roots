"use client"
import { Box, Container, Grid, LinearProgress, Pagination, Typography } from "@mui/material";
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import StarIcon from '@mui/icons-material/Star';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import VerifiedIcon from '@mui/icons-material/Verified';

export function Ratings(){
   return <Container  maxWidth="xl" sx={{border:"1px solid lightgray"}} >
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
                                    <Box display={"flex"} mt={2} mb={2} >
                                        <Typography variant="h5" >4.2</Typography>
                                        <StarIcon sx={{color:"green"}} />
                                    </Box>
                                </Grid>
                                <Grid item md={7} sx={{borderLeft:{md:"1px solid lightgray",sx:"none"}}} alignItems={"center"} >
                                    <Grid container>
                                        <Grid xs={12}>
                                            <Box ml={2} display={"flex"} justifyContent={"flex-start"} >
                                                <Box><Typography variant="body1" >5</Typography></Box>
                                                <Box><StarIcon sx={{height:"15px",width:"15px"}} /></Box>
                                                <Box ml={3} display={"flex"} alignItems={"center"} >
                                                    <LinearProgress sx={{width:{md:"300px",xs:"250px"},height:"6px",borderRadius:"10px"}} variant="determinate" value={91} valueBuffer={10} />
                                                </Box>
                                            </Box>
                                        </Grid>

                                    </Grid>
                                    <Box ml={2} display={"flex"} justifyContent={"flex-start"} >
                                        <Box><Typography variant="body1" >4</Typography></Box>
                                        <Box><StarIcon sx={{height:"15px",width:"15px"}} /></Box>
                                        <Box ml={3} display={"flex"} alignItems={"center"} >
                                            <LinearProgress sx={{width:{md:"300px",xs:"250px"},height:"6px",borderRadius:"10px"}} variant="determinate" value={72} valueBuffer={10} />
                                            </Box>
                                    </Box>
                                    <Box ml={2} display={"flex"} justifyContent={"flex-start"} >
                                        <Box><Typography variant="body1" >3</Typography></Box>
                                        <Box><StarIcon sx={{height:"15px",width:"15px"}} /></Box>
                                        <Box ml={3} display={"flex"} alignItems={"center"} >
                                            <LinearProgress sx={{width:{md:"300px",xs:"250px"},height:"6px",borderRadius:"10px"}} variant="determinate" value={92} valueBuffer={10} />
                                            </Box>
                                    </Box>
                                    <Box ml={2} display={"flex"} justifyContent={"flex-start"} >
                                        <Box><Typography variant="body1" >2</Typography></Box>
                                        <Box><StarIcon sx={{height:"15px",width:"15px"}} /></Box>
                                        <Box ml={3} display={"flex"} alignItems={"center"} >
                                            <LinearProgress sx={{width:{md:"300px",xs:"250px"},height:"6px",borderRadius:"10px"}} variant="determinate" value={84} valueBuffer={10} />
                                            </Box>
                                    </Box>
                                    <Box ml={2} display={"flex"} justifyContent={"flex-start"} >
                                        <Box><Typography variant="body1" >1</Typography></Box>
                                        <Box><StarIcon sx={{height:"15px",width:"15px"}} /></Box>
                                        <Box ml={3} display={"flex"} alignItems={"center"} >
                                            <LinearProgress sx={{width:{md:"300px",xs:"250px"},height:"6px",borderRadius:"10px"}} variant="determinate" value={36} valueBuffer={10} />
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
                            <Grid container mb={4} mt={6} >
                                <Grid xs={12} display={"flex"} justifyContent={"center"}>
                                    <Pagination count={6} />
                                </Grid>
                            </Grid>
                        </Container>
}