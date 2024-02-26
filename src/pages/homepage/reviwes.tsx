import { ThemeProvider } from "@emotion/react";
import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import theme from "../../theme/theme";

export const Reviwes = () => {
  const reviewerName = [
    "Saikat Chattaraj",
    "Soumyajit Pal",
    "Sayan Dey",
    "Jhon Doe",
  ];
  const rating = ["4", "5", "5", "4"];
  const reviews = [
    `Lorem Ipsum is simply dummy
        text of the printing and typesetting
        industry.`,
    `Lorem Ipsum is simply dummy
        text of the printing and typesetting
        industry.`,
    `Lorem Ipsum is simply dummy
        text of the printing and typesetting
        industry.`,
    `Lorem Ipsum is simply dummy
        text of the printing and typesetting
        industry.`,
  ];
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: "inline-flex",
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
            backgroundColor: "white",
          }}
        >
          <Box
            display={"flex"}
            justifyContent={"flex-start"}
            gap={2}
            flexWrap={"wrap"}
          >
            {reviewerName.map((currvlue, index) => (
              <Box
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                padding={1}
              >
                {/* reviewr's name and rating */}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    width: "100%",
                    gap: 4,
                  }}
                >
                  <Typography variant="h5">{currvlue}</Typography>
                  <Box sx={{ display: "flex", flexDirection: "row" }}>
                    <Typography variant="body2">{rating[index]}</Typography>
                    <Typography variant="body2">/ 5</Typography>
                  </Box>
                </Box>
                <Typography variant="body2"> {reviews[index]} </Typography>
              </Box>
            ))}
          </Box>
        </Paper>
      </Box>
    </ThemeProvider>
  );
};
