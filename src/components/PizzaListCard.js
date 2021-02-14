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
    <Card title={'Pizza'}>
      <CardList list={pizza} />
      <CardButton title={'Retrieve Pizza'} onClick={retrievePizzaList} />
      <CardButton title={'Clear'} onClick={() => setPizza([])} />
    </Card>
  );
}

export default PizzaListCard;