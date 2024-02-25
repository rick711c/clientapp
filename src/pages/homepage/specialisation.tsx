import { Box, Paper, ThemeProvider, Typography } from "@mui/material";
import React from "react";
import theme from "../../theme/theme";
import { AngioplastyIcon } from "../../assets/icons/angioplastyicon";
import { BypassIcon } from "../../assets/icons/bypassicon";
import { CardiologyIcon } from "../../assets/icons/cardiologyicon";
import { ElectrophysologyIcon } from "../../assets/icons/electrophysologyicon";
import { RestenosisIcon } from "../../assets/icons/restenosis";

const icons = [
  <AngioplastyIcon />,
  <BypassIcon />,
  <CardiologyIcon />,
  <RestenosisIcon />,
  <ElectrophysologyIcon />,
 
];

const texts = [
  "Angioplasty",
  "Bypass",
  "Cardiology",
  "Restenosis",
  "Electrophysology",
  
];

export const Specialisation = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: "flex",
          width: {
            xs: "100%",
            sm: 336,
          },
        }}
      >
        <Paper
          elevation={3}
          sx={{
            padding: 2,
            //maxWidth: 256,
            width: "100%",
           backgroundColor:'white'
          }}
        >
          <Box
            display={"flex"}
            justifyContent={"flex-start"}
            gap={2}
            flexWrap={"wrap"}
          >
            {icons.map((currvlue, index) => (
              <Box
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
                justifyItems={"center"}
                alignItems={"center"}
                padding={1}
              >
                {currvlue}
                <Typography variant="body2">{texts[index]}</Typography>
              </Box>
            ))}
          </Box>
        </Paper>
      </Box>
    </ThemeProvider>
  );
};
