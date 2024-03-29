import React from 'react';

import './card.styles.css'

export const Card = (props) => {
  return(
    <div className="card-container">
      <img alt="kitten" src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}/>
      <h2>{props.monster}</h2>
    </div>
  )
}