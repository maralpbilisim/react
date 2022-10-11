import React, { Component } from 'react'
import {
    Badge,
    NavItem,
    NavLink,
} from 'reactstrap';

export default class CartSummary extends Component {
    renderSummary() {
      return(<div>
        <NavItem>
        <NavLink
            href="#"
        >
           Your CARD
        </NavLink>
        </NavItem>
        <NavItem>
        {
            this.props.cart.map(cartItem => (
                <NavLink key={cartItem.product.id} active href="#">{cartItem.product.productName}
                <Badge color="success">{cartItem.quantity}</Badge>
                </NavLink>
            ))
        }
    </NavItem>
    </div>
      )
       
    }
renderEmptyCard(){
    return(<NavItem>
        <NavLink>Empty Cart</NavLink>
    </NavItem>)

}
    render() {
        
        return (
            <div>

            {this.props.cart.length>0?this.renderSummary():this.renderEmptyCard()}

            </div>
        )
    }
}
