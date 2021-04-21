import React from 'react';
import PropTypes from 'prop-types';

function ProductDetail(props){
  const { product, onClickingDelete } = props;

  return (
    <>
      <h1>Product Detail</h1>
      <h3>{product.name}</h3>
      <p>{product.price}</p>
      <p>{product.description}</p>
      <p>{product.quantity}</p>
      <button onClick={()=> onClickingDelete(product.id)}>Delete Product</button>
    </>
  );
}

ProductDetail.propTypes = {
  product: PropTypes.object,
  onClickingDelete: PropTypes.func
};

export default ProductDetail;

