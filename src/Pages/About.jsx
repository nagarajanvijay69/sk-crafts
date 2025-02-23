import React from 'react'
import Navbar from '../navbar/Navbar'
import './About.css'

const About = () => {
  return (<>
  
  <div className="nav-fixed">
      <Navbar />
      </div>
 <div className="about">
 <div className='heading'>Customise Your Frame</div>
  <p className='para'>Welcome to our photo frame website, where your memories come to life! We specialize in creating high-quality photo frames that capture your special moments beautifully. Whether you're looking for a unique design or a custom frame tailored to your preferences, we are here to bring your vision to reality. </p>
  <p className="para">If you have a specific frame design in mind, feel free to contact us—we’ll craft the perfect frame just for you. Let’s make your memories even more special with our personalized photo frames!</p>
  <div className="down">
    <h3>Follow Me On</h3>
  <ul className="mini-contact">
        <li className='list'><a href="https://wa.me/c/917092572394" className='a' target='_blank'><i class="bi bi-whatsapp"></i></a></li>
        <li className='list'><a href="https://www.instagram.com/creative_sk_editz/" className='a' target='_blank'><i class="bi bi-instagram"></i></a></li>
        <li className='list'><a  href="https://youtube.com/@its_me_sk_001?si=3n2ZWPXln_wopNZB" className='a' target='_blank'><i class="bi bi-youtube"></i></a></li>
      </ul>
  </div>
 </div>
  </>
  )
}

export default About