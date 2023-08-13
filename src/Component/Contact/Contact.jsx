import React from 'react'
import {FaFacebook,FaInstagram,FaTwitter} from "react-icons/fa";
import './Contact.scss'

const Contact = () => {
  return (
    <div className='contact'>
      <div className="wrapper">
        <span>BE IN TOUCH WITH US :</span>
        <div className="mail">
            <input type="text" placeholder='Enter your e-mail...' />
            <button>JOIN US</button>
        </div>
        <div className="icons">
            <FaFacebook size={20}/>
            <FaInstagram size={20}/>
            <FaTwitter size={20}/>
        </div>
      </div>
    </div>
  )
}

export default Contact
