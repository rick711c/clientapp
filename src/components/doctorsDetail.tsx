import { Box, Typography } from "@mui/material";
import React from "react";
import { DoctorSVGIcon } from "../assets/icons/doctor-svg-icon";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export const DoctorsdetailsCard: React.FC<{ flag: boolean }> = ({ flag }) => {
  return (
    <Box display={"flex"} flexDirection={"row"} alignItems={"center"} gap={1}>
      {/* doctor icon */}
      {/* doctor icon (conditionally rendered) */}
      {flag && (
        <Box sx={{ height: 61, width: 46 }}>
          <DoctorSVGIcon />
        </Box>
      )}

      {/* doctor info text and threedots icon */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          // border: 1,
          maxWidth: "100%",
          width: "100%",
        }}
      >
        <Box>
          <Typography variant="h5">Dr. Jishnu Bhattaraya</Typography>

          <Typography variant="body2">Neurologist | NRS, Kolkata</Typography>
        </Box>

        {/* thredots icon */}
        {!flag && <MoreVertIcon />}
      </Box>
    </Box>
  );
};
