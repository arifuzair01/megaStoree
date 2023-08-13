import React from 'react'
import {MdKeyboardArrowDown,MdSearch,MdPersonOutline,MdFavoriteBorder,MdShoppingCart} from "react-icons/md"
import { Link } from 'react-router-dom';
import "./Navbar.scss"

const Navbar = () => {
  return (
    <div className='navbar'>
    <div className="wrapper">
     <div className="left navbarChild">
      <div className='item'>
        <img src="https://images.pexels.com/photos/1202723/pexels-photo-1202723.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" width='15px' height="15px" />
        <MdKeyboardArrowDown/>
      </div>
      <div className="item">
        <span>USD</span>
        <MdKeyboardArrowDown/>
      </div>
      <div className="item">
        <Link className='link' to="/products/1">Men</Link>
      </div>
      <div className="item">
        <Link className='link' to="/products/2">Women</Link>
      </div>
      <div className="item">
        <Link className='link' to="/products/3">Children</Link>
      </div>
     </div>
     <div className="center">
      <Link className='link' to="/">MegaStore</Link>
     </div>
     <div className="right navbarChild">
      <div className="item">
        <Link className='link' to="/">Homepage</Link>
      </div>
      <div className="item">
        <Link className='link' to="/">About</Link>
      </div>
      <div className="item">
        <Link className='link' to="/">Contact</Link>
      </div>
      <div className="item">
        <Link className='link' to="/">Store</Link>
      </div>
      <div className="icons">
        <MdSearch/>
        <MdPersonOutline/>
        <MdFavoriteBorder/>
        <div className="cartIcon">
          <MdShoppingCart/>
          <span>0</span>
        </div>
      </div>
     </div>
     </div>
    </div>
  )
}

export default Navbar
