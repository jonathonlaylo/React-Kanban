export const ADD_CARD = 'ADD_CARD'

export function addCard(Title, Priority, Status) {
  console.log('arguments', arguments);
  return {
    type: 'ADD_CARD',
    Title,
    Priority,
    Status
  };
};