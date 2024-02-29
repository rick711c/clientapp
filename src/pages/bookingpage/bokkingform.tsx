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
import { SelectDate, SelectTime } from "./slotselection";

interface BookingFormProps {
  onclick: () => void;
}

export const BokkingForm:React.FC<BookingFormProps> =  ({onclick}) => {
  const isSmallScreen = useMediaQuery(theme.breakpoints.only("xs"));
  const [showForm,setShowForm] = useState(true);
  const [showDatepicker,setShowDatepicker] =useState(false);
  const [showTimepicker,setShowTimepicker] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      {/* <Container
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
      > */}
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
            />

            <TextField
              required
              id="outlined-required"
              label="Age"
              inputProps={{ inputMode: "text" }}
            />

            <TextField
              required
              id="outlined-required"
              label="Gender"
              inputProps={{ inputMode: "text" }}
            />
            <TextField
              required
              id="outlined-required"
              label="Phone number"
              inputProps={{ inputMode: "numeric" }}
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
                <Typography variant="body2" sx={{ overflowWrap: "break-word" }}>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters,
                </Typography>
              </Paper>
            </Box>
          </Container>
        </Paper>

        {/* next button */}
        <Fab variant="extended" color="secondary" onClick={onclick} style={{ width: '200px' }}>
          Continue
        </Fab>

        {/* <SelectDate onClickHandler={setShowDatepicker}/>

        <SelectTime onClickHandler={setShowTimepicker}/> */}
      {/* </Container> */}


    </ThemeProvider>
  );
};
