import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Homi  from "./pages/Homi"; // Corrected import path for Home component
import Resources from "./pages/Resources"; // Corrected import path for About component
import {Mentees} from "./pages/Mentees";
import {Registration} from "./pages/Registration";
import {Contact} from "./pages/Contact";
import { Login } from "./pages/Login";
import  Logout from "./pages/Logout";
import Navbar from './Components/Navbar';
import { Error } from "./pages/Error";
import MachineLearning from './pages/MachineLearning';
import Footer from "./Components/footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Homi />} />
        <Route path="/Resources" element={<Resources />} />
        <Route path="/Mentees" element={<Mentees />} />
        <Route path="/Registration" element={<Registration />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Logout" element={<Logout />} />
        <Route path="MachineLearning" element={<MachineLearning />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
