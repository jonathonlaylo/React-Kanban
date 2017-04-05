import React, { Component } from 'react';
import Card from '../components/Cards.js';

class KanbanQueue extends Component {

  render() {
    return (
      <div className="QueueCard" >
        {this.props.cards.filter((card) => card.Status === "QUEUE").map((cards) => {
          return(<Card
            id={cards.id}
            Title={cards.Title}
            Status={cards.Status}
            Priority={cards.Priority}
            />
            )
          })
        }
      </div>
    )
  }
};

export default KanbanQueue;