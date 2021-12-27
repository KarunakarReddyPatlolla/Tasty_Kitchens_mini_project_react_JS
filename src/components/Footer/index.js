import {
  FaPinterestSquare,
  FaInstagram,
  FaTwitter,
  FaFacebookSquare,
} from 'react-icons/fa'

import './index.css'

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="container">
        <img
          src="https://res.cloudinary.com/dleaoaoxz/image/upload/v1640589095/Group_7420_nnlqj0.jpg"
          alt="website-footer-logo"
          className="website-logo-footer"
        />
        <h1 className="website-name-footer">Tasty Kitchens</h1>
      </div>
      <p className="footer-text">
        The only thing we are serious about is food. <br /> Contact us on
      </p>
      <div className="icon-container">
        <FaPinterestSquare className="icon" testid="pintrest-social-icon" />
        <FaInstagram className="icon" testid="instagram-social-icon" />
        <FaTwitter className="icon" testid="twitter-social-icon" />
        <FaFacebookSquare className="icon" testid="facebook-social-icon" />
      </div>
    </div>
  )
}
