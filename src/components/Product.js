import React from "react";
import PropTypes from "prop-types";


function Product(props) {
  return (
    <>
    <div onClick = {() => props.whenProductClicked(props.id)}>
      <h3>{props.name}</h3>
      <h5>{props.price}</h5>
      <p>{props.description}</p>
      <p>Current Stock: {props.quantity}</p>
      </div>
      <hr/>
    </>
  );
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  quantity: PropTypes.string.isRequired,
  id: PropTypes.string,
  whenProductClicked: PropTypes.func
};

export default Product;