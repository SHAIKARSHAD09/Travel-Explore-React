import React, { useState } from 'react'
import './Destinations.css';
import {data} from './dataDestination';
const Destinations = () => {

  return (
    <section className='Destination' id='destination'>
      <div className="header-container">
        <h1 className="popular">Popular Destinations</h1>
      </div>

      <div className='card-container'>
        {data.map((card)=>{
          const {id, title, img, text} = card;
          return(
                <div key={id} className='travel-card'>
                  <img src={img} alt={title} className='travel-img' />  
                  <h3 className='title'>{title}</h3>
                  <p className='info'>{text}</p>
                </div>
          )
        })}
      </div>
    </section>
  )
}

export default Destinations;
