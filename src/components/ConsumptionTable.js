import React from 'react';

function ConsumptionTable(props) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Record ID</th>
          <th scope="col">Name</th>
          <th scope="col">Pizza Type</th>
          <th scope="col">Date</th>
        </tr>
      </thead>
      <tbody>
        {props.consumptionRecords.map((record) => {
          return (
            <tr key={record.id}>
              <td>{record.id}</td>
              <td>{record.name}</td>
              <td>{record.meat_type}</td>
              <td>{record.date}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default ConsumptionTable;