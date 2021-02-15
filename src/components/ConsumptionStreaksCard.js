import React, { useState } from 'react';
import { retrieveConsumptionStreaks } from '../utilities/apiFunctions';
import Card from "./Card";
import CardButton from './CardButton';
import CardButtonContainer from './CardButtonContainer';
import ConsumptionStreakList from './ConsumptionStreakList';
import ErrorText from './ErrorText';

function ConsumptionStreaksCard() {

  const [consumptionStreaks, setConsumptionStreaks] = useState([]);
  const [error, setError] = useState(null);

  const retrieveRecordStreaks = () => {
    retrieveConsumptionStreaks()
      .then((streaks) => {
        if (streaks.length === 0) {
          setConsumptionStreaks([]);
          setError('No streaks found.');
        }
        setConsumptionStreaks(streaks);
      })
  }

  return (
    <Card>
      <div className='card-body'>
        <h5 className='card-title'>{'Consumption Streaks'}</h5>
        <ErrorText error={error} />
        <ConsumptionStreakList consumptionStreaks={consumptionStreaks} />
      </div>
      <CardButtonContainer>
        <CardButton title={'Retrieve Consumption Streaks'} onClick={retrieveRecordStreaks} />
        <CardButton title={'Clear'} onClick={() => setConsumptionStreaks([])} />
      </CardButtonContainer>
    </Card>
  );
}

export default ConsumptionStreaksCard;