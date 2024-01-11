import * as React from 'react';
import { Button, Typography, Modal, Grid, Box } from '@mui/material';
import modalPicture from "@/assets/pictures/honey4.jpeg"

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  bgcolor: "#fff",
  boxShadow: 24,
  height: 420,
  borderRadius:"20px"
};

interface IProps{
  isOpen : boolean;
} 

export default function BasicModal({isOpen}:IProps) {

  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);

  React.useEffect(()=>{
        setOpen(isOpen)
  },[isOpen])

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Grid container display={"flex"} sx={style} >
            <Grid 
                item 
                md={6} 
                sx={{
                  backgroundImage : `url(${modalPicture.src})`,
                  backgroundRepeat:"no-repeat",
                  backgroundSize : "cover",
                  borderTopLeftRadius : "20px",
                  borderBottomLeftRadius: "20px",
                  width:"100%"
                }} >
            </Grid>
            <Grid md={6} item display={"flex"} margin={"auto"} textAlign={"center"} >
                <Box margin={"auto"} >
                        <Typography variant='h5' textAlign={"center"} >Get 15% off</Typography>
                        <Typography mb={3} textAlign={"center"} mt={1}>on your initial purchase of our chosen products</Typography>
                        <Button variant="text" sx={{borderRadius:"10px",color:"#658C4A"}} >
                            <Typography>
                                Buy Now
                            </Typography>
                        </Button>
                </Box>
            </Grid>
        </Grid>
      </Modal>
    </div>
  );
}