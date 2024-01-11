import { Box, Container, Typography } from "@mui/material";
import Image from 'next/image';
import sig from "@/assets/pictures/sig.svg";

export default function Philosophy(){
        return (
            <Container maxWidth="xl" sx={(theme)=>({background:theme.palette.primary.main,color:"#fff",padding:"40px 0 "})} >
                <Box sx={{padding : "90px 70px"}} >
                    <Typography variant="h5" textAlign={"center"} >
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas dolorem odit ratione natus praesentium atque labore, nostrum magni molestiae porro dolor corporis ea repudiandae quo et, nam repellat! Dolore, voluptatum.
                    </Typography>
                </Box>
                <Box mb={"30px"} textAlign={"center"} >
                    <Image
                    priority
                    src={sig}
                    alt="Sig"
                    height={100}
                    width={900}
                />
                </Box>
            </Container>
        )
}