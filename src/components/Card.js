import React from 'react';

function Card(props) {
  return (
    <div className='card h-100 mt-2'>
      {props.children}
    </div>
  );
}

export default Card;