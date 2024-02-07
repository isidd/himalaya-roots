'use client'
import { Box,Button,Card,CardContent,Container,FormControl,Grid,InputAdornment,TextField,Typography } from "@mui/material"
import honey from "@/assets/pictures/joinUs.png"


export default function JoinUs(){

    return(
        <Container maxWidth="xl" sx={{background:"#fff",padding:{md:"120px",xs:"70px 30px"},backgroundImage : `url(${honey.src})`,
                        backgroundRepeat:"no-repeat",
                        backgroundSize : "cover", backgroundPosition:"top" , marginTop:"100px" }} >
                <Grid xs={12} container>
                <Card sx={{width:"500px",borderRadius:"20px",padding:"5px"}} >
                    <CardContent>
                        <Grid >
                            <Typography>Join Us through our news letter</Typography>
                        </Grid >
                         <Box >
                            <Typography color={"gray"} >Be the first to know about exclusive offers, eco-tips, and new arrivals!</Typography>
                        </Box>
                        <Box mt={"20px"} >
                            <FormControl className={"search"} sx={{ width: "100%" }}>
                                <TextField
                                size="small"
                                inputProps={{
                                    style: {},
                                }}
                                variant="outlined"
                                onChange={() => {}}
                                label={""}
                                onSelect={()=>console.log("herererer")}
                                placeholder="Your email"
                                InputProps={{
                                    endAdornment: (
                                    <InputAdornment position="end">
                                        <Button sx={(theme)=>({borderRadius:"30px",color:"#fff",background:theme.palette.primary.main,position:"absolute",marginLeft:"-71px",marginTop:"-1px"})} variant="contained" >
                                            Join Us
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
                    </CardContent>
                </Card>
                </Grid>
        </Container>
    )
}