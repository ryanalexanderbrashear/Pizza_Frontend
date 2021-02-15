import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

function PizzaList(props) {
  return (
    <ul className='list-group list-group-flush'>
      {props.pizzas.map((pizza) => {
        return (
          <li className='list-group-item' key={pizza.id}>
            {props.updateFunction ? <button type='button' className='btn btn-primary mx-1' onClick={() => props.updateFunction(pizza.id)}><FontAwesomeIcon icon={faEdit} /></button> : null}
            {props.deleteFunction ? <button type='button' className='btn btn-primary mx-1' onClick={() => props.deleteFunction(pizza.id)}><FontAwesomeIcon icon={faTrash} /></button> : null}
            {pizza.meat_type}
          </li>
        );
      })}
    </ul>
  );
}

export default PizzaList;