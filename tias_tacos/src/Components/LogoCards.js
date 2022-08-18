import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function LogoCards() {
  return (
    <div className="cards">
      <h1>Logo's That Stand Out Are What People Rememeber!</h1>
      <br></br>
      <br></br>
      <div className="cards__container">
        <div className="cards_wrapper">
          <ul className="cards__items">
          <CardItem
              src='images/Wild Child Logo - Celery Juice.jpg'
              text='Wild Child is a Vegan food product that is based in NZ and have a range or different vegan food products.'
              label='Wild Child'
              path='/LogoPage'
            />
          <CardItem
              src='images/The Munchie Box Final Logo.jpg'
              text='THe Munchie Box is a company that makes up food boxes and delivers it to your door.'
              label='The Muchie Box'
              path='/LogoPage'
            />
            <CardItem
              src='images/Rustic Beauty Final Logo.jpg'
              text='Rustic Beauty is a small beauty business that has alot of beauty services to offer.'
              label='Rustic Beauty'
              path='/LogoPage'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/Bee Holistic Logo.png'
              text='Live Holistic is a cafe but they also specialise in holistic products and services.'
              label='Live Holistic'
              path='/LogoPage'
            />
            <CardItem
              src='images/FeatherWixHecLogo.jpg'
              text='Feather Wix is a NZ candle company that has a range of candles and diffusers for sale.'
              label='Feather Wix'
              path='/LogoPage'
            />
              <CardItem
              src='images/Pro Stop.jpg'
              text='Pro Stop is a plastering company in the Bay of Plenty, they have a ranges of plastering services available.'
              label='Pro Stop'
              path='/LogoPage'
            />
            
          </ul>
        </div>
      </div>
    </div>
  );
}

export default LogoCards;