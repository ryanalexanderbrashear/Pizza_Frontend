import React from 'react';

function CardButtonContainer(props) {
  return (
    <div className="card-footer">
      <div className="d-grid gap-2">
        {props.children}
      </div>
    </div>
  );
}

export default CardButtonContainer;