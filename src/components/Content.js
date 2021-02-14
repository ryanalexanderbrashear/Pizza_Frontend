import React from 'react';
import Card from './Card';
import PeopleListCard from './PeopleListCard';
import PizzaListCard from './PizzaListCard';

function Content() {
  return (
    <div className='container h-100'>
      <div className='row h-50'>
        <div className='col'>
          <PeopleListCard />
        </div>
        <div className='col'>
          <PizzaListCard />
        </div>
      </div>
    </div>
  );
}

export default Content;