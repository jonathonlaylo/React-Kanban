import {ADD_CARD} from '../actions';

const initialState = {
  cards : []
};

function cards(state = initialState, action) {
  switch(action.type) {
    case ADD_CARD:
    return Object.assign({}, state, {
      cards: [
        ...state.cards,
        {
          Title: action.Title,
          Priority: action.Priority,
          Status: action.Status
        }
      ]
    })
    default:
      return state;
  }
}

export default cards;