import React from 'react'
import Navbar from '../navbar/Navbar'
import './Home.css'
import { NavLink,Link } from 'react-router-dom'

const Home = () => {
  return (<>
      <div className="nav-fixed">
      <Navbar />
      </div>
    <div className="homepage">
      <img src="src\assets\sk.png" alt="Sk Logo" className='brand-img' />
      <p className='text'>Desing ~ Making For You</p>
      <p className='text-2'>Creative Design</p>
      <p className='text-2'>Personalized Gifts</p>
      <p className='text-2'>Video Editing (Logo Intro, Slideshow)</p>
      <Link to='/products' className='link'><div className="button">Shop Now</div></Link>
    </div>
  </>

  )
}

export default Home