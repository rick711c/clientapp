import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Homepage from "./pages/homepage/homepage";
import { Login } from "./pages/login/login";
import { OTPpage } from "./pages/login/otppage";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/getotp" element={<OTPpage />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
