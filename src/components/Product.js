import React from "react";
import PropTypes from "prop-types";


function Product(props) {
  return (
    <React.Fragment>
      <h3>{props.name}</h3>
      <h5>{props.price}</h5>
      <p>{props.description}</p>
      <p>Current Stock: {props.quantity}</p>
      <hr/>
    </React.Fragment>
  );
}


Product.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired
};

export default Product;