import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function StationaryCards() {
  return (
    <div className="cards">
      <h1>We Have A Wide Range Of Stationary Options Available</h1>
      <br></br>
      <br></br>
      <div className="cards__container">
        <div className="cards_wrapper">
          <ul className="cards__items">
          <CardItem
              src='images/StationaryCover.jpg'
              text='We can offer a stationary package for your business, from A4 headers to invoices we have you covered.'
              label='Stationary Package'
              path='/StationaryPage'
            />
          <CardItem
              src='images/InvitationCover.png'
              text='Getting Married? Or have you got a big birthday coming up? Check out our wide range of invitations, we can also custom make one to your needs.'
              label='Invitations'
              path='/StationaryPage'
            />
            <CardItem
              src='images/Abstract Mountains Colours - A3 Print.jpg'
              text='We have a wide range of prints forsale, ranging in different sizes. We can also create a custom print for you.'
              label='Prints Forsale'
              path='/StationaryPage'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/Stationary1.jpg'
              text='Business cards are a staple in a company/business, it has always been a go to for business as its a good way to spread your business out there and for clients to remember your contact details.'
              label='Business Cards'
              path='/StationaryPage'
            />
            <CardItem
              src='images/Stationary2.jpg'
              text='Want to showcase your business in a eye catching way? A brochure is a good way to start.'
              label='Brochures'
              path='/StationaryPage'
            />
              <CardItem
              src='images/Stationary3.jpg'
              text='Weather you want to print of your own heading paper to having your own mug with your company name and details on it, we have you sorted.'
              label='Stationary Merch'
              path='/StationaryPage'
            />
            
          </ul>
        </div>
      </div>
    </div>
  );
}

export default StationaryCards;