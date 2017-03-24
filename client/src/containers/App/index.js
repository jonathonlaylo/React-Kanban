import React, { Component } from 'react';
import KanbanTitle from '../../components/kanbanTitle.js';
// import CardListView from '../../components/CardListView.js';
import KanbanNew from '../../components/KanbanNew.js';
import FakeLibrary from '../../lib/lib.js';
import './styles.css';

class App extends Component {
  constructor(props) {
      super(props);
      this.title='React Kanban';
      this.state = {
        fakeList : FakeLibrary
      }
      this.createNewCard = this.createNewCard.bind(this);
    }

  //get data from form

  //send to sever

  //get data from sever

  //set state from data

  createNewCard(newCard){
    console.log(newCard);
    const oReq = new XMLHttpRequest();
    oReq.open("POST", 'http://localhost:8080/api/kanban/todo');
    oReq.setRequestHeader("Content-type", "application/json");
    oReq.send(JSON.stringify(newCard));
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

      </div>
    );
  }
}

export default App;
