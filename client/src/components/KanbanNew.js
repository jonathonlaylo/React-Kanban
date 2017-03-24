import React from 'react';

class KanbanNew extends React.Component {
  constructor(props) {
    super(props);
    this.state = {Title: "", Priority: "", Status: ""}
    this.handleChangeTitle = this.handleChangeTitle.bind(this)
    this.handleChangePriority = this.handleChangePriority.bind(this)
    this.handleChangeStatus = this.handleChangeStatus.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChangeTitle(event){
    this.setState({
      Title: event.target.value
    })
  }

 handleChangePriority(event){
    this.setState({
      Priority: event.target.value
    })
  }
 handleChangeStatus(event){
    this.setState({
      Status: event.target.value
    })
  }

  handleSubmit(event){
    event.preventDefault();
    console.log(this.state);
    this.props.createNewCard({
      Title:this.state.Title,
      Priority:this.state.Priority,
      Status:this.state.Status
    })
  }

  render(){
    return (
      <div>
        <div className="KanbanNew">
          <h3>Make New Kanban Card</h3>
          <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder="title" onChange={this.handleChangeTitle} name="title" />
            <input type="text" placeholder="priority" onChange={this.handleChangePriority} name="priority" />
            <input type="text" placeholder="status" onChange={this.handleChangeStatus} name="status" />
            <input type="submit"/>
          </form>
        </div>
      </div>
    );
  }
}

export default KanbanNew;