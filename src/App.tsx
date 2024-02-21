import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Homepage from "./pages/homepage/homepage";
import { Login } from "./pages/login/login";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Homepage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
