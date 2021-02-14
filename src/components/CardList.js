import React from 'react';

function CardList(props) {
  let keyValue = 0;

  return (
    <ul className='list-group list-group-flush'>
      {props.list.map((listItem) => {
        keyValue += 1;
        return <li className='list-group-item' key={keyValue}>{listItem}</li>
      })}
    </ul>
  );
}

export default CardList;