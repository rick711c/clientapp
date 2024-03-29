import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Homepage from "./pages/homepage";
import { Login } from "./pages/login/login";
import { OTPpage } from "./pages/login/otppage";
import { Appointments } from "./pages/appoinments";
import { AppointmentDetails } from "./pages/appoinments/appointmentDetails";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme/theme";
import { BokkingForm } from "./pages/bookingpage/bokkingform";
import { Bookingpage } from "./pages/bookingpage/bookingpage";
import ResponsiveAppBar from "./components/appbar";
import { useSelector } from "react-redux";
import { RootState } from "./redux";
import Protected from "./components/protectedRoute";

const App = () => {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <BrowserRouter>
          {isAuthenticated ? <ResponsiveAppBar /> : null}
          <Routes>
            <Route
              path="/"
              index
              element={
                <Protected isAuthenticated={isAuthenticated}>
                  <Homepage />
                </Protected>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/getotp" element={<OTPpage />} />
            <Route
              path="/appointments"
              element={
                <Protected isAuthenticated={isAuthenticated}>
                  <Appointments />
                </Protected>
              }
            />
            <Route
              path="/appointmentdetails"
              element={
                <Protected isAuthenticated={isAuthenticated}>
                  <AppointmentDetails />
                </Protected>
              }
            />
            <Route
              path="/booknow"
              element={
                <Protected isAuthenticated={isAuthenticated}>
                  <Bookingpage />
                </Protected>
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
};

export default App;
