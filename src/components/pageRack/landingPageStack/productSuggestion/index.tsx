import { Chip, Typography } from "@mui/material";
import { Box } from "@mui/system";
import honey from "@/assets/pictures/honey4.jpeg"


export default function ProductSuggestion(){
    // cornflowerblue
    return(
        <Box >
            <Box sx={{display:"flex",justifyContent:"space-around",background:"#fff",padding:"50px 0"}}>
                <Box sx={{color:"#658C4A",alignSelf:"end"}}>
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
                        borderRadius:"10px"
                        }}>
                   <Chip 
                        label={p} 
                        sx={{
                            background:"#658C4A",
                            opacity:.7,
                            color:"white",
                            position:"relative",
                            top:"120px",
                            left:"5px",
                            cursor:"pointer"
                            }} />
                </Box>
                ))
                }
            </Box>
        </Box>
    )
}