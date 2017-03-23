import React, { Component } from 'react';
import KanbanTitle from '../../components/kanbanTitle.js';
import './styles.css';

class App extends Component {
  constructor(props) {
      super(props);
      this.title='React Kanban';
      console.log(KanbanTitle);

    }

  passTitle= () => {
    return this.title;
  }

  render() {
    console.log(this.title);
    return (
      <div className="App">
        <div className="App-header">
          <KanbanTitle title={this.title}/>
        </div>


      </div>
    );
  }
}

export default App;
