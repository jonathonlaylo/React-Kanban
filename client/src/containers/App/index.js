import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCard, updateStatus} from '../../actions';

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

  componentWillMount() {
    // this.loadData();
    loadData()
      .then( data => {
        console.log('will mount data', data);
        data.forEach(cards => {
          console.log('cards',cards);
          this.props.onLoadData(cards.id, cards.Title, cards.Priority, cards.Status);
        });
      });
  }

  render() {
    console.log('props', this.props);
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
            <h2>Queue</h2>
            {
              this.props.cards.filter(({Status}) => Status === "QUEUE").map(({id, Title, Priority, Status}) =>
              <KanbanQueue
                Title={Title}
                Priority={Priority}
                Status={Status}
                statusChange={this.statusChange}
              />
              )
            }
          </div>
          <div className="InProgress">
              <h2>In Progress</h2>
              {
                this.props.cards.filter(({Status}) => Status === "PROGRESS").map(({id, Title, Priority, Status}) =>
                <KanbanInProgress
                  Title={Title}
                  Priority={Priority}
                  Status={Status}
                />
                )
              }
          </div>
          <div className="Done">
            <h2>Done</h2>
            {
              this.props.cards.filter(({Status}) => Status === "DONE").map(({id, Title, Priority, Status}) =>
              <KanbanDone
                Title={Title}
                Priority={Priority}
                Status={Status}
              />
              )
            }
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
    },
    onStatusData: (id, Title, Priority, Status) => {
      dispatch(updateStatus(id, Title, Priority, Status));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);