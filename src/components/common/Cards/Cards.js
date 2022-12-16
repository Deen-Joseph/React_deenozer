import React from "react";
import "./Cards.css";

const Cards = ({ imageUrl, title, body }) => {
  return (
    
      <div className="column">
        <div className="card">
          <div className="card-container">
            <div className="image-container">
              <img src={imageUrl} alt=""></img>
            </div>
            <div className="card-content"></div>
            <div className="card-title">
              <h3>{title}</h3>
            </div>
            <div className="card-body">
              <p>{body}</p>
            </div>
            <div className="btn">
              <button>
                <a href="/">View More</a>
              </button>
            </div>
          </div>
        </div>
      </div>
   
  );
};

export default Cards;
