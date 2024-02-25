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
    // <div style={{ width: "100%" }}>
    <ThemeProvider theme={theme}>
      {/* <Box>
      <ResponsiveAppBar></ResponsiveAppBar>
      </Box>
       */}
      <Container
        sx={{
          padding: {xs:2, sm:4},
          // border: 2,
          // borderColor: "red",
        //   boxSizing: "border-box",
          margin:0,
          height: "100%",
          width: "100%",
          backgroundColor:theme.palette.background.default
        }}
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
    // </div>
  );
};

export default Homepage;
