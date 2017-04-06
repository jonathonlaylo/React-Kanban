import React from 'react';
import { connect } from 'react-redux';
import { updateStatus } from '../actions';

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {Status: ""}
    this.handleStatus = this.handleStatus.bind(this);
  }

  handleStatus(event){
    this.props.onStatusData(
      this.props.id,
      this.props.Title,
      this.props.Priority,
      event.target.value
    )
  }

  statusValue(event){
    this.setState({
      Status: event.target.value
    })
  }

  render() {
    return (
      <div className="singleCard">
        <p>ID : {this.props.id}</p>
        <p>Title : {this.props.Title} </p>
        <p>Priority: {this.props.Priority} </p>
        <form className="editForm">
        <p>Status:
        <select onChange={this.handleStatus} value={this.props.status}>
          <option disabled selected value> -- {this.props.Status} -- </option>
          <option value="QUEUE">QUEUE</option>
          <option value="PROGRESS">PROGRESS</option>
          <option value="DONE">DONE</option>
        </select> </p>
        </form>
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    cards: state.cards
  }
};

const mapDispatchToProps = (dispatch) => {
  return ({
    onStatusData: (id, Title, Priority, Status) => {
      dispatch(updateStatus(id, Title, Priority, Status));
    }
  })
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Card);