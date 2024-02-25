import { Box, Typography } from "@mui/material";
import React from "react";
import { DoctorSVGIcon } from "../assets/icons/doctor-svg-icon";

export const DoctorsdetailsCard: React.FC<{ flag: boolean }> = ({flag}) => {
  return (
    <Box
      display={"flex"}
      flexDirection={"row"}
      alignItems={"center"}
      gap={1}
    >
      {/* doctor icon */}
      {/* doctor icon (conditionally rendered) */}
      {flag && (
        <Box sx={{ height: 61, width: 46 }}>
          <DoctorSVGIcon />
        </Box>
      )}

      {/* doctor info text */}
      <Box>
        <Typography variant="h5">Dr. Jishnu Bhattaraya</Typography>

        <Typography variant="body2">Neurologist | NRS, Kolkata</Typography>
      </Box>
    </Box>
  );
};
