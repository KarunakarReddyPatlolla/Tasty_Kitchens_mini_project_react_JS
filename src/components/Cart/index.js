import {Component} from 'react'

import Navbar from '../Navbar'
import Footer from '../Footer'

import CartContext from '../../Context/CartContext'
import EmptyCart from '../EmptyCart'
import CartList from '../CartList'

import './index.css'

class Cart extends Component {
  render() {
    return (
      <CartContext.Consumer>
        {value => {
          const {cartList} = value
          const isCartEmpty = cartList.length === 0

          return (
            <>
              <Navbar />
              <div className="cart-container">
                {isCartEmpty ? <EmptyCart /> : <CartList />}
              </div>
              <Footer />
            </>
          )
        }}
      </CartContext.Consumer>
    )
  }
}

export default Cart
