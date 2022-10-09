import React, { Component } from 'react'
import CategoryList from "./CategoryList";
import Navi from "./Navi";
import ProductList from "./ProductList";
import { Container, Row, Col } from "reactstrap"

export default class App extends Component{

  state={currentCategory: ""}

  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName })
}
 render(){
  let Productinfo={title:"Product List"}
 let Categoryinfo={title:"Category List"}
  return (
    <div>
      <Container>
        <Row>
          <Navi></Navi>
        </Row>
        <Row>
          <Col xs="3">
            <CategoryList currentCategory={this.state.currentCategory} changeCategory={this.changeCategory} info={Categoryinfo}></CategoryList>
          </Col>
          <Col xs="9">
            <ProductList info={Productinfo}></ProductList>
          </Col>

        </Row>

      </Container>

    </div>
  );
}
}



