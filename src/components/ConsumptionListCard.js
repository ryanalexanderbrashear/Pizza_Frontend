import React, { useState } from 'react';
import { retrieveConsumption } from '../utilities/apiFunctions';
import Card from "./Card";
import CardButton from './CardButton';
import CardButtonContainer from './CardButtonContainer';
import ConsumptionTable from './ConsumptionTable';

function ConsumptionListCard() {

  const [consumptionRecords, setConsumptionRecords] = useState([]);

  const retrieveRecords = () => {
    retrieveConsumption()
      .then((records) => {
        console.log(records);
        setConsumptionRecords(records);
      })
  }

  return (
    <Card>
      <div className='card-body'>
        <h5 className='card-title'>{'Pizza Consumption'}</h5>
        <ConsumptionTable list={consumptionRecords} />
      </div>
      <CardButtonContainer>
        <CardButton title={'Retrieve Consumption Records'} onClick={retrieveRecords} />
        <CardButton title={'Clear'} onClick={() => setConsumptionRecords([])} />
      </CardButtonContainer>
    </Card>
  );
}

export default ConsumptionListCard;