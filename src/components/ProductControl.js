import React from 'react';
import NewProductForm from './NewProductForm';
import ProductDetail from './ProductDetail';
import ProductList from './ProductList';
import { connect } from 'react-redux';
import PropTypes from "prop-types";

class ProductControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      selectedProduct: null
    };
  }

  handleClick = () => {
    if (this.state.selectedProduct != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedProduct: null,
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }


  handleRestockingProduct = (id) => {
    const { dispatch } = this.props;
    const chosenProduct = this.props.masterProductList[id];
    const action = {
      type: 'RESTOCK_PRODUCT',
      id: id
    }
    dispatch(action);
    this.setState({selectedProduct: chosenProduct})
    }

  handleBuyingProduct = (id) => {
    const chosenProduct = this.state.masterProductList.filter(product => product.id === id)[0];
    if (chosenProduct) {
      const newQuantity = (parseInt(chosenProduct.quantity) - 1);
      chosenProduct.quantity = newQuantity
      this.setState({selectedProduct: chosenProduct})
    }
  }

  handleAddingNewProductToList = (newProduct) => {
    const { dispatch } = this.props;
    const { id, name, price, description, quantity } = newProduct;
    const action = {
      type: 'ADD_PRODUCT',
      id: id,
      name: name,
      price: price,
      description: description,
      quantity: quantity,
    }
    dispatch(action);
    this.setState({formVisibleOnPage: false});
  }

  handleChangingSelectedProduct = (id) => {
    const selectedProduct = this.props.masterProductList[id];
    this.setState({selectedProduct: selectedProduct});
  }

  handleDeletingProduct = (id) => {
    const { dispatch } = this.props;
    const action = {
      type: 'DELETE_PRODUCT',
      id: id
    }
    dispatch(action);
    this.setState({selectedProduct: null});
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.selectedProduct != null) {
      currentlyVisibleState = <ProductDetail product = {this.state.selectedProduct} onClickingDelete = {this.handleDeletingProduct} onClickingRestock = {this.handleRestockingProduct} onClickingBuy = { this.handleBuyingProduct }/>
      buttonText = "Return to Product List";
    }
    else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewProductForm onNewProductCreation={this.handleAddingNewProductToList} />;
      buttonText = "Return to Product List";
    } else {
      currentlyVisibleState = <ProductList productList={this.props.masterProductList} onProductSelection={this.handleChangingSelectedProduct} />;
        buttonText = "Add Product";
    }
    return (
      <>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </>
    );
  }

}

ProductControl.propTypes = {
  masterProductList: PropTypes.object
};

const mapStateToProps = state => {
  return {
    masterProductList: state
  }
}


ProductControl = connect(mapStateToProps)(ProductControl);

export default ProductControl;