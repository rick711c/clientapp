import {
  Grid,
  Box,
  Container,
  Paper,
  ThemeProvider,
  Chip,
  Typography,
  Fab,
} from "@mui/material";
import React, { useState } from "react";
import theme from "../../theme/theme";

interface TimePickerProps {
  onClickHandler: () => void;
}
export const SelectDate: React.FC<TimePickerProps> = ({ onClickHandler }) => {
  const dates = [
    "8th June",
    "10th July",
    "11th Aug",
    "20th Sept",
    "21st Oct",
    "22th Sept",
    "23th Oct",
    "24th Oct",
  ];

  const [chipStates, setChipStates] = useState<
    Array<{
      label: string;
      variant: "outlined" | "filled";
      color: "primary" | "secondary";
    }>
  >(
    dates.map((date) => ({
      label: date,
      variant: "outlined",
      color: "secondary",
    }))
  );

  const handleChipClick = (index: number) => {
    setChipStates((prevChipStates) =>
      prevChipStates.map((chipState, i) =>
        i === index
          ? { ...chipState, variant: "filled", color: "primary" }
          : { ...chipState, variant: "outlined", color: "secondary" }
      )
    );
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        // border: 1,
        gap: 2,
      }}
    >
      <Typography variant="h6">Select Date</Typography>
      <Paper sx={{ padding: 2, display: "flex", maxWidth: 336 , width:"100%"}}>
        <Grid container spacing={2}>
          {chipStates.map((chipState, index) => (
            <Grid key={index} item xs={4} sm={4}>
              <Chip
                label={chipState.label}
                variant={chipState.variant}
                color={chipState.color}
                onClick={() => handleChipClick(index)}
              />
            </Grid>
          ))}
        </Grid>
      </Paper>
      <Fab
        variant="extended"
        color="primary"
        onClick={onClickHandler}
        style={{ width: "200px" }}
      >
        Continue
      </Fab>
    </Box>
  );
};

interface DatePickerProps {
  onClickHandler: () => void;
}
export const SelectTime: React.FC<DatePickerProps> = ({ onClickHandler }) => {
  const timeslots = [
    "09:00am - 10:30am",
    "09:30am - 10:30am",
    "10:30am - 10:30am",
    "10:30am - 10:30am",
    "11:00am - 10:30am",
    "11:30am - 10:30am",
    "11:30am - 10:30am",
  ];

  const [chipStates, setChipStates] = useState<
    Array<{
      label: string;
      variant: "outlined" | "filled";
      color: "primary" | "secondary";
    }>
  >(
    timeslots.map((timeslots) => ({
      label: timeslots,
      variant: "outlined",
      color: "secondary",
    }))
  );

  const handleChipClick = (index: number) => {
    setChipStates((prevChipStates) =>
      prevChipStates.map((chipState, i) =>
        i === index
          ? { ...chipState, variant: "filled", color: "primary" }
          : { ...chipState, variant: "outlined", color: "secondary" }
      )
    );
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        // border: 1,
        gap: 2,
      }}
    >
      <Typography variant="h6">Select Time Slot</Typography>
      <Paper sx={{ padding: 2, display: "flex", maxWidth: 336 , width:"100%"}}>
        <Grid container spacing={2}>
          {chipStates.map((chipState, index: number) => (
            <Grid key={index} item xs={6} sm={6}>
              <Chip
                label={chipState.label}
                variant={chipState.variant}
                color={chipState.color}
                onClick={() => handleChipClick(index)}
              />{" "}
            </Grid>
          ))}
        </Grid>
      </Paper>
      <Fab
        variant="extended"
        color="primary"
        style={{ width: "200px" }}
        onClick={onClickHandler}
      >
        Continue
      </Fab>
    </Box>
  );
};
