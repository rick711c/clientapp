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
import React from "react";
import theme from "../../theme/theme";

export const SlotSelection = () => {
  const timeslots = [
    "09:00am - 10:30am",
    "09:30am - 10:30am",
    "10:30am - 10:30am",
    "10:30am - 10:30am",
    "11:00am - 10:30am",
    "11:30am - 10:30am",
    "11:30am - 10:30am",
  ];
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

  return (
    <ThemeProvider theme={theme}>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: { xs: 2, sm: 4 },
          border: 2,
          borderColor: "red",
          margin: 0,
          height: "100vh",
          width: "100%",
          //justifyContent: "space-between",
          alignItems: "center",
          gap: 4,

          backgroundColor: theme.palette.background.default,
        }}
        maxWidth={false}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            border: 1,
            gap: 2,
          }}
        >
          <Typography variant="h6">Select Date</Typography>
          <Paper sx={{ padding: 2, display: "flex", width: 336 }}>
            <Grid container spacing={2}>
              {dates.map((currvale, index: number) => (
                <Grid key={index} item xs={4} sm={4}>
                  <Chip label={dates[index]} variant="outlined" />
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Box>

        <Typography variant="h6">Select Time Slot</Typography>
        <Paper sx={{ padding: 2, display: "flex", width: 336 }}>
          <Grid container spacing={2}>
            {timeslots.map((currvale, index: number) => (
              <Grid key={index} item xs={6} sm={6}>
                <Chip label={timeslots[index]} variant="outlined" />
              </Grid>
            ))}
          </Grid>
        </Paper>

        <Fab
          variant="extended"
          color="secondary"
          onClick={() => {}}
          style={{ width: "200px" }}
        >
          Continue
        </Fab>
      </Container>
    </ThemeProvider>
  );
};


interface TimePickerProps {
    onClickHandler: () => boolean;
  }
export const SelectDate:React.FC<TimePickerProps> = ({onClickHandler}) => {
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
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        border: 1,
        gap: 2,
      }}
    >
      <Typography variant="h6">Select Date</Typography>
      <Paper sx={{ padding: 2, display: "flex", width: 336 }}>
        <Grid container spacing={2}>
          {dates.map((currvale, index: number) => (
            <Grid key={index} item xs={4} sm={4}>
              <Chip label={dates[index]} variant="outlined" onClick={onClickHandler}/>
            </Grid>
          ))}
        </Grid>
      </Paper>
      <Fab
        variant="extended"
        color="primary"
        onClick={() => {}}
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
export const SelectTime :React.FC<DatePickerProps>= ({onClickHandler}) => {
  const timeslots = [
    "09:00am - 10:30am",
    "09:30am - 10:30am",
    "10:30am - 10:30am",
    "10:30am - 10:30am",
    "11:00am - 10:30am",
    "11:30am - 10:30am",
    "11:30am - 10:30am",
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        border: 1,
        gap: 2,
      }}
    >
      <Typography variant="h6">Select Time Slot</Typography>
      <Paper sx={{ padding: 2, display: "flex", width: 336 }}>
        <Grid container spacing={2}>
          {timeslots.map((currvale, index: number) => (
            <Grid key={index} item xs={6} sm={6}>
              <Chip  label={timeslots[index]} variant="outlined"  onClick={onClickHandler}/>
            </Grid>
          ))}
        </Grid>
      </Paper>
      <Fab
        variant="extended"
        color="primary"
        onClick={() => {}}
        style={{ width: "200px" }}
      >
        Continue
      </Fab>
    </Box>
  );
};
