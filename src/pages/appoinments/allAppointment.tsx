import { Box, Container, ThemeProvider, useMediaQuery } from "@mui/material";
import React from "react";
import { UpcomingAppoinments } from "../../components/upcomingappointments.card";
import { AppointmentDetails } from "./appointmentDetails";
import theme from "../../theme/theme";
import { useNavigate } from "react-router-dom";

export const AllAppointment = () => {
  const isXsScreen = useMediaQuery(theme.breakpoints.between('xs','sm'));
  console.log(isXsScreen)
  const navigate = useNavigate();
  const showDetails = () => {
    if (isXsScreen) {
      navigate("/appointmentdetails");
    }
  };

  const allAppointments = [0, 1, 2, 3, 4, 5];
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex", flexDirection: "column", border: 1 }}>
        {allAppointments.map((index) => (
          <Box sx={{ cursor: "pointer" }} onClick={showDetails}>
            <UpcomingAppoinments
              iconflag={false}
              patientnameflag={true}
              elevation={0}
              bottomborderflag={true}
            />
          </Box>
        ))}
      </Box>
    </ThemeProvider>
  );
};
