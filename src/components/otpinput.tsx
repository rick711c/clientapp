import { Box, Grid, TextField } from "@mui/material";
import React, { ChangeEvent, useState } from "react";

export const OTPInput = (props: any) => {

  let otpString = ''
  const { otp, setOtp } = props;
  const handleChange = (index: number, value: string) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    otpString = newOtp.join(''); // Concatenate all values into a single string
    setOtp(otpString);
  };

  return (
    <Box display={"flex"} flexDirection={"row"} gap={2}>
      {[0, 1, 2, 3].map((index) => (
        <TextField
          variant="outlined"
          inputProps={{ inputMode: "numeric", pattern: "[0-9]*", maxLength: 1 }}
          value={otp[index]}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            handleChange(index, e.target.value)
          }
          autoFocus={index === 0} // Autofocus on the first input
          style={{ width: "50px", height: "50px", textAlign: "center" }}
        />
      ))}
    </Box>
  );
};
