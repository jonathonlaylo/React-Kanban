import React from 'react';

class KanbanItem extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props.Title}</h2>
        <p>{this.props.Priority}</p>
        <p>{this.props.Status</p>
      </div>
    )
  }
}

export default KanbanItem;