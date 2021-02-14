import React from 'react';

function PeopleList(props) {
  return (
    <ul className='list-group list-group-flush'>
      {props.list.map((listItem) => {
        return (
          <li className='list-group-item' key={listItem.id}>
            {listItem.name}
          </li>
        );
      })}
    </ul>
  );
}

export default PeopleList;