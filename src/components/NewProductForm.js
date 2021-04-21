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
    <>
      <form onSubmit={handleNewProductFormSubmission}>
        <input
          type = 'text'
          name = 'name'
          placeholder = 'Product Name' />
        <input
          type = 'text'
          name = 'price'
          placeholder = 'Price' />
        <textarea
          name = 'description'
          placeholder = 'Product Description'/>
        <input
          type = 'text'
          name = 'quantity'
          placeholder = 'Quantity' />
        <button type='submit'>Add Product</button>
      </form>
    </>
  );
}

NewProductForm.propTypes = {
  onNewProductCreation: PropTypes.func
};

export default NewProductForm;
