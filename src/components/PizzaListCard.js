import React, { useState } from 'react';
import { retrievePizza } from "../utilities/apiFunctions";
import Card from "./Card";
import CardList from './CardList';
import CardButton from './CardButton';

function PizzaListCard() {

  const [pizza, setPizza] = useState([]);

  const retrievePizzaList = () => {
    retrievePizza()
      .then((pizza) => {
        setPizza(pizza);
      })
  }

  return (
    <Card>
      <div className='card-body'>
        <h5 className='card-title'>{'Pizza'}</h5>
        <CardList list={pizza} />
      </div>
      <div class="card-footer">
        <div class="d-grid gap-2">
          <CardButton title={'Retrieve Pizza'} onClick={retrievePizzaList} />
          <CardButton title={'Clear'} onClick={() => setPizza([])} />
        </div>
      </div>
    </Card>
  );
}

export default PizzaListCard;