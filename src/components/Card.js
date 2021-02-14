import React from 'react';

function Card(props) {
  return (
    <div className='card h-100 my-4'>
      {props.children}
    </div>
  );
}

export default Card;