import React, { useState } from 'react';
import { retrievePeople } from "../utilities/apiFunctions";
import Card from "./Card";
import PeopleList from './PeopleList';
import CardButton from './CardButton';
import CardButtonContainer from './CardButtonContainer';

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
        <PeopleList list={people} />
      </div>
      <CardButtonContainer>
        <CardButton title={'Retrieve People'} onClick={retrievePeopleList} />
        <CardButton title={'Clear'} onClick={() => setPeople([])} />
      </CardButtonContainer>
    </Card>
  );
}

export default PeopleListCard;