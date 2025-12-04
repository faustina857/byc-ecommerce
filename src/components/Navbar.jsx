import React from 'react'
import {Byc} from '../assets'
import { FiHeart, FiSearch, FiShoppingCart, FiUser } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light py-3 px-4 font-jost" style={{color:""}}>
        <Link className="navbar-brand" to="/">Shop Products</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/blog">Blog <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="">FAQ</a>
            </li>
            </ul>
            <img src={Byc} alt="" className='logo'/>
            <ul className="navbar-nav">
            <li className="nav-item">
               <Link className="nav-link" to="/about">About Us</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
            </li>
            </ul>
            <div>
              <FiSearch size={20} style={{ marginRight: "17px" }}/>
              <Link to="/user"><FiUser color='#000' size={20} style={{ marginRight: "17px" }}/></Link>
              <FiHeart size={20} style={{ marginRight: "17px" }}/>
              <FiShoppingCart size={20} style={{ marginRight: "17px" }}/>
            </div>
        </div>
</nav>

    </>
  )
}

export default Navbar
