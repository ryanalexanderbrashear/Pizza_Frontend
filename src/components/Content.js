import React from 'react';
import Card from './Card';
import PeopleListCard from './PeopleListCard';
import PizzaListCard from './PizzaListCard';

function Content() {
  return (
    <div className='container'>
      <div className='row'>
        <PeopleListCard />
        <PizzaListCard />
      </div>
    </div>
  );
}

export default Content;