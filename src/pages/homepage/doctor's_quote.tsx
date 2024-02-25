import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Paper,
  ThemeProvider,
  Typography,
} from "@mui/material";
import React from "react";
import theme from "../../theme/theme";
 

export const DoctorQuote = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: "flex",
          width: {
            xs: "100%",
            sm: 336,
            border: 2,
          },
        }}
      >
        <img
        src="src/assets/images/doctor.png"
        />
        <Card sx={{ display: "flex" }}>
          <CardMedia
            component={"img"}
            src='../../assets/images/doctor.png'
            sx={{ width: 151 }}
          />
          <CardContent>
            <Typography variant="body2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </ThemeProvider>
    // <div>
    //   gfdsa
    // </div>
  );
};
