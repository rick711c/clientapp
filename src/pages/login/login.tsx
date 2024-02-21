import {
  Card,
  Box,
  CardContent,
  Typography,
  IconButton,
  CardMedia,
  Grid,
  ThemeProvider,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import theme from "../../theme/theme";

export const Login = () => {
  const navigate = useNavigate();
  return (
    // <Box
    //   sx={{
    //     display: "flex",
    //     border: 2,
    //     borderColor: "green",
    //     height: 416,
    //     width: 604  ,
    //     justifyContent: 'space-around',
    //     alignItems: 'center',
    //     pl:24,
    //     pr:24,
    //     paddingTop:16,
    //     paddingBottom:16,

    //   }}
    // >
    //   <Card sx={{ display: "flex", border: 2 }}>
    //     <Box
    //      sx={{
    //         display: "flex",
    //         border: 2,
    //         borderColor: "red",
    //         height: 288,
    //         width: 255,

    //       }}
    //     >
    //       <CardMedia
    //         component="img"
    //         // height="256"
    //         // width="288"
    //         image={require("../../assets/images/male-doctor-wearing-surgical-gown-svgrepo-com 1.jpg")}
    //         alt="Paella dish"
    //       />
    //     </Box>

    //     <Box
    //     sx={{
    //         display: "flex",
    //         border: 2,
    //         borderColor: "red",
    //         height: 288,
    //         width: 255,
    //       }}
    //     >
    //       <CardContent>
    //         <Typography variant="body2" color="text.secondary">
    //           if you like.
    //         </Typography>
    //       </CardContent>
    //     </Box>
    //   </Card>
    // </Box>

    <Card sx={{ padding: "16px 24px", border: 2, height: 416, width: 604 }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
        }}
      >
        <Grid container spacing={0} justifyContent="space-between">
          {/* masked doctor image */}
          <Grid item xs={12} sm={6}>
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
          </Grid>

          <Grid item xs={12} sm={6}>
            <Box
              sx={{
                display: "flex",
                border: 2,
                borderColor: "red",
                height: 288,
                width: 255,
              }}
            >
              <ThemeProvider theme={theme}>
                <Typography variant="h2">Let's Get Started</Typography>
              </ThemeProvider>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Card>
  );
};
