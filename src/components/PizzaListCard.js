import React, { useState } from 'react';
import { retrievePizzas, createPizza, updatePizza, deletePizza } from "../utilities/apiFunctions";
import Card from "./Card";
import CardButton from './CardButton';
import CardButtonContainer from './CardButtonContainer';
import ErrorText from './ErrorText';
import PizzaList from './PizzaList';

function PizzaListCard() {

  const [pizza, setPizza] = useState([]);
  const [error, setError] = useState(null);

  const retrievePizzaList = () => {
    setError(null);
    retrievePizzas()
      .then((pizza) => {
        if (pizza.length === 0) {
          setError('No pizzas have been retrieved.');
          setPizza([]);
          return
        }
        setPizza(pizza);
      })
  }

  const addNewPizza = () => {
    setError(null);
    setPizza([]);
    let meatType = prompt('What type of meat does this pizza have?');

    if (meatType && meatType !== '') {
      createPizza(meatType)
        .then((success) => {
          if (success) retrievePizzaList();
          else setError('Unable to create pizza. Please try again.');
        })
    }
  }

  const updatePizzaInfo = (id) => {
    setError(null);
    let meatType = prompt('What type of meat does this pizza have?');

    if (meatType && meatType !== '') {
      updatePizza(id, meatType)
        .then((success) => {
          if (success) retrievePizzaList()
          else setError('Unable to update pizza. Please try again.');
        })
    }
  }

  const deletePizzaByID = (id) => {
    setError(null);
    deletePizza(id)
      .then((success) => {
        if (success) retrievePizzaList()
        else setError('Unable to delete pizza. Please try again.');
      })
  }

  return (
    <Card>
      <div className='card-body'>
        <h5 className='card-title'>{'Pizza Types'}</h5>
        <ErrorText error={error} />
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