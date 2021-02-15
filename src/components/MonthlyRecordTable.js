import React from 'react';

function MonthlyRecordTable(props) {

  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Month</th>
          <th scope="col">Date</th>
          <th scope="col">Count</th>
        </tr>
      </thead>
      <tbody>
        {props.monthlyRecords.map((record, index) => {
          if (!record) return null
          return (
            <tr key={index}>
              <td>{monthNames[index]}</td>
              <td>{record.date}</td>
              <td>{record.count}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default MonthlyRecordTable;