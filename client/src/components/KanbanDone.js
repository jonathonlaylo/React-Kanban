import React, {Component} from 'react';
import Card from '../components/Cards.js';

class KanbanDone extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render(){
    return (
      <div className="DoneCard">
        {this.props.cards.filter((card) => card.Status === "DONE").map((cards) => {
          return(<Card
            key={cards.id}
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

export default KanbanDone;