import { Box, Container, ThemeProvider } from "@mui/material";
import React from "react";
import { UpcomingAppoinments } from "../../components/upcomingappointments.card";
import { AppointmentDetails } from "./appointmentDetails";
import theme from "../../theme/theme";

export const AllAppointment = () => {
  const allAppointments = [0, 1, 2, 3, 4, 5];
  return (
    <ThemeProvider theme={theme}>
        <Box sx={{ display: "flex", flexDirection: "column", border:1, width:'100%' }}>
          {allAppointments.map((index) => (
            <UpcomingAppoinments
              iconflag={false}
              patientnameflag={true}
              elevation={0}
              bottomborderflag={true}
            />
          ))}
        </Box>
    </ThemeProvider>
  );
};
