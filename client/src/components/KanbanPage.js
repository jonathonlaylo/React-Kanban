import React from 'react';
import KanbanItem from '../components/KanbanItem.js';

class KanbanPage extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      todo:[
        // {Title: "Do DevLeague HW ", Priority: "now ", Status: "in progress "},
        // {Title: "Clean your room ", Priority: "whenever ", Status: "in progress "},
        // {Title: "text her ", Priority: "REALLY IMPORANT ", Status: "forever "}
      ]
    }
  }
  render() {
    const TodoNode = this.state.todo.map((data) => {
      return (
        <KanbanItem Title={data.Title}
          Priority={data.Priority}
          Status={data.Status}
         />
      )
    })
    // console.log("TodoNode", TodoNode);
    return (
      <div>
        <div className="KanbanPage">
          <div className="TodoDiv">
            <h2>Todo</h2>
            {TodoNode}
          </div>
        </div>
      </div>
    )
  }
}

export default KanbanPage;