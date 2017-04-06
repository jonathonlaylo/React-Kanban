import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCard } from '../../actions';
import { updateStatus } from '../../actions';
// import cards from '../../reducers';
// import Card from '../../components/Cards.js';
import KanbanTitle from '../../components/kanbanTitle.js';
import KanbanNew from '../../components/KanbanNew.js';
import KanbanQueue from '../../components/KanbanQueue.js';
import KanbanInProgress from '../../components/KanbanInProgress.js';
import KanbanDone from '../../components/KanbanDone.js';
import loadData from '../../lib/lib.js';
import statusChange from '../../lib/updateTask.js';

class App extends Component {
  constructor(props) {
      super(props);
      this.title='React Kanban';
      this.editStatus = this.editStatus.bind(this);
    }

  createNewCard(newCard){
    return new Promise((resolve, reject) => {
      function reqList(){
        const parsedData = JSON.parse(this.responseText);
        console.log("parsedData", parsedData);
        resolve(parsedData);
      }

    const oReq = new XMLHttpRequest();
    oReq.addEventListener("load", reqList);
    oReq.open("POST", 'http://localhost:8080/api/kanban/todo');
    oReq.setRequestHeader("Content-type", "application/json");
    oReq.send(JSON.stringify(newCard));
     })
  }

  componentWillMount() {
    loadData()
      .then( data => {
        // console.log('will mount data', data);
        data.forEach(cards => {
          // console.log('cards',cards);
          this.props.onLoadData(cards.id, cards.Title, cards.Priority, cards.Status);
        });
      });
  }

  editStatus(cards){
    statusChange(cards)
    .then((card) => {
      this.props.onStatusData(card.id, card.Title, card.Priority, card.Status);
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="Title">
            <KanbanTitle
              title={this.title}
            />
          </div>
        </div>
        <div className="KanbanNew">
          <KanbanNew
            createNewCard={this.createNewCard}
          />
        </div>
        <div className="container">
          <div className="Queue">
            <h1>Queue</h1>
            <KanbanQueue cards={this.props.cards} editStatus={this.editStatus}/>
          </div>
          <div className="InProgress">
            <h1>In Progress</h1>
            <KanbanInProgress cards={this.props.cards} editStatus={this.editStatus}/>
          </div>
          <div className="Done">
            <h1>Done</h1>
            <KanbanDone cards={this.props.cards} editStatus={this.editStatus}/>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cards: state.cards
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLoadData: (id, Title, Priority, Status) => {
      dispatch(addCard(id, Title, Priority, Status));
    }
    ,
    onStatusData: (id, Title, Priority, Status) => {
      dispatch(updateStatus(id, Title, Priority, Status));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);