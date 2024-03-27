import {
  Box,
  Container,
  Fab,
  Paper,
  TextField,
  ThemeProvider,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useState } from "react";
import theme from "../../theme/theme";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch, useSelector } from "react-redux";
import {
  dateSlotRequested,
  timeSlotRequested,
  updateAppointmentForm,
} from "../../redux/silces/userdata.slice";
import { RootState } from "../../redux";
import { useNavigate } from "react-router-dom";

// interface BookingFormProps {
//   onclick: () => void;
// }

export const BookingForm: React.FC = () => {
  const dispatch = useDispatch();
  const loading = useSelector(
    (state: RootState) => state.userdata.timeSlots.loading
  );
  const isSmallScreen = useMediaQuery(theme.breakpoints.only("xs"));
  const [showForm, setShowForm] = useState(true);
  const [showDatepicker, setShowDatepicker] = useState(false);
  const [showTimepicker, setShowTimepicker] = useState(false);

  const [appointmentForm, setappointmentForm] = useState<any>({});
  const navigator = useNavigate();
  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setappointmentForm({ ...appointmentForm, [name]: value });
  };

  const handleButtonClick = () => {
    dispatch(updateAppointmentForm(appointmentForm));
    dispatch(dateSlotRequested());

    navigator("/booknow/selectedate");
  };

  return (
    <ThemeProvider theme={theme}>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: { sm: 416, xs: "100%" },
          gap: 4,
          //border:1,
          marginTop: 4,
          marginBottom: 4,
        }}
      >
        {/* booking form */}
        <Paper
          elevation={isSmallScreen ? 0 : 3}
          sx={{ display: { sm: "inline-block", xs: "flex" } }}
        >
          <Container
            sx={{
              display: "flex",
              width: { sm: 416, xs: "100%" },
              //height: { xs: "100vh" },
              justifyContent: { sm: "center", xs: "flex-start" },
              padding: { sm: 4, xs: 2 },
              flexDirection: "column",
              gap: 4,
              // border: 1,
              elevation: 2,
              //backgroundColor:theme.palette.background.default
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Typography variant="h5">Book Appoiment</Typography>
            </Box>
            <TextField
              required
              id="outlined-required"
              label="Name"
              inputProps={{ inputMode: "text" }}
              name="patientName"
              onChange={handleChange}
            />

            <TextField
              required
              id="outlined-required"
              label="Age"
              inputProps={{ inputMode: "text" }}
              name="age"
              onChange={handleChange}
            />

            <TextField
              required
              id="outlined-required"
              label="Gender"
              inputProps={{ inputMode: "text" }}
              name="gender"
              onChange={handleChange}
            />
            <TextField
              required
              id="outlined-required"
              label="Phone number"
              inputProps={{ inputMode: "numeric" }}
              name="patientPhone"
              onChange={handleChange}
            />

            {/* problem */}
            <Box
              sx={{
                display: "flex",
                gap: 2,
                flexDirection: "column",
                width: "100%",
                //   border: 1,
              }}
            >
              <Box>
                <Typography variant="h6">Describe Problem</Typography>
              </Box>

              <Paper
                elevation={0}
                sx={{
                  padding: 2,
                  //maxWidth: 256,
                  maxWidth: "100%",
                  backgroundColor: "white",
                  border: 1,
                  borderColor: "#E2E2E2",
                }}
              >
                <TextField
                  name="problem"
                  placeholder="Describe your problem briefly"
                  multiline
                  onChange={handleChange}
                  fullWidth
                ></TextField>
              </Paper>
            </Box>
          </Container>
        </Paper>

        {/* next button */}
        <Fab
          variant="extended"
          color="secondary"
          onClick={handleButtonClick}
          style={{ width: "200px" }}
          // disabled={loading}
        >
          Continue
        </Fab>

        {/* <SelectDate onClickHandler={setShowDatepicker}/>

        <SelectTime onClickHandler={setShowTimepicker}/> */}
      </Container>
    </ThemeProvider>
  );
};
