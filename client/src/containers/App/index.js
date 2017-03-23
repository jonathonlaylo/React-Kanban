import React, { Component } from 'react';
import KanbanTitle from '../../components/kanbanTitle.js';
import CardListView from '../../components/CardListView.js';
import KanbanNew from '../../components/KanbanNew.js';
import FakeLibrary from '../../lib/lib.js';
import './styles.css';

class App extends Component {
  constructor(props) {
      super(props);
      this.title='React Kanban';
      this.state = {
        fakeList : FakeLibrary,
        TodoList : []
      }
    }

  //get data from form

  //send to sever

  //get data from sever

  //set state from data

  render() {
    console.log(this.title);
    return (
      <div className="App">
        <div className="App-header">
          <KanbanTitle title={this.title}/>
        </div>
        <div className="App-body">
          <form>
            <ul>
              {
                this.state.fakeList.map(({_id, title, priority, status}) =>
                  <li>
                    <CardListView
                      key={_id}
                      title={title}
                      priority={priority}
                      status={status}
                    />
                  </li>
                )
              }
            </ul>
          </form>

          <KanbanNew createNewCard={this.state}/>

        </div>
      </div>
    );
  }
}

export default App;
