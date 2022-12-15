import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home";
import Login from "./Login";
import Logout from "./Logout";
import Signup from "./Signup";
import List from "./List";

import "./App.css";
import PBT from "./CK87-PBT";
import SL from "./CK01-TKL-PBT-SL";
import TKL from "./CX87-TKL";
import CY from "./CY104";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/list" element={<List />} />
        <Route path="/CK87-PBT" element={<PBT />} />
        <Route path="/CK01-TKL-PBT-SL" element={<SL />} />
        <Route path="/CX87-TKL" element={<TKL />} />
        <Route path="/CY104" element={<CY />} />
      </Routes>
    </BrowserRouter>
  );
}
