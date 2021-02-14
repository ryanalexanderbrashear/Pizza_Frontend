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
    <Card title={'People'}>
      <CardList list={people} />
      <CardButton title={'Retrieve People'} onClick={retrievePeopleList} />
      <CardButton title={'Clear'} onClick={() => setPeople([])} />
    </Card>
  );
}

export default PeopleListCard;