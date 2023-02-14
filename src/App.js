import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./Pages/Home";
import Abouts from "./Pages/Abouts";
import Service from "./Pages/Service";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<Home />} />
        <Route path={`/Abouts`} element={<Abouts />} />
        <Route path={`/Service`} element={<Service />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
