import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/homepage/homepage";

const App = () => {
  return (
    <div className="App">
      <Route>
        <Route index path="/" element={<Homepage />} />
      </Route>
    </div>
  );
};

export default App;
