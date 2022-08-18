import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from './Components/pages/Home';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import SignUp from "./Components/pages/SignUp";
import WebsiteServices from "./Components/pages/WebsiteSevices";
import LogoPage from "./Components/pages/LogoPage";
import PhotoEditingPage from "./Components/pages/PhotoEditingPage";
import StationaryPage from "./Components/pages/StationaryPage";

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

export default App;