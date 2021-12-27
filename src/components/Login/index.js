import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

class Login extends Component {
  state = {
    username: '',
    password: '',
    errorMessage: '',
    showError: false,
  }

  usernameInput = event => {
    this.setState({username: event.target.value})
  }

  passwordInput = event => {
    this.setState({password: event.target.value})
  }

  loginSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  loginFailure = errorMsg => {
    this.setState({showError: true, errorMessage: errorMsg})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const option = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, option)
    const data = await response.json()
    if (response.ok === true) {
      this.loginSuccess(data.jwt_token)
      this.setState({username: '', password: ''})
    } else {
      this.loginFailure(data.error_msg)
    }
  }

  render() {
    const {username, password, errorMessage, showError} = this.state
    const token = Cookies.get('jwt_token')
    if (token !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <div className="login-page-main-container">
        <div className="login-page-container">
          <form className="login-container" onSubmit={this.onSubmitForm}>
            <img
              src="https://res.cloudinary.com/dleaoaoxz/image/upload/v1640612186/Group_7420_w55rvv.svg"
              alt="website logo"
              className="website-logo"
            />
            <h1 className="website-name">Tasty Kitchens</h1>
            <h1 className="login-text">Login</h1>
            <label htmlFor="username" className="label-text">
              USERNAME
            </label>
            <input
              id="username"
              className="input"
              type="text"
              placeholder="Enter Username"
              onChange={this.usernameInput}
              value={username}
            />
            <label htmlFor="password" className="label-text">
              PASSWORD
            </label>
            <input
              id="password"
              className="input"
              type="password"
              placeholder="Enter Password"
              onChange={this.passwordInput}
              value={password}
            />
            {showError && <p className="error">*{errorMessage}</p>}
            <button className="login-button" type="submit">
              Login
            </button>
          </form>
        </div>
        <img
          src="https://res.cloudinary.com/dleaoaoxz/image/upload/v1640586971/Rectangle_1456_xbtcjm.jpg"
          alt="website login"
          className="login-image"
        />
      </div>
    )
  }
}

export default Login
