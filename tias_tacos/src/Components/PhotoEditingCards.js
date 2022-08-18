import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function PhotoEditingCards() {
  return (
    <div className="cards">
      <h1>We Offer A Wide Range Of Photo Editing Services</h1>
      <br></br>
      <br></br>
      <div className="cards__container">
        <div className="cards_wrapper">
          <ul className="cards__items">
          <CardItem
              src='images/PhotoEditing1.jpg'
              text='Do you have a photo that has been printed out and dont have a digital file of it but would love to get it fixed? We can fix old photos.'
              label='Old Photo Touchups'
              path='/PhotoEditing'
            />
          <CardItem
              src='images/PhotoEditing2.jpg'
              text='Got a image but the colours are just not right, we can fix the colour contrast on any digital image.'
              label='Colour Enhancing'
              path='/PhotoEditing'
            />
            <CardItem
              src='images/Whio Duck Print.jpg'
              text='We can create a photo inside a photo or create an artistic piece for you.'
              label='Artistic Photos'
              path='/PhotoEditingPage'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/PhotoEditing3.jpg'
              text='Do you need the background taken off your image? We can clear cut any image and leave it with no background or we can put a background on for you.'
              label='Clear Cutting'
              path='/PhotoEditingPage'
            />
            <CardItem
              src='images/PhotoEditing4.jpg'
              text='Need a photo for content? Or do you just want a photo touch up with a bit of makeup? We can help you.'
              label='Makeup Touchups'
              path='/PhotoEditingPage'
            />
              <CardItem
              src='images/PhotoEditing5.jpg'
              text='Have a photo with all the wrong colours? Need to change it to natural colours? We have help you with that.'
              label='Colour Changing'
              path='/PhotoEditingPage'
            />
            
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PhotoEditingCards;