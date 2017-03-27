import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCard } from '../../actions';

import KanbanTitle from '../../components/kanbanTitle.js';
import KanbanNew from '../../components/KanbanNew.js';
import KanbanInProgress from '../../components/KanbanInProgress.js';
import loadData from '../../lib/lib.js';

// import KanbanPage from '../../components/KanbanPage.js';
// import KanbanItem from '../../components/KanbanItem.js';
// import {ADDCARD} from '../../actions';
import './styles.css';

class App extends Component {
  constructor(props) {
      super(props);
      this.title='React Kanban';
      // this.state = {Title: "", Priority: "", Status: ""}
      // this.todo = [];

      // this.createNewCard = this.createNewCard.bind(this);
      // this.loadData = this.loadData.bind(this);
      // this.loadKanban = this.loadKanban.bind(this);
    }

  // loadKanban(data){
  //   const parsedData = JSON.parse(data.currentTarget.response);
  //   let TodoCards = parsedData;
    // console.log('TodoCards', TodoCards);
    // this.setState({
    //   todo: TodoCards
    // })
  // }

  // loadData(){
  //   const oReq = new XMLHttpRequest();
  //   oReq.addEventListener("load", this.loadKanban);
  //   oReq.open("GET", 'http://localhost:8080/api/kanban/todo');
  //   oReq.send();
  // }

  createNewCard(newCard){
    // console.log(newCard);
    const oReq = new XMLHttpRequest();
    oReq.open("POST", 'http://localhost:8080/api/kanban/todo');
    oReq.setRequestHeader("Content-type", "application/json");
    oReq.send(JSON.stringify(newCard));
  }

  componentDidMount() {
    // this.loadData();
    loadData()
      .then( data => {
        console.log('will mount data', data);
        data.forEach(cards => {
          console.log('cards',cards);
          this.props.onLoadData(cards.Title, cards.Priority, cards.Status);
        });
      });
  }

  render() {
    console.log('props', this.props);
    return (
      <div className="App">
        <div className="App-header">
          <KanbanTitle
            title={this.title}
          />
        </div>
        <div className="KanbanNew">
          <KanbanNew
            createNewCard={this.createNewCard}
          />
        </div>
        <div className="InProgress">
            <h2>In Progress Component</h2>
            {
              this.props.cards.map(({Title, Priority, Status}) =>
              <KanbanInProgress
                Title={Title}
                Priority={Priority}
                Status={Status}
              />
              )
            }
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
    onLoadData: (Title, Priority, Status) => {
      dispatch(addCard(Title, Priority, Status));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);