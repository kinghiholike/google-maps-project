import React from 'react';

function DisplayArea(props) {
  return (
    <div>
      {props.locations.map((location) => (
        <div key={location.id}>
          <h3>{location.name}</h3>
          <p>{location.address}</p>
          <p>{location.description}</p>
        </div>
      ))}
    </div>
  );
}

export default DisplayArea;
