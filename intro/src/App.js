import React, { Component } from 'react'
import CategoryList from "./CategoryList";
import Navi from "./Navi";
import ProductList from "./ProductList";
import { Container, Row, Col } from "reactstrap"

export default class App extends Component {

  state = { currentCategory: "", products: [] ,cart: []}
  componentDidMount() {
    this.getProducts();
}

  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName })
    this.getProducts(category.id)
  }
  getProducts = (categoryId) => {
    let url="http://localhost:3000/products"
    if(categoryId){
      url+="?categoryId="+categoryId;
    }
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ products: data }))
  }
  addToCart=(product)=>{
    let newCart=this.state.cart
    var addedItem=newCart.find(c=>c.product.id===product.id)
    if(addedItem){
      addedItem.quantity+=1;
    }else{
      newCart.push({product:product,quantity:1})
    }
    this.setState({cart:newCart})
  }
  render() {
    let Productinfo = { title: "Product List" }
    let Categoryinfo = { title: "Category List" }
    return (
      <div>
        <Container>
         
            <Navi cart={this.state.cart}></Navi>
          
          <Row>
            <Col xs="3">
              <CategoryList currentCategory={this.state.currentCategory} changeCategory={this.changeCategory} info={Categoryinfo}></CategoryList>
            </Col>
            <Col xs="9">
            <ProductList
                products={this.state.products}
                addToCart={this.addToCart}
                currentCategory={this.state.currentCategory}
                info={Productinfo}>
              </ProductList>
            </Col>

          </Row>

        </Container>

      </div>
    );
  }
}



