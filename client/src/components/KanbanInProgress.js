import React, {Component} from 'react';
import Card from '../components/Cards.js';

class KanbanInProgress extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className="InProgressCard">
        {this.props.cards.filter((card) => card.Status === "PROGRESS").map((cards) => {
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

export default KanbanInProgress;