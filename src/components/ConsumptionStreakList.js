import React from 'react';

function ConsumptionStreakList(props) {
  return (
    <>
      {props.list.map((listItem, index) => {
        return (
          <>
            {index + 1}
            <ul className='list-group list-group-flush' key={index}>
              {listItem.map((date, index) => {
                return (
                  <li className='list-group-item' key={index}>
                    {date}
                  </li>
                );
              })}
            </ul>
          </>
        );
      })}
    </>
  );
}

export default ConsumptionStreakList;