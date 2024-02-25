import {
  Box,
  Card,
  CardContent,
  Container,
  Icon,
  Paper,
  ThemeProvider,
  Typography,
} from "@mui/material";
import React from "react";
import theme from "../../theme/theme";
import { DoctorSVGIcon } from "../../assets/icons/doctor-svg-icon";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import { DoctorsdetailsCard } from "../../components/doctorsdetailsCard";
import { BookingDateTimeAddress } from "../../components/bookingDateTimeAdd";

export const UpcomingAppoinments = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex", width: { xs: "100%", sm: 336 } }}>
        <Paper
          elevation={3}
          
          sx={{
            padding: 2,
            //maxWidth: 256,
            width: "100%",
            backgroundColor:'white'
          }}
        >
          {/* doctor's details frame */}
         
          <DoctorsdetailsCard/>

          {/* booking date time address */}
          <BookingDateTimeAddress/>
        </Paper>
      </Box>
    </ThemeProvider>
  );
};
