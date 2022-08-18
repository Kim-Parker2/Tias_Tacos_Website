import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import SignUp from "./components/pages/SignUp";
import WebsiteServices from "./components/pages/WebsiteServices";
import LogoPage from "./components/pages/LogoPage";
import PhotoEditingPage from "./components/pages/PhotoEditingPage";
import StationaryPage from "./components/pages/StationaryPage";

function App() {
  return (
    <>
      <Router>
      {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/WebsiteServices' element={<WebsiteServices />} />
          <Route path='/LogoPage' element={<LogoPage />} />
          <Route path='/PhotoEditingPage' element={<PhotoEditingPage />} />
          <Route path='/StationaryPage' element={<StationaryPage />} />
          <Route path='/sign-up' element={<SignUp />} />
        </Routes>
      </Router>
    </>
  );
}
