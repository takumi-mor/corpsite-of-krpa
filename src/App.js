import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./Pages/Home";
import Abouts from "./Pages/Abouts";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<Home />} />
        <Route path={`/Abouts`} element={<Abouts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
