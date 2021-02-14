import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

function PizzaList(props) {
  return (
    <ul className='list-group list-group-flush'>
      {props.list.map((listItem) => {
        return (
          <li className='list-group-item' key={listItem.id}>
            {props.updateFunction ? <button type='button' className='btn btn-primary mx-1' onClick={() => props.updateFunction(listItem.id)}><FontAwesomeIcon icon={faEdit} /></button> : null}
            {props.deleteFunction ? <button type='button' className='btn btn-primary mx-1' onClick={() => props.deleteFunction(listItem.id)}><FontAwesomeIcon icon={faTrash} /></button> : null}
            {listItem.meat_type}
          </li>
        );
      })}
    </ul>
  );
}

export default PizzaList;