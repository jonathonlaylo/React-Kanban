import React from 'react';

export const CardListView = (props) => (
  <div className="App-body">
    {props.title}
    {props.priority}
    {props.status}
  </div>
);

export default CardListView;