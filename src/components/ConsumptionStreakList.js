import React from 'react';

function ConsumptionStreakList(props) {
  return (
    <>
      {props.consumptionStreaks.map((streak, index) => {
        return (
          <>
            {index + 1}
            <ul className='list-group list-group-flush' key={index}>
              {streak.map((date, index) => {
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