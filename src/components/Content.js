import React from 'react';
import PeopleListCard from './PeopleListCard';
import PizzaListCard from './PizzaListCard';
import ConsumptionListCard from './ConsumptionListCard';

function Content() {
  return (
    <div className='container h-100 mb-6'>
      <div className='row h-50 mt-4'>
        <div className='col'>
          <PeopleListCard />
        </div>
        <div className='col'>
          <PizzaListCard />
        </div>
      </div>
      <div className='row h-50 mt-4'>
        <div className='col'>
          <ConsumptionListCard />
        </div>
      </div>
    </div>
  );
}

export default Content;