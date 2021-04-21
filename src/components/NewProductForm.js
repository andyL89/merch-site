import React from "react";
import { v4 } from 'uuid';
import PropTypes from 'prop-types';

function NewProductForm(props) {
  function handleNewProductFormSubmission(event) {
    event.preventDefault();
    props.onNewProductCreation({name: event.target.name.value,
                              price: event.target.price.value,
                              description: event.target.description.value,
                              quantity: event.target.quantity.value,
                              id: v4()});
  }
  return (
    <React.Fragment>
      <form onSubmit={handleNewProductFormSubmission}>
        <input
          type = 'text'
          name = 'name'
          placeholder = 'Product Name' />
        <input
          type = 'currency'
          name = 'price'
          placeholder = 'Price' />
        <textarea
          name = 'description'
          placeholder = 'Product Description'/>
        <input
          type = 'number'
          name = 'quantity'
          placeholder = 'Quantity' />
        <button type='submit'>Add Product</button>
      </form>
    </React.Fragment>
  );
}

NewProductForm.propTypes = {
  onNewProductCreation: PropTypes.func
};

export default NewProductForm;
