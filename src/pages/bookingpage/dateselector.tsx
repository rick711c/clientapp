import { Box, Typography, Paper, Grid, Chip, Fab } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux";
import { updateAppointmentForm, timeSlotRequested } from "../../redux/silces/userdata.slice";
import { useNavigate } from "react-router-dom";

// date selector
interface DatePickerProps {
    onClickHandler: () => void;
  }
  export const SelectDate: React.FC = () => {
    const dispatch = useDispatch();
    const dateSlots = useSelector(
      (state: RootState) => state.userdata.dateSlots.data
    );
    const navigate = useNavigate();
    const handleButtonClick = () => {
      dispatch(updateAppointmentForm({ appointmentDate: selectedDate }));
      dispatch(timeSlotRequested());
      navigate('/booknow/selecttime')
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