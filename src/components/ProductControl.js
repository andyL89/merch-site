import React from 'react';
import NewProductForm from './NewProductForm';
import ProductList from './ProductList';

class ProductControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterProductList: []
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }

  handleAddingNewProductToList = (newProduct) => {
    const newMasterProductList = this.state.masterProductList.concat(newProduct);
    this.setState({masterProductList: newMasterProductList,
                  formVisibleOnPage: false});
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewProductForm onNewProductCreation={this.handleAddingNewProductToList}/>
      buttonText = "Return to Product List";
    } else {
      currentlyVisibleState = <ProductList productList={this.state.masterProductList}/>;
      buttonText = "Add Product";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default ProductControl;