import React from 'react';

function CardButton(props) {
  return (
    <button type='button' className='btn btn-primary' onClick={props.onClick}>{props.title}</button>
  );
}

export default CardButton;