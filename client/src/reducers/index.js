import {ADD_CARD, UPDATE_STATUS} from '../actions';

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
            id: action.id,
            Title: action.Title,
            Priority: action.Priority,
            Status: action.Status
          }
        ]
      });
    case UPDATE_STATUS:
      let updateCards = state.cards.filter( card => {
        if(card.id !== action.id) {
          return card;
        }
      });
      return Object.assign({}, state, {
        cards: [
          ...updateCards,
          {
            id: action.id,
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