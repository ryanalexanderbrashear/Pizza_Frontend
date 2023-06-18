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
  const [newPizzaMeatType, setNewPizzaMeatType] = useState('');

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
    let meatType = newPizzaMeatType;
    setNewPizzaMeatType('');

    if (meatType && meatType !== '') {
      createPizza(meatType)
        .then((newPizza) => {
          if (newPizza) {
            console.log(newPizza);
            console.log(pizza);
            let updatedPizzaList = pizza;
            updatedPizzaList.push(newPizza);
            setPizza([...updatedPizzaList]);
          }
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

  function handleChange(event) {
    setNewPizzaMeatType(event.target.value);
  }

  return (
    <Card>
      <div className='card-body'>
        <h5 className='card-title'>{'Pizza Types'}</h5>
        <ErrorText error={error} />
        <PizzaList pizzas={pizza} updateFunction={updatePizzaInfo} deleteFunction={deletePizzaByID} />
        <input className='my-2' type='text' name='pizzaType' value={newPizzaMeatType} onChange={handleChange} />
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