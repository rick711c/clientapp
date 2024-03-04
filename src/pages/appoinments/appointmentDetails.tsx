import {
  Box,
  Container,
  Paper,
  ThemeProvider,
  Typography,
} from "@mui/material";
import React from "react";
import { DoctorsdetailsCard } from "../../components/doctorsDetail";
import theme from "../../theme/theme";

export const AppointmentDetails = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row", sm: "row" },
          padding: { xs: 2, sm: 4 },
          // border: 2,
          // borderColor: "yellow",
          margin: 0,
          height: "100vh",
          width: "auto",
          justifyContent: "space-between",
          gap: { xs: 4 },
          paddingTop: { xs: 4 },
          backgroundColor: {
            sm: "white",
            xs: theme.palette.background.default,
          },
          overflow: "hidden",
        }}
        maxWidth={false}
      >
        {/* doctor, booking , payment */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: { xs: 2, sm: 4 },
          }}
        >
          {/* doctorsDetail card */}
          <Box sx={{ display: "flex", gap: 2, flexDirection: "column" }}>
            <Box>
              <Typography variant="h5">Doctor's details</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                width: { xs: "100%", sm: 336 },
                borderColor: "#E2E2E2",
              }}
            >
              <Paper
                elevation={0}
                sx={{
                  padding: 2,
                  //maxWidth: 256,
                  width: "100%",
                  backgroundColor: "white",
                }}
              >
                <DoctorsdetailsCard flag={true} />
              </Paper>
            </Box>
          </Box>

          {/* paitent details */}
          <Box sx={{ display: "flex", gap: 2, flexDirection: "column" }}>
            <Box>
              <Typography variant="h5">Booking details</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                width: { xs: "100%", sm: 336 },
                borderColor: "#E2E2E2",
              }}
            >
              <Paper
                elevation={0}
                sx={{
                  padding: 2,
                  //maxWidth: 256,
                  width: "100%",
                  backgroundColor: "white",
                }}
              >
                <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
                  <Typography variant="h6"> Booking id</Typography>
                  <Typography variant="body2"> 123456</Typography>
                </Box>

                <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
                  <Typography variant="h6"> Clinic Address</Typography>
                  <Typography variant="body2"> Bidhannagar,Kolkata</Typography>
                </Box>

                <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
                  <Typography variant="h6"> Date</Typography>
                  <Typography variant="body2"> 10/3/2023</Typography>
                  <Typography variant="body2"> 09:00 Am</Typography>
                </Box>
              </Paper>
            </Box>
          </Box>

          {/* payment's details */}
          <Box sx={{ display: "flex", gap: 2, flexDirection: "column" }}>
            <Box>
              <Typography variant="h5">Payment's details</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                width: { xs: "100%", sm: 336 },
                borderColor: "#E2E2E2",
              }}
            >
              <Paper
                elevation={0}
                sx={{
                  padding: 2,
                  //maxWidth: 256,
                  width: "100%",
                  backgroundColor: "white",
                }}
              >
                <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
                  <Typography variant="h6"> Reference no</Typography>
                  <Typography variant="body2"> 123456</Typography>
                </Box>

                <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
                  <Typography variant="h6"> Payment method</Typography>
                  <Typography variant="body2"> Cash On Delivery</Typography>
                </Box>

                <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
                  <Typography variant="h6"> Amount</Typography>
                  <Typography variant="body2"> 340 Rs</Typography>
                </Box>

                <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
                  <Typography variant="h6"> Date</Typography>
                  <Typography variant="body2"> 10/3/2023</Typography>
                </Box>
              </Paper>
            </Box>
          </Box>

          {/* patient details, problem */}
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: { xs: 2, sm: 4 },
          }}
        >
          {/* paitent details */}
          <Box sx={{ display: "flex", gap: 2, flexDirection: "column" }}>
            <Box>
              <Typography variant="h5">Paitent details</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                width: { xs: "100%", sm: 336 },
                borderColor: "#E2E2E2",
              }}
            >
              <Paper
                elevation={0}
                sx={{
                  padding: 2,
                  //maxWidth: 256,
                  width: "100%",
                  backgroundColor: "white",
                }}
              >
                <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
                  <Typography variant="h6"> Name</Typography>
                  <Typography variant="body2"> Saikat Chattaraj</Typography>
                </Box>

                <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
                  <Typography variant="h6"> Age</Typography>
                  <Typography variant="body2"> 23</Typography>
                </Box>

                <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
                  <Typography variant="h6"> Gender</Typography>
                  <Typography variant="body2"> Male</Typography>
                </Box>
              </Paper>
            </Box>
          </Box>

          {/* problem */}
          <Box sx={{ display: "flex", gap: 2, flexDirection: "column" }}>
            <Box>
              <Typography variant="h5">Problem</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                width: { xs: "100%", sm: 336 },
                borderColor: "#E2E2E2",
              }}
            >
              <Paper
                elevation={0}
                sx={{
                  padding: 2,
                  //maxWidth: 256,
                  width: "100%",
                  backgroundColor: "white",
                }}
              >
                <Typography variant="body2">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters,
                </Typography>
              </Paper>
            </Box>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};
