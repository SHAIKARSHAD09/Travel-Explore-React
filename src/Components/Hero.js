import React from 'react';
import './Hero.css';
import {data} from './dataHero';
function Hero(){
  const {quote, text} = data[0];
  return (
    <section className='hero-container'>
        <h1>{quote}</h1>
        <div className="text-hero">
          <h3>{text}</h3>
          <button className='btn-hero'>Tour Plan</button>
        </div>
        
    </section>
  )
}

export default Hero;
