import React from 'react';

const KanbanInProgress = (props) => (
  <div>
    <h2>{props.Title}</h2>
    <p>Priority: {props.Priority}</p>
    <p>Status: {props.Status}</p>
  </div>
);

export default KanbanInProgress;