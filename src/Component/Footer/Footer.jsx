import React from 'react'
import './Footer.scss'
const Footer = () => {
  return (
    <div className='footer'>
    <div className="top">
      <div className="item">
        <h1>Categories</h1>
        <span>Women</span>
        <span>Men</span>
        <span>Shoes</span>
        <span>Accessories</span>
        <span>New Arrivals</span>
      </div>
      <div className="item">
        <h1>Links</h1>
        <span>FAQ</span>
        <span>Pages</span>
        <span>Stores</span>
        <span>Compare</span>
        <span>Cookies</span>
      </div>
      <div className="item">
        <h1>About</h1>
        <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, numquam culpa? Eius dolores cumque soluta incidunt rem non aperiam enim ullam nostrum repellat, exercitationem, nemo dolorem veniam quo, maiores ab.</span>
      </div>
      <div className="item">
        <h1>Contact</h1>
        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum vero magni corporis dolores ea! Veritatis quae aliquam inventore eveniet in, maiores dolorum. Eligendi aspernatur id ratione saepe corrupti? Fugit, asperiores!</span>
      </div>
    </div>
      <div className="bottom">
        <div className='left'>
        <span className="logo">Megastore</span>
        <span className="copyright"> Copyright 2023. All Rights Reserved</span>
        </div>
        <div className="right">
          <img src="https://www.polybags.co.uk/images/paypal.jpg" alt=""/>
        </div>
      </div>
    </div>
  )
}

export default Footer
