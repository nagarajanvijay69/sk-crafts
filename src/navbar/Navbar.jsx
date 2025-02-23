import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
     const [Togle, Settogle] = useState(false);
     const fun =()=>{
          Settogle(!Togle);
     };
     return (
          <nav className="navbar">
               <div className="custom">
                    <Link to='/' className="title"><div className='brand'>Sk Crafts & Editz</div></Link>
                    <div className="btns">
                         <i class={`bi bi-list ${Togle ? 'hide': ''}`} onClick={fun}></i>
                         <i class={`bi bi-x ${Togle ? '':'hide'}`} onClick={fun}></i>
                    </div>
               </div>
               <ul className={`unlist ${Togle ? '':'false'}`}>
                    <NavLink to='/' className='navlink  line'><li className='list'>Home</li></NavLink>
                    <NavLink to='/products' className='navlink  line'><li className='list'>Products</li></NavLink>
                    <NavLink to='/about' className='navlink  line'><li className='list'>About</li></NavLink>
               </ul>
          </nav>
     )
};

export default Navbar