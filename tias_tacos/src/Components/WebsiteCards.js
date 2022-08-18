import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function WebsiteCards() {
  return (
    <div className="cards">
      <h1>We Offer A Range Of Different Website Options</h1>
      <br></br>
      <br></br>
      <div className="cards__container">
        <div className="cards_wrapper">
          <ul className="cards__items">
          <CardItem
              src='images/WebsiteServices1.png'
              text='Choose from one of our templates, we can add all of your content and logos onto one of our template.'
              label='Templates'
              path='/WebsiteServices'
            />
          <CardItem
              src='images/WebsiteCover.png'
              text='Looking at creating your business into an app, click to find out more.'
              label='Apps'
              path='/WebsiteServices'
            />
            <CardItem
              src='images/WebsiteServices2.jpg'
              text='We can create a website that continuously fetches data from another website, your website will always be upto date with its content.'
              label='Fetching Data'
              path='/WebsiteServices'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/WebsiteServices3.jpg'
              text='There are alot of websites being created out there but alot of companys dont take into consideration when it comes to people viewing your website on their mobile.'
              label='Mobile Responsive'
              path='/WebsiteServices'
            />
            <CardItem
              src='images/WebsiteServices4.jpg'
              text='Got a small online business but dont know how to create a shop, we can help with that.'
              label='Online Shop'
              path='/WebsiteServices'
            />
              <CardItem
              src='images/WebsiteServices5.jpg'
              text='Dont know how to work social media put want to create a small online business using social media? We can help with all your social media needs.'
              label='Social Media'
              path='/Prints'
            />
            
          </ul>
        </div>
      </div>
    </div>
  );
}

export default WebsiteCards;