import React, { useState } from 'react';
import { retrieveMonthlyRecords } from '../utilities/apiFunctions';
import Card from "./Card";
import CardButton from './CardButton';
import CardButtonContainer from './CardButtonContainer';
import MonthlyRecordTable from './MonthlyRecordTable';

function MonthlyRecordCard() {

  const [records, setRecords] = useState([]);

  const getRecords = () => {
    retrieveMonthlyRecords()
      .then((records) => {
        console.log(records);
        setRecords(records);
      })
  }

  return (
    <Card>
      <div className='card-body'>
        <h5 className='card-title'>{'Monthly Records'}</h5>
        <MonthlyRecordTable list={records} />
      </div>
      <CardButtonContainer>
        <CardButton title={'Retrieve Monthly Records'} onClick={getRecords} />
        <CardButton title={'Clear'} onClick={() => setRecords([])} />
      </CardButtonContainer>
    </Card>
  );
}

export default MonthlyRecordCard;