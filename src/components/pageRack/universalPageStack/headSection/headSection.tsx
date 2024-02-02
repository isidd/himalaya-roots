"use client";
import {
  Badge,
  Grid,
} from "@mui/material";
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import Image from 'next/image';
import logo from "@/assets/pictures/himalayaRoots.png";
import { useRouter } from "next/navigation";
import QrToolTip from "../qrToolTip";
import SearchBar from "./searchBar";




export default function HeadSection() {

  const navigator = useRouter()

  return (
      // <Grid container sx={{ p: 2, display:{xs:"none",md:"flex"}, alignItems:"center"}} >
      <Grid container sx={{ p: 2, alignItems:"center"}} >

        <Grid item md={2} sm={2} xs={12} sx={{display:{xs:"none",md:"flex",sm:"flex"}}} >
            <Image
              priority
              src={logo}
              alt="Follow us on Twitter"
              height={70}
              style={{width:"95%",cursor:"pointer"}}
              onClick={()=>navigator.push("/")}
          />
        </Grid>

        <Grid item md={8} sm={8} xs={12} sx={{display:{xs:"none",md:"flex",sm:"flex"}}} >
          <SearchBar />
        </Grid>

        <Grid item md={2} sm={2} xs={12} container sx={{display:"flex",textAlign:"end",}}>
            <Grid xs={8} sx={{display:{md:"none",sm:"none",sx:"flex",textAlign:"start"}}} >
              <Image
                priority
                src={logo}
                alt="Follow us on Twitter"
                height={30}
                style={{width:"55%",cursor:"pointer"}}
                onClick={()=>navigator.push("/")}
              />
            </Grid>
            
            <Grid md={4} xs={2} sm={4} item textAlign={{xs:"center",md : "center"}} ><PersonOutlinedIcon sx={{color:"grey"}} height="300px" /></Grid>
            <Grid md={4} xs={2} sm={4} item textAlign={{xs:"center", md:"center"}} >
              <Badge onClick={()=>navigator.push("/bucket")} sx={{cursor:"pointer"}} badgeContent={4} color="primary">
                <LocalMallOutlinedIcon sx={{color:"grey"}} />
              </Badge>
            </Grid>
            <Grid md={4} sx={{display:{xs:"none",md:"flex",sm:"none"}}} >
                <QrToolTip />
            </Grid>
        </Grid>

        <Grid item md={8} sm={8} xs={12} mt={2} sx={{display:{xs:"flex",md:"none",sm:"none"}}} >
          <SearchBar />
        </Grid>
        
      </Grid>
  );
}
