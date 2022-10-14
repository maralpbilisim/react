import React, { Component } from 'react'
import { Table,Button } from 'reactstrap'

export default class CartList extends Component {
    renderCart(){
        return(
           <Table striped>
            <thead>
                <th>#</th>
                <th>Category Id</th>
                <th>productName</th>
                <th>unitPrice</th>
                <th>unitsInStock</th>
                <th>quantity</th>
                <th></th>
            </thead>
            <tbody>
                {
                    this.props.cart.map(cartItem=>(
                        <tr key={cartItem.product.id}>
                              <td>{cartItem.product.id}</td>
                            <td>{cartItem.categoryId}</td>
                            <td>{cartItem.productName}</td>
                            <td>{cartItem.unitPrice}</td>
                            <td>{cartItem.unitsInStock}</td>
                            <td><Button color="danger" onClick={()=>this.props.removeFromCart(cartItem.product)}>
                              sepetten silme
                              </Button></td>
                        </tr>
                    ))
                }
            </tbody>
           </Table> 
        )
    }
  render() {
    return (
      <div>{this.renderCart()} </div>
    )
  }
}
