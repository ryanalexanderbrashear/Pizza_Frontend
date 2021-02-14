import React from 'react';
import Card from './Card';
import PeopleListCard from './PeopleListCard';

function Content() {
  return (
    <div className='container'>
      <div className='row'>
        <PeopleListCard />
        <Card title={'Test'}>
        </Card>
      </div>
    </div>
  );
}

export default Content;