import { Chip, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import honey from "@/assets/pictures/honey4.jpeg"
import { useRouter } from "next/navigation";


export default function ProductSuggestion(){
    // cornflowerblue

    const router = useRouter()

    const goToProduct = ()=>{
        router.push('/product-details')
    }

    return(
        <Box >
            <Grid container sx={{display:"flex",justifyContent:"space-around",background:"#fff",padding:"50px 0",textAlign:"center"}}>
                <Grid md={2} xs={12} item alignSelf={"end"} >
                <Box sx={(theme)=>({color:theme.palette.primary.main,alignSelf:"end",textAlign:'left',ml:3})}>
                    <Typography variant="h3">Our </Typography>
                    <Typography variant="h3">Products</Typography>
                </Box>
                </Grid>
                <Grid md={10} xs={12} item container>
                    {Array.from({length:4},(_,i)=>`This is Product ${i+1}`).map((p,index)=>(
                    <Grid key={Math.random()*1000} p={1} md={3} xs={6} item sx={{display:"flex", justifyContent:'center'}} >
                        <Box 
                            sx={{
                                marginTop:"30px",
                                height:"200px", 
                                width:{xs:"200px",md:"270px"},
                                backgroundImage : `url(${honey.src})`,
                                backgroundRepeat:"no-repeat",
                                backgroundSize : "cover", 
                                borderRadius:"10px",
                                boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0), 0 6px 20px 0 rgba(0, 0, 0, .5)"
                                }}>
                            <Chip 
                                onClick={()=>goToProduct()}
                                label={p} 
                                sx={(theme)=>({
                                    background:theme.palette.primary.main,
                                    opacity:.7,
                                    color:"white",
                                    position:"relative",
                                    top:"160px",
                                    left:"60px",
                                    cursor:"pointer"
                                    }
                                )} />
                        </Box>
                    </Grid>
                    ))
                    }
                </Grid>
            </Grid>
        </Box>
    )
}