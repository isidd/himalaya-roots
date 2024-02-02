import { Theme, createTheme } from "@mui/material";

export const lightTheme: Theme = createTheme({
  palette: {
    // mode: "light",
    background: {
      default: "#ffffff",
    },
    primary :{
      main:"#57843a"
    },
    secondary:{
      main:"#e1bc9e"
    }
  },
  typography: {
    fontFamily: [
      "Libre Baskerville",
    ].join(","),
  }
});

export const DarkTheme: Theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      // default: "green",
    },
  },
  components : {
    MuiTextField : {
        styleOverrides :{
            root : {
                // borderColor : "red"
            }
        }
    }
  }
});
