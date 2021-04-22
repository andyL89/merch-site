import React from 'react';
import PropTypes from 'prop-types';

function ProductDetail(props){
  const { product, onClickingBuy, onClickingRestock, onClickingDelete } = props;

  return (
    <>
      <h1>Product Detail</h1>
      <h3>{product.name}</h3>
      <p>{product.price}</p>
      <p>{product.description}</p>
      <p>Current Stock: {product.quantity}</p>
      {product.quantity > 0 &&
        <button onClick={()=> onClickingBuy(product.id) }>Buy</button>
      }
      {product.quantity === 0 &&
        <h1>SOLD OUT, BROS!</h1>
      }
      <button onClick={()=> onClickingRestock(product.id) }>Restock</button>
      <button onClick={()=> onClickingDelete(product.id)}>Delete Product</button>
    </>
  );
}

ProductDetail.propTypes = {
  product: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingRestock: PropTypes.func,
  onClickingBuy: PropTypes.func
};

export default ProductDetail;