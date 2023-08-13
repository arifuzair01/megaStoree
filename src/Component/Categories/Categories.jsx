import React from 'react'
import './Categories.scss'
import {Link} from "react-router-dom"

const Categories = () => {
  return (
    <div className='categories'>
    <div className="col">
        <div className="row">
            <img src="https://plus.unsplash.com/premium_photo-1664202526391-bdd48c569669?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" alt="" />
            <button>
                <Link className="link" to="/products/1">
                    Sale
                </Link>
            </button>
        </div>
        <div className="row">
        <img src="https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=465&q=80" alt="" />
            <button>
                <Link className="link" to="/products/1">
                    Women
                </Link>
            </button>
        </div>
    </div>
    <div className="col">
        <div className="row">
        <img src="https://images.unsplash.com/photo-1571908599407-cdb918ed83bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" alt="" />
            <button>
                <Link className="link" to="/products/1">
                    New Season
                </Link>
            </button>
        </div>
    </div>
    <div className="col col-l">
        <div className="row">
            <div className="col">
                <div className="row"><img src="https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80" alt="" />
            <button>
                <Link className="link" to="/products/1">
                    Men
                </Link>
            </button></div>
            </div>
            <div className="col">
                <div className="row"><img src="https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=465&q=80" alt="" />
            <button>
                <Link className="link" to="/products/1">
                    Accessories
                </Link>
            </button></div>
            </div>
        </div>
        <div className="row"><img src="https://wallpaperaccess.com/full/1252271.jpg" alt="" />
            <button>
                <Link className="link" to="/products/1">
                    shoes
                </Link>
            </button></div>
    </div> 
    </div>
  )
}

export default Categories
