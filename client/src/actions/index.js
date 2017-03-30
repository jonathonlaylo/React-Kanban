export const ADD_CARD = 'ADD_CARD'
export const UPDATE_STATUS = 'UPDATE_STATUS'

export function addCard(_id, Title, Priority, Status) {
  console.log('arguments', arguments);
  return {
    type: 'ADD_CARD',
    _id,
    Title,
    Priority,
    Status
  };
};

export function updateStatus(Status) {
  return {
    type: 'UPDATE_STATUS',
    Status
  };
};