import React from 'react';

const KanbanDone = (props) => (
  <div>
    <h2>{props.Title}</h2>
    <p>Priority: {props.Priority}</p>
    <p>Status: {props.Status}</p>
  </div>
);

export default KanbanDone;