import React from "react";
import '../App.css';
import { Button } from "./Button";
import './MainPage.css';


function MainPage() {
  return (
    <div className='mainpage-container'>
      <video src='/videos/Tia.mp4.mp4' muted autoPlay  />
      <h1>WELCOME TO TIA'S TACOS</h1>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <img src="/images/under-construction.png" alt="" width="330" height="300"/>
    
  
   
    </div>
  );
}

export default MainPage;