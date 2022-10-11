import React, { Component } from 'react'

import {
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import CartSummary from './CartSummary';



export default class navi extends Component {
  render() {
    return (
      <div>
      <Nav
      >
      
        <NavItem>
          <CartSummary cart={this.props.cart}></CartSummary>
        </NavItem>
        
      </Nav></div>
    )
  }
}



