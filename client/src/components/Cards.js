import React, { Component } from 'react';

class Card extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //  possible handle status change
  handleSubmit(event){
    event.preventDefault();
  }

  render() {
    return (
      <div className="singleCard">
        <p>ID : {this.props.id}</p>
        <p>Title : {this.props.Title} </p>
        <p>Priority: {this.props.Priority} </p>
        <p>Status:
        <select>
          <option disabled selected value> -- {this.props.Status} -- </option>
          <option value="QUEUE">QUEUE</option>
          <option value="PROGRESS">PROGRESS</option>
          <option value="DONE">DONE</option>
        </select> </p>
      </div>
    )
  }
};

export default Card;

