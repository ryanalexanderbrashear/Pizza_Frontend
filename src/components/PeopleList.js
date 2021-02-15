import React from 'react';

function PeopleList(props) {
  return (
    <ul className='list-group list-group-flush'>
      {props.people.map((person) => {
        return (
          <li className='list-group-item' key={person.id}>
            {person.name}
          </li>
        );
      })}
    </ul>
  );
}

export default PeopleList;