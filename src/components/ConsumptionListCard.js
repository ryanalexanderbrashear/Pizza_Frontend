import React, { useState } from 'react';
import { retrieveConsumption, retrieveConsumptionByMeat } from '../utilities/apiFunctions';
import Card from "./Card";
import CardButton from './CardButton';
import CardButtonContainer from './CardButtonContainer';
import ConsumptionTable from './ConsumptionTable';
import ErrorText from './ErrorText';

function ConsumptionListCard() {

  const [consumptionRecords, setConsumptionRecords] = useState([]);
  const [pizzaTypeInputText, setPizzaTypeInputText] = useState('');
  const [error, setError] = useState(null);

  function handleChange(event) {
    setPizzaTypeInputText(event.target.value);
  }

  const retrieveRecords = () => {
    setError(null);
    retrieveConsumption()
      .then((records) => {
        if (records.length === 0) {
          setConsumptionRecords([]);
          setError('No consumption records were found.');
          return;
        }
        setConsumptionRecords(records);
      })
  }

  const retrieveRecordsByMeat = () => {
    retrieveConsumptionByMeat(pizzaTypeInputText.toLowerCase())
      .then((records) => {
        if (records.length === 0) {
          setConsumptionRecords([]);
          setError('No consumption records were found for that meat type.');
          return;
        }
        setConsumptionRecords(records);
      })
    setPizzaTypeInputText('');
  }

  return (
    <Card>
      <div className='card-body'>
        <h5 className='card-title'>{'Pizza Consumption'}</h5>
        <ErrorText error={error} />
        <ConsumptionTable consumptionRecords={consumptionRecords} />
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