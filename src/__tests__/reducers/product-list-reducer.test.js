import productListReducer from '../../reducers/product-list-reducer';

describe('productListReducer', () => {

  let action;

  const currentState = {
    1: {name: 'Thingy',
    price: '3.99',
    description: 'a thing',
    quantity: 1,
    id: 1 },
    2: {name: 'Thingy2',
    price: '4.99',
    description: 'another thing',
    quantity: 1,
    id: 2 },
  }
  const productData = {
    name: 'Thingy',
    price: '3.99',
    description: 'a thing',
    quantity: 1,
    id: 1
  }

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(productListReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully add new product data to masterProductList', () => {
    const { name, price, description, quantity, id } = productData;
    action = {
      type: 'ADD_PRODUCT',
      name: name,
      price: price,
      description: description,
      quantity: quantity,
      id: id
    };

    expect(productListReducer({}, action)).toEqual({
      [id] : {
        name: name,
        price: price,
        description: description,
        quantity: quantity,
        id: id
      }
    });
  });

  test('Should successfully delete a product', () => {
    action = {
      type: 'DELETE_PRODUCT',
      id: 1
    };
    expect(productListReducer(currentState, action)).toEqual({
      2: {name: 'Thingy2',
      price: '4.99',
      description: 'another thing',
      quantity: 1,
      id: 2 }
    });
  });

  test('Should successfully restock a product by 1', () => {
    action = {
      type: 'RESTOCK_PRODUCT',
      id:1
    };
    expect(productListReducer(currentState, action)).toEqual({
      1: {name: 'Thingy',
      price: '3.99',
      description: 'a thing',
      quantity: 2,
      id: 1 },
      2: {name: 'Thingy2',
      price: '4.99',
      description: 'another thing',
      quantity: 1,
      id: 2 },
    })
  })

});