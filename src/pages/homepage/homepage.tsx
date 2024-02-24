import { useNavigate } from "react-router-dom";
import ResponsiveAppBar from "../../components/appbar";
import { UpcomingAppoinments } from "./upcomingappointments.card";
import { Box, Container, ThemeProvider, Typography } from "@mui/material";
import { Margin } from "@mui/icons-material";
import theme from "../../theme/theme";

const Homepage = () => {
  const navigate = useNavigate();
  return (
    <ThemeProvider theme={theme}>
      <ResponsiveAppBar></ResponsiveAppBar>
      <Container
        sx={{
          padding: 2,
          border: 2,
          borderColor: "red",
          boxSizing: "border-box",
          height: "100%",
          width: "100%",
        }}
      >
        <Box display={'flex'} gap={2} flexDirection={'column'}>
          <Typography variant="h3">Upcoming Appointments</Typography>
          <UpcomingAppoinments />
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Homepage;
