import React, { useState } from 'react';
import { retrievePizzas, createPizza } from "../utilities/apiFunctions";
import Card from "./Card";
import CardList from './CardList';
import CardButton from './CardButton';

function PizzaListCard() {

  const [pizza, setPizza] = useState([]);

  const retrievePizzaList = () => {
    retrievePizzas()
      .then((pizza) => {
        setPizza(pizza);
      })
  }

  const addNewPizza = () => {
    let meatType = prompt('What type of meat does this pizza have?');

    if (meatType && meatType !== '') {
      createPizza(meatType)
        .then((success) => {
          console.log(success);
          if (success) retrievePizzaList()
        })
    }
  }

  return (
    <Card>
      <div className='card-body'>
        <h5 className='card-title'>{'Pizza'}</h5>
        <CardList list={pizza} />
      </div>
      <div className="card-footer">
        <div className="d-grid gap-2">
          <CardButton title={'Retrieve Pizza'} onClick={retrievePizzaList} />
          <CardButton title={'Add Pizza'} onClick={addNewPizza} />
          <CardButton title={'Clear'} onClick={() => setPizza([])} />
        </div>
      </div>
    </Card>
  );
}

export default PizzaListCard;