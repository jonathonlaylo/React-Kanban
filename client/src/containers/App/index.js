import React, { Component } from 'react';
import KanbanTitle from '../../components/kanbanTitle.js';
import KanbanNew from '../../components/KanbanNew.js';
import './styles.css';

class App extends Component {
  constructor(props) {
      super(props);
      this.title='React Kanban';
      this.createNewCard = this.createNewCard.bind(this);

      this.loadData = this.loadData.bind(this);
    }

  createNewCard(newCard){
    console.log(newCard);
    const oReq = new XMLHttpRequest();
    oReq.open("POST", 'http://localhost:8080/api/kanban/todo');
    oReq.setRequestHeader("Content-type", "application/json");
    oReq.send(JSON.stringify(newCard));
  }

  loadData(){
    const oReq = new XMLHttpRequest();
    oReq.open("GET", 'http://localhost:8080/api/kanban/todo');
    oReq.send();
  }

  componentWillMount() {
    this.loadData();
  }

  render() {
    console.log(this.title);
    return (
      <div className="App">
        <div className="App-header">
          <KanbanTitle title={this.title}/>
        </div>
        <div className="KanbanNew">
            <KanbanNew createNewCard={this.createNewCard}/>
        </div>
        <div className="KanbanView">

        </div>
      </div>
    );
  }
}

export default App;
