import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Homepage from "./pages/homepage";
import { Login } from "./pages/login/login";
import { OTPpage } from "./pages/login/otppage";
import { Appointments } from "./pages/appoinments";
import { AppointmentDetails } from "./pages/appoinments/appointmentDetails";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/getotp" element={<OTPpage />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/appointmentdetails" element={<AppointmentDetails />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
