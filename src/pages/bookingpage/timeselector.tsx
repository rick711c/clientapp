import { Box, Typography, Paper, Grid, Chip, Fab } from "@mui/material";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux";
import { updateAppoinmentForm, addAppoinmentInListRequested } from "../../redux/silces/userdata.slice";

interface TimePickerProps {
    onClickHandler: () => void;
  }
  export const SelectTime: React.FC= () => {
    const timeSlots = useSelector(
      (state: RootState) => state.userdata.timeSlots.data
    );
    const dispatch = useDispatch();
    const buttonClick = () => {
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
  