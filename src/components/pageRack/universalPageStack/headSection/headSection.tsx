"use client";
import {
  FormControl,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
// import makeStyles from "@mui/styles";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import ClearIcon from "@mui/icons-material/Clear";
import SearchIcon from "@mui/icons-material/Search";
import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import Image from 'next/image';
import logo from "@/assets/pictures/logo.svg";


const StyleTEXT = styled(TextField)`
& .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: gray;
      border : 1px solid gray;
    }
  }
& .MuiOutlinedInput-notchedOutline {
      border-color: gray;
      color : red;
    }
&:hover .MuiOutlinedInput-notchedOutline {
      border-color: gray;
    }
`

const searchAnimation = keyframes`
 0% { height: 20px; width: 20px; color:grey }
 50% { height: 150px; width: 150px; color : #658C4A}
 100% { height: 20px; width: 20px; color:grey}
`

const StyledSearchIcon = styled(SearchIcon)`
 height: 20px;
 width: 20px;
 color : grey;
 animation-name: ${searchAnimation};
 animation-duration: 3s;
 animation-iteration-count: 2;
 background : transparent;
`

export default function HeadSection() {

  const [showClearIcon, setShowClearIcon] = useState("none");

  return (
      // <Grid container sx={{ p: 2, display:{xs:"none",md:"flex"}, alignItems:"center"}} >
      <Grid container sx={{ p: 2, alignItems:"center"}} >
        <Grid item md={2} sm={12} xs={12} >
          {/* <Typography variant="h3" color={"#658C4A"} > */}
            <Image
            priority
            src={logo}
            alt="Follow us on Twitter"
            height={50}
            width={100}
          />
          {/* </Typography> */}
        </Grid>
        <Grid item md={8} sm={12} xs={12}>
          <FormControl className={"search"} sx={{ width: "100%" }}>
            <StyleTEXT
              size="small"
              inputProps={{
                style: {},
              }}
              variant="outlined"
              onChange={() => {}}
              label={<StyledSearchIcon />}
              onSelect={()=>console.log("herererer")}
              placeholder="here we go..!"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    {/* <SearchIcon /> */}
                  </InputAdornment>
                ),
                startAdornment: (
                  <InputAdornment
                    position="end"
                    style={{ display: showClearIcon }}
                    onClick={() => {}}
                  >
                    <ClearIcon />
                  </InputAdornment>
                ),
                style: {
                  borderRadius: "100px",
                },
              }}
            />
          </FormControl>
        </Grid>
        <Grid item md={1} sm={12} xs={12}></Grid>
        <Grid item md={1} sm={12} xs={12} container  sx={{display:"flex",textAlign:"end"}}>
            <Grid md={6} item><PersonOutlinedIcon sx={{color:"grey"}} height="300px" /></Grid>
            <Grid md={6} item><LocalMallOutlinedIcon sx={{color:"grey"}} /></Grid>
          
        </Grid>
      </Grid>
  );
}
