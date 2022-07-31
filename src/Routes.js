import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Country from "./pages/Country";

export default function AppRoutes() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/country/:countryCode" element={< Country/>} />
    </Routes>
  );
}
