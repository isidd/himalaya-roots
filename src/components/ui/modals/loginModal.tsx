import * as React from 'react';
import { Button, Typography, Modal, Grid, Box, Divider, TextField, InputAdornment, FormControl } from '@mui/material';
import logoImage from "@/assets/pictures/himalayaRoots.png"
import Image from 'next/image';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: "#fff",
  boxShadow: 24,
  height: 400,
  borderRadius:"20px"
};

interface IProps{
  isOpen : boolean;
  setActiveStep : (val:any)=>void
} 

export default function BasicModal({isOpen, setActiveStep}:IProps) {

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
        <Grid container display={"flex"} flexDirection={"column"} sx={style} >
            <Box textAlign={"center"} mt={2}>
                <Image
                 style={{height:"100px",width:400}}
                src={logoImage}
                alt='logo image'
                />
            </Box>
            <Box mt={3} display={"flex"} justifyContent={"center"} >
                <Divider sx={{width:"80%"}} > <Typography> Signup / Login</Typography></Divider>
            </Box>
            <Box mt={6} textAlign={"center"} >
            <FormControl required sx={{width:"70%"}} >
            <TextField 
                onInput={(e:any) => { 
                    if((e.target.value).toString().length < 9){
                        e.target.value = e.target.value.replace(/[^0-9]/g, '')
                    }
                 }}
                // helperText={<Box textAlign={"center"} >Checking</Box>}
                variant="outlined"
                onChange={() => {}}
                label={"Phone Number"}
                onSelect={()=>console.log("herererer")}
                placeholder={"phone number"}
                InputProps={{
                    startAdornment: (
                    <InputAdornment position="start">
                        +91
                    </InputAdornment>
                    
                    ),
                }}
                inputProps={{ max: 12 }}
                />
            </FormControl>
            </Box>
            <Box mt={5} textAlign={"center"} >
                <Button sx={{width:"50%"}} variant="contained" onClick={()=>setActiveStep((old:any)=>old+1)} >Continue</Button>
            </Box>
        </Grid>
      </Modal>
    </div>
  );
}