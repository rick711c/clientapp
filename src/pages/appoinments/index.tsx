import { Box, Container, ThemeProvider } from "@mui/material";
import React from "react";
import ResponsiveAppBar from "../../components/appbar";
import theme from "../../theme/theme";
import { AllAppointment } from "./allAppointment";
import { AppointmentDetails } from "./appointmentDetails";

export const Appointments = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <ResponsiveAppBar></ResponsiveAppBar>
      </Box>
      <Container
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          padding: { xs: 2, sm: 4 },
          border: 2,
          borderColor: "red",
          margin: 0,
          height: "100%",
          width: "100%",
          justifyContent: "space-between",
          gap: { xs: 4 },

          backgroundColor: theme.palette.background.default,
        }}
        maxWidth={false}
      >
        <Box
        sx={{display:'flex',width: '100%'}}
        >
          <AllAppointment />
        </Box>

        <Box sx={{display:{sm:'flex',xs:'none'}}}>
          <AppointmentDetails />
        </Box>
      </Container>
    </ThemeProvider>
  );
};
