import { Container, ThemeProvider } from "@mui/material";
import React, { useState } from "react";
import theme from "../../theme/theme";
import { BokkingForm } from "./bokkingform";
import { SelectDate, SelectTime } from "./slotselection";

export const Bookingpage = () => {
  const [activeBox, setActiveBox] = useState<number>(1);

  const handleNext = () => {
    setActiveBox((prevBox) => (prevBox % 3) + 1);
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
          // border:1,
          marginTop: 4,
          marginBottom: 4,
          padding:2
        }}
      >
        {activeBox === 1 && <BokkingForm onclick={handleNext} />}
        {activeBox === 2 && <Container > <SelectDate onClickHandler={handleNext}/> </Container>}
        {activeBox === 3 && <SelectTime onClickHandler={handleNext}/>}
      </Container>
    </ThemeProvider>
  );
};
