import React from 'react';

function Card(props) {
  return (
    <div className='card col-sm-12 col-md-6'>
      <h5 className='card-title'>{props.title}</h5>
      <div className='card-body'>
        {props.children}
      </div>
    </div>
  );
}

export default Card;