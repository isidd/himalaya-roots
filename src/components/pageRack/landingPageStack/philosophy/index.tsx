import { Box, Container, Typography } from "@mui/material";
import Image from 'next/image';
import sig from "@/assets/pictures/sig.svg";

export default function Philosophy(){
        return (
            <Container maxWidth="xl" sx={{background:"#658C4A",color:"#fff",padding:"40px 0 "}} >
                <Box sx={{padding : "90px 70px"}} >
                    <Typography variant="h5" textAlign={"center"} >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Est maxime, blanditiis voluptatibus animi architecto minima, consectetur minus nulla at laudantium fugiat reiciendis obcaecati autem. Praesentium vitae voluptatum necessitatibus earum deserunt nesciunt ipsa, temporibus corrupti tempora?
                    </Typography>
                </Box>
                <Box mb={"30px"} textAlign={"center"} >
                    <Image
                    priority
                    src={sig}
                    alt="Follow us on Twitter"
                    height={100}
                    width={900}
                />
                </Box>
            </Container>
        )
}