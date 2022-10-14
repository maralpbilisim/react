import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Badge,
  NavItem,
  NavLink,
 } from 'reactstrap';
 import {Link} from 'react-router-dom';

 function CartSummary({cart,removeFromCart}) {
      return(<div>
        <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
              YourCart{cart.length}
              </DropdownToggle>
              <DropdownMenu right>
                {
                   cart.length>0?
                    cart.map(cartItem=>(
                        <DropdownItem key={cartItem.product.id}>
                           <Badge color="danger" onClick={()=>removeFromCart(cartItem.product)}>X</Badge>
                            {cartItem.product.productName}
                        <Badge color="success">{cartItem.quantity}</Badge>
                        </DropdownItem>
                    )
                        ):<div>
                            <NavItem>
                                <NavLink>
                                    empty card
                                </NavLink>
                            </NavItem>
                        </div>
                    }
                <DropdownItem divider />
                <DropdownItem>
                  <Link to="cart">go to cart</Link>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
    </div>
      )
       
    }
    export default CartSummary;

