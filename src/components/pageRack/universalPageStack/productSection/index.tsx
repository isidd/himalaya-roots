"use client"
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Grid } from '@mui/material';
import { useRouter } from "next/navigation";


function ResponsiveAppBar() {

  const navigate  = useRouter()

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

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

  const [ProductsList,setProductList] = React.useState([])

  React.useEffect(()=>{
      fetch("/data/product.json").then(r=>r.json()).then((res:any)=>{
        console.log("res",res.data)
        setProductList(res.data)
      })
  },[])

  return (
    <AppBar position="static" sx={(theme)=>({boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0), 0 6px 20px 0 rgba(0, 0, 0, .5)",background:theme.palette.primary.main,color:"black"})} >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Grid container sx={{display:{xs:'none',md:"flex"}}}>
                <Grid md={2} item ></Grid>
                <Grid md={8} item container >
                  {
                    ProductsList.map((p:any)=>(
                      <Grid item xs={2} key={p.name}>
                        <Typography 
                            variant="body1" 
                            sx={{cursor:"pointer",color:"#fff"}} 
                            onClick={()=>navigate.push(p.link)} 
                            >
                            {p.name}
                          </Typography>
                        </Grid>
                    ))
                  }
                </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
