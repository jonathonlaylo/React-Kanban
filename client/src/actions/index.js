export const ADD_CARD = 'ADD_CARD'

export function addCard(Title, Priority, Status) {
  return {
    type: 'ADD_CARD',
    Title,
    Priority,
    Status
  };
};