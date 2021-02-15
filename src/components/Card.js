import React from 'react';

function Card(props) {
  return (
    <div className='card my-4 mx-auto col-4'>
      {props.children}
    </div>
  );
}

export default Card;