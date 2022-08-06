import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Country from "./pages/Country";
import NotFound from "./pages/NotFound";

export default function AppRoutes() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/country/:countryCode" element={< Country/>} />
      <Route path="*" element={<NotFound/>} />
    </Routes>
  );
}
