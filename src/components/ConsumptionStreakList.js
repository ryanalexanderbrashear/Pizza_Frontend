import React from 'react';

function ConsumptionStreakList(props) {
  return (
    <>
      {props.consumptionStreaks.map((streak, streakIndex) => {
        return (
          <>
            {streakIndex + 1}
            <ul className='list-group list-group-flush' key={streakIndex}>
              {streak.map((date, dateIndex) => {
                return (
                  <li className='list-group-item' key={dateIndex}>
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