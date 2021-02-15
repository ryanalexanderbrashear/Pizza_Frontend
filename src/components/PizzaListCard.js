import React, { useState } from 'react';
import { retrievePizzas, createPizza, updatePizza, deletePizza } from "../utilities/apiFunctions";
import Card from "./Card";
import CardButton from './CardButton';
import CardButtonContainer from './CardButtonContainer';
import PizzaList from './PizzaList';

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
          if (success) retrievePizzaList()
        })
    }
  }

  const updatePizzaInfo = (id) => {
    let meatType = prompt('What type of meat does this pizza have?');

    if (meatType && meatType !== '') {
      updatePizza(id, meatType)
        .then((success) => {
          if (success) retrievePizzaList()
        })
    }
  }

  const deletePizzaByID = (id) => {
    deletePizza(id)
      .then((success) => {
        if (success) retrievePizzaList()
      })
  }

  return (
    <Card>
      <div className='card-body'>
        <h5 className='card-title'>{'Pizza Types'}</h5>
        <PizzaList pizzas={pizza} updateFunction={updatePizzaInfo} deleteFunction={deletePizzaByID} />
      </div>
      <CardButtonContainer>
        <CardButton title={'Retrieve Pizza'} onClick={retrievePizzaList} />
        <CardButton title={'Add Pizza'} onClick={addNewPizza} />
        <CardButton title={'Clear'} onClick={() => setPizza([])} />
      </CardButtonContainer>
    </Card >
  );
}

export default PizzaListCard;