import { Box, Typography } from '@mui/material'
import React from 'react'
import { DoctorSVGIcon } from '../assets/icons/doctor-svg-icon'

export const DoctorsdetailsCard = () => {
  return (
    <Box
            display={"flex"}
            flexDirection={"row"}
            alignItems={"center"}
            marginBottom={2}
            gap={1}
          >
            {/* doctor icon */}
            <Box sx={{ height: 61, width: 46 }}>
              <DoctorSVGIcon />
            </Box>

            {/* doctor info text */}
            <Box>
              <Typography variant="h5">Dr. Jishnu Bhattaraya</Typography>

              <Typography variant="body2">
                Neurologist | NRS, Kolkata
              </Typography>
            </Box>
          </Box>
  )
}