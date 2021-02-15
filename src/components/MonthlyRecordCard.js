import React, { useState } from 'react';
import { retrieveMonthlyRecords } from '../utilities/apiFunctions';
import Card from "./Card";
import CardButton from './CardButton';
import CardButtonContainer from './CardButtonContainer';
import ErrorText from './ErrorText';
import MonthlyRecordTable from './MonthlyRecordTable';

function MonthlyRecordCard() {

  const [records, setRecords] = useState([]);
  const [error, setError] = useState(null);

  const getRecords = () => {
    setError(null);
    retrieveMonthlyRecords()
      .then((records) => {
        if (records.length === 0) {
          setRecords([]);
          setError('No records have been retrieved.');
          return;
        }
        setRecords(records);
      })
  }

  return (
    <Card>
      <div className='card-body'>
        <h5 className='card-title'>{'Monthly Records'}</h5>
        <ErrorText error={error} />
        <MonthlyRecordTable monthlyRecords={records} />
      </div>
      <CardButtonContainer>
        <CardButton title={'Retrieve Monthly Records'} onClick={getRecords} />
        <CardButton title={'Clear'} onClick={() => setRecords([])} />
      </CardButtonContainer>
    </Card>
  );
}

export default MonthlyRecordCard;