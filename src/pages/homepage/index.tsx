import { useNavigate } from "react-router-dom";
import ResponsiveAppBar from "../../components/appbar";
import { UpcomingAppoinments } from "../../components/upcomingappointments.card";
import { Box, Container, Fab, ThemeProvider, Typography } from "@mui/material";
import { Margin } from "@mui/icons-material";
import theme from "../../theme/theme";
import { Specialisation } from "./specialisation";
import { DoctorQuote } from "./doctor's_quote";
import { Reviwes } from "./reviwes";
import AddIcon from "@mui/icons-material/Add";
import { elevation } from "../../theme/styleconstant";

const routePaths = [
  "/",
  "/login",
  "/getotp",
  "/appointments",
  "/appointmentdetails",
  "/booknow",
];

const Homepage = () => {
  const navigate = useNavigate();

  return (
    <ThemeProvider theme={theme}>
      <Box>{/* <ResponsiveAppBar></ResponsiveAppBar> */}</Box>
      <Container
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          padding: { xs: 2, sm: 4 },
          // border: 2,
          // borderColor: "red",
          margin: 0,
          height: { xs: "100%", sm: "100vh" },
          width: "100%",
          justifyContent: "space-between",
          gap: { xs: 4 },
          position: "relative",
          minHeight: "100vh",
          backgroundColor: theme.palette.background.default,
        }}
        maxWidth={false}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: { xs: 4, sm: 8 },
          }}
        >
          <Box
            display={"flex"}
            gap={2}
            flexDirection={"column"}
            onClick={() => {
              navigate(routePaths[4]);
            }}
          >
            <Typography variant="h3">Upcoming Appointments</Typography>
            <UpcomingAppoinments
              iconflag={true}
              patientnameflag={false}
              elevation={elevation}
              bottomborderflag={false}
            />
          </Box>

          <Box display={"flex"} gap={2} flexDirection={"column"}>
            <Typography variant="h3">Specialisation</Typography>
            <Specialisation />
          </Box>
        </Box>

        <Box display={"flex"} gap={2} flexDirection={"column"}>
          <Typography variant="h3">What People are saying</Typography>
          <Reviwes />
        </Box>

        {/* floating action button */}
        <div style={{ position: "fixed", bottom: "10%", right: "10%" }}>
          <Fab
            variant="extended"
            color="secondary"
            onClick={() => {
              navigate(routePaths[5]);
            }}
          >
            <AddIcon sx={{ mr: 1 }} />
            Book Now
          </Fab>
        </div>
      </Container>
    </ThemeProvider>
  );
};

export default Homepage;
