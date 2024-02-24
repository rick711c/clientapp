import {
    Card,
    Box,
    CardContent,
    Typography,
    IconButton,
    CardMedia,
    Grid,
    ThemeProvider,
    TextField,
    Button,
  } from "@mui/material";
  import { useNavigate } from "react-router-dom";
  import theme from "../../theme/theme";
  import { LoginPageDoctorIcon } from "../../assets/images/male-doctor-svg";
import { MaleDoctorConsultataionIcon } from "../../assets/images/male-doctor-consultation";
import { OTPInput } from "../../components/otpinput";
  
  export const OTPpage = () => {
    const navigate = useNavigate();
    return (
      <ThemeProvider theme={theme}>
        
        <Box
          sx={{
            padding: "24px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh", // Set height to fill the viewport
          }}
        >
          <Box
            sx={{
              padding: "20px",
              backgroundColor: theme.palette.background.default,
              height: { xs: "100%", sm: 416 },
              width: { xs: "100%", sm: 604 },
              justifyContent: { xs: "flex-start", sm: "space-around" }, // Removed curly braces
              alignItems: "center",
              display: "flex",
              flexDirection: { xs: "column", sm: "row" }, // "row" instead of "Row"
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            }}
          >
            {/* masked doctor image */}
            <Box
              sx={{
                display: "flex",
  
                borderColor: "red",
                height: { sm: 288, xs: 170 },
                width: { sm: 255, xs: 156 },
              }}
            >
              <MaleDoctorConsultataionIcon />
            </Box>
  
            <Box
              sx={{
                display: "flex",
                flexDirection: "column", // Display items in a column
                justifyContent: "space-evenly",
                height: { sm: 288, xs: 260 },
                width: { sm: 255, xs: 253 },
              }}
            >
              {/* Text*/}
              <Box overflow={"auto"}>
                <Typography variant="h2">OTP Verification</Typography>
                <Typography variant="body1">
                We have sent you a verification code in your mobile no +9174*****293
                </Typography>
              </Box>
  
              {/* mobile no text field */}
              <OTPInput/>
              {/* get otp button */}
              <Button
                variant="contained"
                style={{
                  backgroundColor: theme.palette.primary.main,
                  color: "white",
                }}
                size="large"
              >
                Verify
              </Button>
            </Box>
          </Box>
        </Box>
      </ThemeProvider>
    );
  };
  