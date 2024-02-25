import { Box, Typography } from '@mui/material'
import React from 'react'
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";

export const BookingDateTimeAddress = () => {
  return (
    <Box>
    {/* date and time */}
    <Box
      display={"flex"}
      justifyContent={"flex-start"}
      alignItems={"center"}
      gap={2}
      marginBottom={2}
    >
      {/* date icon */}
      <Box display={"flex"} alignItems={"center"} gap={1}>
        <CalendarTodayOutlinedIcon />
        <Typography variant="body2">17/2/23</Typography>
      </Box>

      {/* timeicon */}
      <Box display={"flex"} alignItems={"center"} gap={1}>
        <AccessTimeOutlinedIcon />
        <Typography variant="body2">09:30 AM</Typography>
      </Box>
    </Box>

    {/* clinic address */}
    <Box display={"flex"} justifyContent={"flex-start"} gap={2}>
      <PlaceOutlinedIcon />
      <Typography variant="body2">Uttarpara, kolkata</Typography>
    </Box>
    </Box>
  )
}
