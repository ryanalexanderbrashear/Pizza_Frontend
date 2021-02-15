import React, { useState } from 'react';
import { retrieveConsumption, retrieveConsumptionByMeat } from '../utilities/apiFunctions';
import Card from "./Card";
import CardButton from './CardButton';
import CardButtonContainer from './CardButtonContainer';
import ConsumptionTable from './ConsumptionTable';

function ConsumptionListCard() {

  const [consumptionRecords, setConsumptionRecords] = useState([]);
  const [pizzaTypeInputText, setPizzaTypeInputText] = useState('');

  function handleChange(event) {
    setPizzaTypeInputText(event.target.value);
  }

  const retrieveRecords = () => {
    retrieveConsumption()
      .then((records) => {
        setConsumptionRecords(records);
      })
  }

  const retrieveRecordsByMeat = () => {
    retrieveConsumptionByMeat(pizzaTypeInputText)
      .then((records) => {
        setConsumptionRecords(records);
      })
    setPizzaTypeInputText('');
  }

  return (
    <Card>
      <div className='card-body'>
        <h5 className='card-title'>{'Pizza Consumption'}</h5>
        <ConsumptionTable list={consumptionRecords} />
        <div className='row mx-5'>
          <input className='my-2' type='text' name='pizzaType' value={pizzaTypeInputText} onChange={handleChange} />
          <CardButton title={'Retrieve Consumption Records By Meat Type'} onClick={retrieveRecordsByMeat} />
        </div>
      </div>
      <CardButtonContainer>
        <CardButton title={'Retrieve All Consumption Records'} onClick={retrieveRecords} />
        <CardButton title={'Clear'} onClick={() => setConsumptionRecords([])} />
      </CardButtonContainer>
    </Card>
  );
}

export default ConsumptionListCard;