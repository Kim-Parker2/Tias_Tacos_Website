import React from "react";
import '../App.css';
import { Button } from "./Button";
import './MainPage.css';


function MainPage() {
  return (
    <div className='mainpage-container'>
      <video src='/videos/Tia.mp4' autoPlay  />
      <h1>WELCOME TO TIA'S TACOS</h1>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <img src="/images/undercontraction.png" alt="" width="960" height="330"/>
    
  
   
    </div>
  );
}

export default MainPage;