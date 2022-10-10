import React, { Component } from 'react'
import { Table,Button } from 'reactstrap';

export default class ProductList extends Component {

  constructor(props) {
    super(props);
    state: { }
  }

  render() {
    return (
      <div>
        <h3>{this.props.info.title}--{this.props.currentCategory}</h3>
        <Table
        >
          <thead>
            <tr>
              <th>id</th>
              <th>productName</th>
              <th>quantityPerUnit</th>
              <th>unitPrice</th>
              <th>unitsInStock</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map(product => (
              <tr key={product.id}>
                <th scope="row">
                  {product.id}
                </th>
                <td>{product.productName}</td>
                <td>{product.quantityPerUnit}</td>
                <td>{product.unitPrice}</td>
                <td>{product.unitsInStock}</td>
                <td><Button onClick={()=>this.props.addToCart(product)} color="info">Add Card</Button></td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    )
  }
}
