import React from 'react';

const KanbanDone = (props) => (
  <div className="DoneCard">
    <h2>{props.Title}</h2>
    <p>Priority: {props.Priority}</p>
    <p>Status: {props.Status}
    <select>
      <option disabled selected value> -- select an option -- </option>
          <option value="QUEUE">QUEUE</option>
          <option value="PROGRESS">PROGRESS</option>
          <option value="DONE">DONE</option>
    </select>
    </p>
  </div>
);

export default KanbanDone;