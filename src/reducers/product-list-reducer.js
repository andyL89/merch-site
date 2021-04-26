/* eslint-disable import/no-anonymous-default-export */
export default (state = {}, action) => {
  const { name, price, description, quantity, id } = action;
  switch (action.type) {
  case 'ADD_PRODUCT':
    return Object.assign({}, state, {
      [id]: {
        name: name,
        price: price,
        description: description,
        quantity: quantity,
        id: id
      }
    });
    case 'DELETE_PRODUCT':
      let newState = { ...state };
      delete newState[id];
      return newState;
    case 'RESTOCK_PRODUCT':
      let restockState = { ...state };
      restockState[id].quantity++;
      return restockState;
  default:
    return state;
  }
};