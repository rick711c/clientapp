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

export const UpcomingAppoinments = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex", width: { xs: "100%", sm: 272 } }}>
        <Paper
          elevation={3}
          sx={{
            padding: 2,
            //maxWidth: 256,
            width: "100%",
          }}
        >
          {/* doctor's details frame */}
          <Box
            display={"flex"}
            flexDirection={"row"}
            alignItems={"center"}
            marginBottom={2}
            gap={1}
          >
            {/* doctor icon */}
            <Box sx={{ height: 61, width: 46 }}>
              <DoctorSVGIcon />
            </Box>

            {/* doctor info text */}
            <Box>
              <Typography variant="h5">Dr. Jishnu Bhattaraya</Typography>

              <Typography variant="body2">
                Neurologist | NRS, Kolkata
              </Typography>
            </Box>
          </Box>

          {/* date and time */}
          <Box
            display={"flex"}
            justifyContent={"flex-start"}
            alignItems={"center"}
            gap={2}
            marginBottom={2}
          >
            {/* date icon */}
            <Box display={"flex"} alignItems={"center"} gap={1}>
              <CalendarTodayOutlinedIcon />
              <Typography variant="body2">17/2/23</Typography>
            </Box>

            {/* timeicon */}
            <Box display={"flex"} alignItems={"center"} gap={1}>
              <AccessTimeOutlinedIcon />
              <Typography variant="body2">09:30 AM</Typography>
            </Box>
          </Box>

          {/* clinic address */}
          <Box display={"flex"} justifyContent={"flex-start"} gap={2}>
            <PlaceOutlinedIcon />
            <Typography variant="body2">Uttarpara, kolkata</Typography>
          </Box>
        </Paper>
      </Box>
    </ThemeProvider>
  );
};
