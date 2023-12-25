// Card.js
import React from 'react';
import './Card.css';

function Card(props) {
  return (
    <div className="card-main" onClick={props.onClick}>
      <div className="card-image">
        <img src={props.imageUrl} alt="" />
      </div>
      <div className="card-info">
        <h4>{props.title}</h4>
        <h6>{props.date}</h6>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

export default Card;
