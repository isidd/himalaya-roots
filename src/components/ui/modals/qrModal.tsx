import * as React from 'react';
import { Typography, Modal, Grid } from '@mui/material';
import { QrReader } from 'react-qr-reader';
import { QrCode2Outlined } from '@mui/icons-material';
import { useRouter } from 'next/navigation';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: "#fff",
  boxShadow: 24,
  height: 580,
  borderRadius:"20px"
};

interface IProps{
  isOpen : boolean;
  setOnAuth : (arg:boolean)=>void
} 

export default function QRModal({isOpen, setOnAuth}:IProps) {

    const [open, setOpen] = React.useState(false);
    const handleClose = () => setOpen(false);
    const navigator = useRouter()


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
            <Grid md={5} mt={3} item textAlign={"right"} >
                <QrCode2Outlined sx={{width:"80px",height:"80px"}} />
            </Grid>
            <Grid md={7} display={"flex"} flexDirection={"column"} alignSelf={"center"} textAlign={"left"} item >
                <Typography variant='h6' mt={2} >Scan your code here</Typography>
                <Typography variant='body2' color={"gray"} >This will ensure the authenticity of the product.</Typography>
            </Grid>
            <Grid md={12} item display={"flex"} margin={"auto"} textAlign={"center"} >
                <QrReader
                    onResult={(result: any, error) => {
                        if (!!result) {
                            setOpen(false)
                            setTimeout(()=>{
                                window.location.reload()
                            },1000)
                            navigator.push(result.text);
                            setOnAuth(false);
                        }
                        if (!!error) {
                            console.info(error);
                        }
                    } } 
                    constraints={{ facingMode: 'user' }}
                    containerStyle={{width:"55%",marginLeft:"180px"}}
                  />
            </Grid>
        </Grid>
      </Modal>
    </div>
  );
}