import React from 'react';
import statusChange from '../lib/updateTask.js';

class KanbanQueue extends React.Component {
  constructor(props) {
    super(props);
    this.handleChangeStatus = this.handleChangeStatus.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

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
      _id:this.state._id,
      Title:this.state.Title,
      Priority:this.state.Priority,
      Status:this.state.Status
    })
  }

  componentWillMount() {
     // statusChange()
     //  .then( statusData => {
     //    statusData.forEach(statusCard => {
     //      this.props.onStatusData(statusCard._id)
     //    });
     //  });
  }

  render() {
    return (
      <div className="QueueCard" >

          <h2>{this.props.Title}</h2>
          <p>Priority: {this.props.Priority}</p>
          <p>Status
          <select>
            <option disabled selected value onChange={this.handleChangeStatus}> -- {this.props.Status} -- </option>
                <option value="PROGRESS">PROGRESS</option>
                <option value="DONE">DONE</option>
          </select>
          <input type="submit"/>
          </p>
      </div>
    )
  }
};

export default KanbanQueue;