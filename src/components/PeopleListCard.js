import React, { useState } from 'react';
import { retrievePeople, retrievePerson } from "../utilities/apiFunctions";
import Card from "./Card";
import PeopleList from './PeopleList';
import CardButton from './CardButton';
import CardButtonContainer from './CardButtonContainer';

function PeopleListCard() {

  const [people, setPeople] = useState([]);
  const [personInputText, setPersonInputText] = useState('');

  const retrievePeopleList = () => {
    retrievePeople()
      .then((people) => {
        setPeople(people);
      })
  }

  const retrievePersonByName = () => {
    retrievePerson(personInputText)
      .then((person) => {
        setPeople([person]);
      })
    setPersonInputText('');
  }

  function handleChange(event) {
    setPersonInputText(event.target.value);
  }

  return (
    <Card>
      <div className='card-body'>
        <h5 className='card-title'>{'People'}</h5>
        <PeopleList list={people} />
        <div className='row mx-5'>
          <input className='my-2' type='text' name='personName' value={personInputText} onChange={handleChange} />
          <CardButton title={'Retrieve Person By Name'} onClick={retrievePersonByName} />
        </div>
      </div>
      <CardButtonContainer>
        <CardButton title={'Retrieve All People'} onClick={retrievePeopleList} />
        <CardButton title={'Clear'} onClick={() => setPeople([])} />
      </CardButtonContainer>
    </Card>
  );
}

export default PeopleListCard;