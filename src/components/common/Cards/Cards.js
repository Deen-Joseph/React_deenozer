import React from "react";
import './Cards.css'

const Cards = ({imageUrl, title, body} ) => {
  return (
    <div className="card-container">
      <div className="image-container">
        <img
          src={`${(imageUrl)}`}
          alt=''
        
        />    
        <div className="card-title">
          <h3>{title}</h3>
        </div>
        <div className="card-body">
          <p>{body}</p>
          </div>   
      </div>
    </div>
  );
};

export default Cards;
