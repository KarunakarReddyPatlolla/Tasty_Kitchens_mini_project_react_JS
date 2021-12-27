import {Link} from 'react-router-dom'
import Navbar from '../Navbar'

import './index.css'

const NotFound = () => (
  <>
    <Navbar />
    <div className="not-found-container">
      <img
        src="https://res.cloudinary.com/dleaoaoxz/image/upload/v1640589320/Group_sybb0h.jpg"
        alt="not found"
        className="not-found-image"
      />
      <h1 className="not-found-heading">Page Not Found</h1>
      <p className="not-found-text">
        we are sorry, the page you requested could not be found <br />
        Please go back to the homepage
      </p>
      <Link to="/">
        <button type="button" className="home-btn">
          Home Page
        </button>
      </Link>
    </div>
  </>
)

export default NotFound
