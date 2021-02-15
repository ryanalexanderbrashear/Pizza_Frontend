import React from 'react';
import PeopleListCard from './PeopleListCard';
import PizzaListCard from './PizzaListCard';
import ConsumptionListCard from './ConsumptionListCard';
import ConsumptionStreaksCard from './ConsumptionStreaksCard';
import MonthlyRecordCard from './MonthlyRecordCard';

function Content() {
  return (
    <div className='col'>
      <PeopleListCard />
      <PizzaListCard />
      <ConsumptionListCard />
      <ConsumptionStreaksCard />
      <MonthlyRecordCard />
    </div>
  );
}

export default Content;