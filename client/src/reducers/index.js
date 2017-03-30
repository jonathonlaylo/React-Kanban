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
            _id: action._id,
            Title: action.Title,
            Priority: action.Priority,
            Status: action.Status
          }
        ]
      });
    case UPDATE_STATUS:
      let updateCards = state.cards.map( card => {
        if(card.id === action.id) {
          card.status = action.status;
          return card;
        } else {
          return card;
        }
      })
      return Object.assign({}, state, {
        cards: [
          ...updateCards
        ]
      })

    default:
      return state;
  }
}

export default cards;