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

export const Login = () => {
  const navigate = useNavigate();
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh", // Set height to fill the viewport
        }}
      >
        <Card
          sx={{
            padding: "20px",
            backgroundColor: theme.palette.background.default,
            height: { xs: "100%", sm: 416 },
            width: { xs: "100%", sm: 604 },
            justifyContent: { xs: "center", sm: "space-around" }, // Removed curly braces
            gap: { xs: 4 },
            alignItems: "center",
            display: "flex",
            flexDirection: { xs: "column", sm: "row" }, // "row" instead of "Row"
            // boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)"
          }}
        > 
          <Box
            sx={{
              display: "flex",
              border: 2,
              borderColor: "red",
              height: 288,
              width: 255,
            }}
          >
            <CardMedia
              component="img"
              image={require("../../assets/images/male-doctor-wearing-surgical-gown-svgrepo-com 1.jpg")}
              alt="Paella dish"
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column", // Display items in a column
              justifyContent: "space-evenly",
              border: 2,
              borderColor: "red",
              height: 288,
              width: 255,
            }}
          >
            {/* Text TextField, Button */}
            <Box overflow={"auto"}>
              <Typography variant="h2">Let's Get Started</Typography>
              <Typography variant="body1">
                An OTP will be sent to verify the mobile number
              </Typography>
            </Box>

            <TextField
              required
              id="outlined-required"
              label="Required"
              placeholder="Mobile No"
            />
            <Button
              variant="contained"
              style={{
                backgroundColor: theme.palette.primary.main,
                color: "white",
              }}
              size="large"
            >
              Get OTP
            </Button>
          </Box>
        </Card>
      </Box>
    </ThemeProvider>
  );
};
