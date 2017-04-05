import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCard } from '../../actions';
// import { updateStatus } from '../../actions';
import cards from '../../reducers';
import Card from '../../components/Cards.js';
import KanbanTitle from '../../components/kanbanTitle.js';
import KanbanNew from '../../components/KanbanNew.js';
import KanbanQueue from '../../components/KanbanQueue.js';
import KanbanInProgress from '../../components/KanbanInProgress.js';
import KanbanDone from '../../components/KanbanDone.js';
import loadData from '../../lib/lib.js';
// import statusChange from '../../lib/updateTask.js';

class App extends Component {
  constructor(props) {
      super(props);
      this.title='React Kanban';
    }

  createNewCard(newCard){
    // console.log(newCard);
    const oReq = new XMLHttpRequest();
    oReq.open("POST", 'http://localhost:8080/api/kanban/todo');
    oReq.setRequestHeader("Content-type", "application/json");
    oReq.send(JSON.stringify(newCard));
  }

  // statusChangeCard(statusCard){
  //   const oReq = new XMLHttpRequest();
  //   // oReq.addEventListener("load", reqListener);
  //   oReq.open("PUT", 'http://localhost:8080/api/kanban/todo/editcard', true);
  //   oReq.setRequestHeader("Content-type", "application/json");
  //   // console.log('xhr card: ', card);
  //   oReq.send(JSON.stringify(statusCard));
  // }

  componentWillMount() {
    loadData()
      .then( data => {
        // console.log('will mount data', data);
        data.forEach(cards => {
          // console.log('cards',cards);
          this.props.onLoadData(cards.id, cards.Title, cards.Priority, cards.Status);
        });
      });

    // statusChange()
    //   .then( statusData => {
    //     statusData.forEach( cards => {
    //       this.props.onStatusData(cards._key);
    //     });
    //   });
  }

  render() {
    // console.log('props', this.props);
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
            <KanbanQueue cards={this.props.cards}/>
          </div>
          <div className="InProgress">
            <h1>In Progress</h1>
            <KanbanInProgress cards={this.props.cards}/>
          </div>
          <div className="Done">
            <h1>Done</h1>
            <KanbanDone cards={this.props.cards}/>
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
    // ,
    // onStatusData: (_key, Title, Priority, Status) => {
    //   dispatch(updateStatus(_key, Title, Priority, Status));
    // }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);