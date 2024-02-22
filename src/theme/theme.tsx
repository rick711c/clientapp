// theme/theme.js

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    h2: {
      fontSize: "22px",
      fontWeight: "600", // Semi-bold
    },

    h3: {
      fontSize: "20px",
      fontWeight: "600", // Semi-bold
    },

    h4: {
      fontSize: "22px",
      fontWeight: "600", // Semi-bold
    },

    h5: {
      fontSize: "16px",
      fontWeight: "600", // Semi-bold
    },

    body1: {
      fontSize: "16px",
    },

    body2: {
      fontSize: "14px",
    },
  },
  palette: {
    primary: {
      main: "#F54749", // Primary color
    },
    secondary: {
      main: "#03A9F4", // Secondary color
    },
    
    background:{
     default: "rgb(245, 245, 245)"
    }
  },
});

export default theme;
