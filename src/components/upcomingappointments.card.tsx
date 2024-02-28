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
import theme from "../theme/theme";
import { DoctorSVGIcon } from "../assets/icons/doctor-svg-icon";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import { DoctorsdetailsCard } from "./doctorsDetail";

interface Props {
  iconflag: boolean;
  patientnameflag: boolean;
  elevation: number;
  bottomborderflag: boolean;
}

export const UpcomingAppoinments: React.FC<Props> = ({
  iconflag,
  patientnameflag,
  elevation,
  bottomborderflag,
}) => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: "flex",
          width: { xs: "100%", sm: 344 },
          // maxWidth:{sm:344},
          borderBottom: bottomborderflag ? 1 : 0,
          borderColor: "#E2E2E2",
        }}
      >
        <Paper
          elevation={elevation}
          sx={{
            transition: "box-shadow 0.3s ease-in-out",
            "&:hover": {
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)", // Adjust the shadow value as needed
            },
            padding: 2,
            //maxWidth: 256,
            width: "100%",
            backgroundColor: "white",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {/* doctor's details frame */}
            <DoctorsdetailsCard flag={iconflag} />

            {/* paitent details */}
            {patientnameflag && (
              <Box overflow={"hidden"} sx={{ display: "flex" }}>
                <Typography variant="body2"> Saikat Chattaraj</Typography>
              </Box>
            )}
            {/* booking date time address */}
            <Box>
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
            </Box>
          </Box>
        </Paper>
      </Box>
    </ThemeProvider>
  );
};
