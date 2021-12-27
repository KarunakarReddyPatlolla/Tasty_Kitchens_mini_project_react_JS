import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import Navbar from '../Navbar'
import Footer from '../Footer'
import OffersSection from '../OffersSection'
import Restaurants from '../Restaurants'

import './index.css'

const Home = () => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }

  return (
    <div className="bg-container">
      <Navbar />
      <div className="home-container">
        <OffersSection />
        <Restaurants />
      </div>
      <Footer />
    </div>
  )
}

export default Home
