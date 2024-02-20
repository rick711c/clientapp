import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Homepage from "./pages/homepage/homepage";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/homepage" element={<Homepage />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
