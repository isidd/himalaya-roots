'use client'
import { Avatar, Box, Button, FormControl, Grid, IconButton, InputAdornment, Menu, MenuItem, TextField, Toolbar, Tooltip, Typography } from "@mui/material";
import styled, { keyframes } from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import ClearIcon from "@mui/icons-material/Clear";
import React from "react";
import MenuIcon from '@mui/icons-material/Menu';
import AdbIcon from '@mui/icons-material/Adb';



export default function SearchBar(){
  const [showClearIcon, setShowClearIcon] = useState("none");

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

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

    return (<Grid container>
                <Grid xs={10} md={12}>
                <FormControl className={"search"} sx={{ width: "100%"}}>
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
                <Grid xs={2} sx={{ flexGrow: 1, display: { xs: 'flex',sm:"none", md: 'none' } }} >
                   <Toolbar disableGutters>
                        <Box sx={{ flexGrow: 1, display: { xs: 'flex',sm:"none", md: 'none' } }}>
                            <IconButton
                                sx={{position:"relative",bottom:"10px",left:"10px"}}
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            keepMounted
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                            >
                            {[
                                {"name":"Home","link":"/"},
                                {"name":"Dairy","link":"/diary"},
                                {"name":"Pulses","link":"/pulses"},
                                {"name":"Herbs","link":"/herbs"},
                                {"name":"Toiletries","link":"/toiletries"},
                                {"name":"Explore..","link":"/others"}
                            ].map((page) => (
                                <MenuItem key={page.link} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page.name}</Typography>
                                </MenuItem>
                            ))}
                            </Menu>
                        </Box>
                    </Toolbar>
                </Grid>
            </Grid>
    )
} 