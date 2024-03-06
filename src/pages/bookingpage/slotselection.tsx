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
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux";
import {
  addAppoinmentInListRequested,
  addAppoinmentInListSuccess,
  dateSlotRequested,
  timeSlotRequested,
  updateAppoinmentForm,
} from "../../redux/silces/userdata.slice";
import { on } from "stream";

interface TimePickerProps {
  onClickHandler: () => void;
}
export const SelectDate: React.FC<TimePickerProps> = ({ onClickHandler }) => {
  const dispatch = useDispatch();
  const dateSlots = useSelector(
    (state: RootState) => state.userdata.dateSlots.data
  );
  const handleButtonClick = () => {
    dispatch(updateAppoinmentForm({ appoinmentTime: selectedDate }));
    dispatch(dateSlotRequested());
    onClickHandler();
  };
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
  const [selectedDate, setselectedDate] = useState<string>("");
  const [chipStates, setChipStates] = useState<
    Array<{
      key: string;
      label: string;
      variant: "outlined" | "filled";
      color: "primary" | "secondary";
    }>
  >(
    dateSlots.map((date) => ({
      key: date.id,
      label: date.value,
      variant: "outlined",
      color: "secondary",
    }))
  );

  const handleChipClick = (index: number, item: any) => {
    setselectedDate(item?.label);
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
      <Paper sx={{ padding: 2, display: "flex", maxWidth: 336, width: "100%" }}>
        <Grid container spacing={2}>
          {chipStates.map((chipState, index) => (
            <Grid key={index} item xs={4} sm={4}>
              <Chip
                label={chipState.label}
                variant={chipState.variant}
                color={chipState.color}
                onClick={() => handleChipClick(index, chipState)}
              />
            </Grid>
          ))}
        </Grid>
      </Paper>
      <Fab
        variant="extended"
        color="primary"
        onClick={handleButtonClick}
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
  const timeSlots = useSelector(
    (state: RootState) => state.userdata.timeSlots.data
  );
  const dispatch = useDispatch();
  const buttonClick = () => {
    onClickHandler();
    dispatch(updateAppoinmentForm({ appoinmentDate: selectedSlot }));
    dispatch(addAppoinmentInListRequested());
  };

  const [chipStates, setChipStates] = useState<
    Array<{
      key: string | number;
      label: string;
      variant: "outlined" | "filled";
      color: "primary" | "secondary";
    }>
  >(
    timeSlots.map((timeslots) => ({
      key: timeslots.id,
      label: timeslots.value,
      variant: "outlined",
      color: "secondary",
    }))
  );
  const [selectedSlot, setSelectedSlot] = useState<string>("");

  const handleChipClick = (index: number, item: any) => {
    setSelectedSlot(item.label);
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
      <Paper sx={{ padding: 2, display: "flex", maxWidth: 336, width: "100%" }}>
        <Grid container spacing={2}>
          {chipStates.map((chipState, index: number) => (
            <Grid key={index} item xs={6} sm={6}>
              <Chip
                label={chipState.label}
                variant={chipState.variant}
                color={chipState.color}
                onClick={() => handleChipClick(index, chipState)}
              />{" "}
            </Grid>
          ))}
        </Grid>
      </Paper>
      <Fab
        variant="extended"
        color="primary"
        style={{ width: "200px" }}
        onClick={buttonClick}
      >
        Continue
      </Fab>
    </Box>
  );
};
