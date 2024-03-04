import { Box, Container, ThemeProvider } from "@mui/material";
import React from "react";
import ResponsiveAppBar from "../../components/appbar";
import theme from "../../theme/theme";
import { AllAppointment } from "./allAppointment";
import { AppointmentDetails } from "./appointmentDetails";

export const Appointments = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          padding: { xs: 2, sm: 4 },
          border: 2,
          borderColor: "red",
          margin: 0,
          height: "auto",
          width: "100%",
          justifyContent: "space-between",
          gap: { xs: 4 },
          overflowY: "hidden",
          backgroundColor: theme.palette.background.default,
        }}
        maxWidth={false}
      >
        <Box
          sx={{
            flex: "0 0 auto",
            position: "sticky",
            top: 0,
            maxHeight: "100vh", // Adjust as per your requirement, considering margin and padding
            overflowY: "auto",
          }}
        >
          {" "}
          <AllAppointment />
        </Box>

        <Box
          sx={{
            flex: "0 0 auto",
            position: "sticky",
            top: 0,
            maxHeight: "100vh", // Adjust as per your requirement, considering margin and padding
            overflowY: "hidden",
          }}
        >
          <AppointmentDetails />
        </Box>
      </Container>
    </ThemeProvider>
  );
};
