import { Box, Container, Typography } from "@mui/material";
import Image from 'next/image';
import sig from "@/assets/pictures/sig.svg";

export default function Philosophy(){
        return (
            <Container maxWidth="xl" sx={(theme)=>({background:theme.palette.primary.main,color:"#fff",padding:"40px 0 "})} >
                    <Typography variant="h3" mb={3} textAlign={"center"} >Our Philosophy</Typography>
                <Box sx={{padding : "70px 70px"}} >
                    <Typography variant="h5" textAlign={"center"} >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos itaque, cupiditate libero eius quaerat voluptates natus quasi reiciendis sequi. A vero ex assumenda, veritatis officiis deserunt iste! Eum, repellendus autem debitis tempora cupiditate pariatur tenetur consequuntur assumenda, quo veritatis voluptatibus, tempore labore odit doloremque itaque fuga minus aut sed temporibus amet veniam voluptates repudiandae quia laudantium! Incidunt doloribus aliquam magni?
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