
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import DashboardLayout from "./Layouts/DashboardLayout";
import Incidents from "./pages/Incidents";
import Dashboard from "./pages/Dashbourd";
import LiveMap from "./pages/LiveMap";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="incidents" element={<Incidents />} />
        <Route path="LiveMap" element={<LiveMap />} />
        </Route>

      </Routes>
      
    </BrowserRouter>
    
  );
}

export default App;
