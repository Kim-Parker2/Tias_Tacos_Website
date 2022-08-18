import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Services We Offer</h1>
      <br></br>
      <br></br>
      <div className="cards__container">
        <div className="cards_wrapper">
          <ul className="cards__items">
          <CardItem
              src='images/WebsiteCover.png'
              text='Wanting a website for your business? We offer a range of website services.'
              label='Website Services'
              path='/WebsiteServices'
            />
          <CardItem
              src='images/The Munchie Box Final Logo.jpg'
              text='No matter how big or small your business is we can help your business stand out from the rest with an eye catching logo.'
              label='Logos'
              path='/LogoPage'
            />
            <CardItem
              src='images/Whio Duck Print.jpg'
              text='Have a old photo that needs work done on? Or do you need the background taken off your photo? We can help with a range of options when it comes to photo editing.'
              label='Photo Editing'
              path='/PhotoEditingPage'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/Abstract Mountains Colours - A3 Print.jpg'
              text='We have a range of prints in various to choose from.'
              label='Prints'
              path='/StationaryPage'
            />
            <CardItem
              src='images/StationaryCover.jpg'
              text='Does your company need a business card? What about invoice forms or brochures? We can help with all your stationary needs.'
              label='Stationary'
              path='/StationaryPage'
            />
              <CardItem
              src='images/InvitationCover.png'
              text='Getting married? Have a big birthday to celebrate? We can help with all your invitation needs.'
              label='Invitations'
              path='/StationaryPage'
            />
            
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
