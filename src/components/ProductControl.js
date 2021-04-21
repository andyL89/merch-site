import React from 'react';
import NewProductForm from './NewProductForm';
import ProductDetail from './ProductDetail';
import ProductList from './ProductList';

class ProductControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterProductList: [],
      selectedProduct: null
    };
  }

  handleClick = () => {
    if (this.state.selectedProduct != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedProduct: null
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }

  // handleBuyingProduct = (product) => {
  //   const newQuantity = this.quantity - 1;
  //   this.setState({quantity: newQuantity})
  // }

  // handleRestockingProduct = (id) => {
  //   const selectedProduct = this.state.masterProductList.filter(product => product.id === id)[0];
  //   if (selectedProduct) {
  //     const newQuantity = (parseInt(selectedProduct.quantity) + 1).toString;
  //     selectedProduct.setState({quantity: newQuantity})
  //   }
  // }

  handleAddingNewProductToList = (newProduct) => {
    const newMasterProductList = this.state.masterProductList.concat(newProduct);
    this.setState({masterProductList: newMasterProductList,
                  formVisibleOnPage: false});
  }

  handleChangingSelectedProduct = (id) => {
    const selectedProduct = this.state.masterProductList.filter(product => product.id === id)[0];
    this.setState({selectedProduct: selectedProduct});
  }

  handleDeletingProduct = (id) => {
    const newMasterProductList = this.state.masterProductList.filter(product => product.id !== id);
    this.setState({
      masterProductList: newMasterProductList,
      selectedProduct: null
    });
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.selectedProduct != null) {
      currentlyVisibleState = <ProductDetail product = {this.state.selectedProduct} onClickingDelete = {this.handleDeletingProduct}/>
      buttonText = "Return to Product List";
    }
    else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewProductForm onNewProductCreation={this.handleAddingNewProductToList} />;
      buttonText = "Return to Product List";
    } else {
      currentlyVisibleState =
      <ProductList
        productList={this.state.masterProductList} onProductSelection={this.handleChangingSelectedProduct}/>;
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

export default ProductControl;