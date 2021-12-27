import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import CartContext from '../../Context/CartContext'

import './index.css'

const Navbar = props => {
  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }

  const textColor = current => {
    const {history} = props
    if (history.location.pathname === current) {
      return '#f7931e'
    }
    return '#334155'
  }

  const renderCartItemsCount = () => (
    <CartContext.Consumer>
      {value => {
        const {cartList} = value
        const cartItemsCount = cartList.length

        return (
          <>
            {cartItemsCount > 0 && (
              <span className="cart-count">{cartList.length}</span>
            )}
          </>
        )
      }}
    </CartContext.Consumer>
  )

  return (
    <div className="navbar">
      <div className="logo-container">
        <Link to="/" className="nav-link">
          <img
            src="https://res.cloudinary.com/dleaoaoxz/image/upload/v1640612186/Group_7420_w55rvv.svg"
            alt="website logo"
            className="website-logo"
          />
        </Link>
        <h1 className="website-name">Tasty Kitchens</h1>
      </div>
      <ul className="nav-items-container">
        <Link to="/" className="nav-link">
          <li className="text" style={{color: textColor('/')}}>
            Home
          </li>
        </Link>
        <Link to="/cart" className="nav-link">
          <li className="text" style={{color: textColor('/cart')}}>
            Cart {renderCartItemsCount()}
          </li>
        </Link>
        <li>
          <button
            type="button"
            className="logout-button"
            onClick={onClickLogout}
          >
            Logout
          </button>
        </li>
      </ul>
    </div>
  )
}

export default withRouter(Navbar)
