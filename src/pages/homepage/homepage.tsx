import { useNavigate } from "react-router-dom";
import ResponsiveAppBar from "../../components/appbar";
import { UpcomingAppoinments } from "./upcomingappointments.card";
import { Box, Container, ThemeProvider, Typography } from "@mui/material";
import { Margin } from "@mui/icons-material";
import theme from "../../theme/theme";
import { Specialisation } from "./specialisation";

const Homepage = () => {
  const navigate = useNavigate();
  
  return (
    <ThemeProvider theme={theme}>
      <Box>
      <ResponsiveAppBar></ResponsiveAppBar>
      </Box>
      
      <Container
        sx={{
          padding: {xs:2, sm:4},
          border: 2,
          borderColor: "red",
        //   boxSizing: "border-box",
          margin:0,
          height: "100vh",
          width: "100%",
          
          backgroundColor:theme.palette.background.default
        }}
        maxWidth={false}
      >
        <Box display={'flex'} flexDirection={'column'} gap={8}>
        <Box display={'flex'} gap={2} flexDirection={'column'}>
          <Typography variant="h3">Upcoming Appointments</Typography>
          <UpcomingAppoinments />
        </Box>

        <Box display={'flex'} gap={2} flexDirection={'column'}>
          <Typography variant="h3">Specialisation</Typography>
          < Specialisation/>
        </Box>

        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Homepage;
