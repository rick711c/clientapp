import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Homepage from "./pages/homepage";
import { Login } from "./pages/login/login";
import { OTPpage } from "./pages/login/otppage";
// import { Appointments } from "./pages/appointments";
// import { AppointmentDetails } from "./pages/appointments/appointmentDetails";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme/theme";
import { BookingForm } from "./pages/bookingpage/bokkingform";
import ResponsiveAppBar from "./components/appbar";
import { SelectDate } from "./pages/bookingpage/dateselector";
import { SelectTime } from "./pages/bookingpage/timeselector";
import { Appointments } from "./pages/appoinments";
import { AppointmentDetails } from "./pages/appoinments/appointmentDetails";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <BrowserRouter>
          <ResponsiveAppBar />
          <Routes>
            <Route path="/" index element={<Homepage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/getotp" element={<OTPpage />} />
            <Route path="/appointments" element={<Appointments />} />
            <Route
              path="/appointmentdetails"
              element={<AppointmentDetails />}
            />
            <Route path="/booknow" element={<BookingForm />} />
            <Route path="/booknow/selectedate" element={<SelectDate />} />
            <Route path="/booknow/selecttime" element={<SelectTime />} />

          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
};

export default App;
