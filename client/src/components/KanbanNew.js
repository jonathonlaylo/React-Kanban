import React from 'react';

class KanbanNew extends React.Component {
  constructor(props) {
    super(props);
    this.state = {title: "", priority: "", status: ""}
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event){
    this.setEvent({title: event.target.title})
  }

  handleSubmit(event){
    event.preventDefault();
    //take state, run method to give data to app class
    this.props.createNewCard({
      title:this.state.title,
      priority:this.state.priority,
      status:this.state.status
    })
  }

  render(){
    return (
      <div>
        <div className="KanbanNew">
          <h3>Make New Kanban Card</h3>
          <form method="POST" action="/api/kanban/todo" type="text">
            <input type="text" placeholder="title" onChange={this.handleChange} value={this.state.title} name="title" /><br/>
            <input type="text" placeholder="priority" onChange={this.handleChange} value={this.state.priority} name="priority" /><br/>
            <input type="text" placeholder="status" onChange={this.handleChange} value={this.state.status} name="status" /><br/>
            <button onClick={this.handleSubmit}>SUBMIT</button>
          </form>
        </div>
      </div>
    );
  }
}

export default KanbanNew;