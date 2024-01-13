import { Chip, Typography } from "@mui/material";
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
            <Box sx={{display:"flex",justifyContent:"space-around",background:"#fff",padding:"50px 0"}}>
                <Box sx={(theme)=>({color:theme.palette.primary.main,alignSelf:"end"})}>
                    <Typography variant="h3">Our</Typography>
                    <Typography variant="h3">Products</Typography>
                </Box>
                {Array.from({length:5},(_,i)=>`Product ${i+1}`).map((p,index)=>(
                <Box 
                    key={Math.random()*1000} 
                    sx={{
                        marginTop:"30px",
                        height:"160px", 
                        width:"150px",
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
                            top:"120px",
                            left:"5px",
                            cursor:"pointer"
                            })} />
                </Box>
                ))
                }
            </Box>
        </Box>
    )
}