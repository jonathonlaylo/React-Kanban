export const ADD_CARD = 'ADD_CARD'
export const UPDATE_STATUS = 'UPDATE_STATUS'

export function addCard(id, Title, Priority, Status) {
  console.log('arguments-action/index', arguments);
  return {
    type: 'ADD_CARD',
    id,
    Title,
    Priority,
    Status
  };
};

export function updateStatus(id, Status) {
  return {
    type: 'UPDATE_STATUS',
    id,
    Status
  };
};