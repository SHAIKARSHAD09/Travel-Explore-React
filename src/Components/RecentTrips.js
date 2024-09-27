import React from 'react'
import {data} from './dataRecentTrips';
import "./RecentTrips.css";
const RecentTrips = () => {
  return (
    <section className='section' id='recent-links'>
        <div className="container">
            <div className="header">
                <h2 className="recent">Recent Trips</h2>
                <h4 className='quote'>Every journey is a story waiting to be told.</h4>
            </div>
            <div className="cards-container">
                    {data.map((card)=>{
                        const {id, url, img, text, title} = card;
                        return(<div key={id} className='travel-card'>
                            <a href={url}><img src={img}/></a>
                            <h3 className="title">{title}</h3>
                            <h4 className="info">{text}</h4>                            
                        </div>)
                    })}
            </div>
        </div>
      
    </section>
  )
}

export default RecentTrips
