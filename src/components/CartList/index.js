import {Component} from 'react'

import PaymentDetails from '../PaymentDetails'
import CartItem from '../CartItem'
import TotalCart from '../TotalCart'

import CartContext from '../../Context/CartContext'

import './index.css'

class CartList extends Component {
  state = {
    isOrderPlaced: false,
  }

  orderPlaced = () => {
    this.setState(prevState => ({isOrderPlaced: !prevState.isOrderPlaced}))
  }

  render() {
    const {isOrderPlaced} = this.state
    return (
      <CartContext.Consumer>
        {value => {
          const stringifiedCartList = localStorage.getItem('cartData')
          const parsedCartList = JSON.parse(stringifiedCartList)
          return isOrderPlaced ? (
            <PaymentDetails />
          ) : (
            <div className="cart-content-container">
              <div className="cart-headers-cont">
                <p className="cart-header-items">Item</p>
                <div className="qty-price-cont">
                  <p className="cart-header-qty">Quantity</p>
                  <p className="cart-header-price">Price</p>
                </div>
              </div>
              <ul className="cart-list">
                {parsedCartList.map(eachItem => (
                  <CartItem
                    key={eachItem.id}
                    cartItem={eachItem}
                    value={value}
                  />
                ))}
              </ul>
              <TotalCart orderPlaced={this.orderPlaced} />
            </div>
          )
        }}
      </CartContext.Consumer>
    )
  }
}

export default CartList
