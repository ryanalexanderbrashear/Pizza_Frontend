import React, { useState } from 'react';
import { retrievePeople } from "../utilities/apiFunctions";
import Card from "./Card";
import CardList from './CardList';
import CardButton from './CardButton';

function PeopleListCard() {

  const [people, setPeople] = useState([]);

  const retrievePeopleList = () => {
    retrievePeople()
      .then((people) => {
        setPeople(people);
      })
  }

  return (
    <Card>
      <div className='card-body'>
        <h5 className='card-title'>{'People'}</h5>
        <CardList list={people} />
      </div>
      <div className="card-footer">
        <div className="d-grid gap-2">
          <CardButton title={'Retrieve People'} onClick={retrievePeopleList} />
          <CardButton title={'Clear'} onClick={() => setPeople([])} />
        </div>
      </div>
    </Card>
  );
}

export default PeopleListCard;