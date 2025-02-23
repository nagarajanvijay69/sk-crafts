import React from 'react';
import Navbar from '../navbar/Navbar'
import './Products.css'

const Products = () => {
  return (<>
  <div className="nav-fixed">
      <Navbar />
      </div>
  <div className="product">
    <div className="prod">Products</div>
    <div className="products">
      <a href="https://wa.me/p/7997032913737634/917092572394" target='_blank'>
      <div className="one">
        <img src="../product1.jpg" alt="product-1" className='img-product'/>
        <p className='parag'><div className="extra">Sample - 1</div>Happy Birthday & Wedding Anniversary Love Customize Frame</p>
      </div>

      </a>
      <a href="https://wa.me/p/7997032913737634/917092572394" target='_blank'>
      <div className="two">
        <img src="../product2.jpg" alt="product-2" className='img-product'/>
        <p className='parag'><div className="extra">Sample - 2</div>Happy Birthday & Wedding Anniversary Love Customize Frame</p>
      </div>

      </a>
      <a href="https://wa.me/c/917092572394" target='_blank'>

      <div className="three">
        <img src="../product3.jpg" alt="product-3" className='img-product'/>
        <p className='parag'><div className="extra">Sample - 1</div>Special Photo Frame with Lot of Photos in Some Different Design</p>
      </div>
      </a>
      <a href="https://wa.me/c/917092572394" target='_blank'>

      <div className="four">
        <img src="../product4.jpg" alt="product-4" className='img-product'/>
        <p className='parag'><div className="extra">Sample - 2</div>Special Photo Frame with Lot of Photos in Some Different Design</p>
      </div>
      </a>
      <a href="https://wa.me/p/8194808420541048/917092572394" target='_blank'>

      <div className="five">
        <img src="../product5.jpg" alt="product-5" className='img-product'/>
        <p className='parag'><div className="extra">Sample - 1</div>Name Frame with 25 Photos for Birthday Wishes</p>
      </div>
      </a>
      <a href="https://wa.me/p/8194808420541048/917092572394" target='_blank'>

      <div className="six">
        <img src="../product6.jpg" alt="product-6" className='img-product'/>
        <p className='parag'><div className="extra">Sample - 2</div>Name Frame with 25 Photos for Birthday Wishes</p>
      </div>
      </a>
    </div>
  </div>
  </>
  )
}

export default Products