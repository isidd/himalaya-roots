import FormInput from "@/components/ui/input";
import { Box, Button, Divider, FormControl, Grid, InputAdornment, TextField, Typography } from "@mui/material";


export default function Address ({setActiveStep}:any){
    return (
        <Grid container mt={4} >
            <Grid item xs={4}></Grid>
            <Grid item xs={4} sx={{p:1, boxShadow : "0 2px 4px 0 rgba(0, 0, 0, 0.2)",borderRadius:"10px"}} >
               <Grid item xs={12} >
                        <Typography sx={{position:"relative",top:"-25px"}} textAlign={"center"} variant="h6" >
                            <span style={{boxShadow : "0 2px 4px 0 rgba(0, 0, 0, 0.2)",padding:"10px"}} >Add your Address </span>
                        </Typography>
            </Grid>
                <FormControl required sx={{mt:1,display:"flex",width:"100%",alignItems:"center"}} >
                    <Box>
                        <Divider sx={{mb:2,color:"green"}} textAlign="left" >
                            <Typography>Contact Details</Typography>
                        </Divider>
                        <FormInput placeholder="name" />
                        <FormInput placeholder="phone number" />
                    </Box>

                    <Box mt={2} >
                        <Divider sx={{mb:2,color:"green"}} textAlign="left" >
                            <Typography>Address Details</Typography>
                        </Divider>
                        <FormInput placeholder="pin code" />
                        <FormInput placeholder="address (house number building..)" />
                        <FormInput placeholder="locality" />
                    </Box>
                    <Grid container textAlign={"center"} >
                        <Grid xs={6} item >
                            <FormInput width={180} placeholder="City/District" />
                        </Grid>
                        <Grid xs={6} item >
                            <FormInput width={180} placeholder="State" />
                        </Grid>
                    </Grid>

                    <Grid container textAlign={"center"} mt={3} mb={2} >
                        <Grid xs={12} item>
                            <Button onClick={()=>setActiveStep((old:any)=>old+1)} variant="contained" >
                                <Typography>Add Address</Typography>
                            </Button>
                        </Grid>
                    </Grid>

                </FormControl>
            </Grid>
        </Grid>
    )
}