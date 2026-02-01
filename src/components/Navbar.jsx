import React, { useContext, useState } from 'react';
import { Byc } from '../assets';
import { FiHeart, FiSearch, FiShoppingCart, FiUser, FiMenu, FiX } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const Navbar = () => {
  const navigate = useNavigate();
  const { cartCount, wishlist } = useContext(CartContext);

  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="navbar navbar-light py-3 px-4 font-jost main-nav">
        <button className="hamburger" onClick={() => setOpen(true)}>
          <FiMenu size={24} />
        </button>
        <div className="desktop-nav">
            <div className="brand mr-4">
              <Link to="/">Shop Products</Link>
        </div>

          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/blog">Blog</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">FAQ</a>
            </li>
          </ul>

            <img src={Byc} alt="" className="logo" />

          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/about">About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
          </ul>

          {/* Icons */}
          <div className="d-flex align-items-center">
            <FiSearch size={20} style={{ marginRight: 17 }} />
            <Link to="/user">
              <FiUser size={20} style={{ marginRight: 17 }} />
            </Link>
            {/* Wishlist */}
            <div onClick={() => navigate("/wishlist")}
              style={{ cursor: "pointer", position: "relative" }}>
              <FiHeart size={20} style={{ marginRight: 17 }} />
              {wishlist.length > 0 && (
                <span className="badge">{wishlist.length}</span>
              )}
            </div>
            {/* Cart */}
            <div onClick={() => navigate("/cart")}
              style={{ cursor: "pointer", position: "relative" }}>
              <FiShoppingCart size={20} style={{ marginRight: 17 }} />
              {cartCount > 0 && (
                <span className="badge">{cartCount}</span>
              )}
            </div>

          </div>

        </div>
      </nav>

      <div className={`mobile-menu ${open ? "show" : ""}`}>
        <button className="close-btn" onClick={() => setOpen(false)}>
          <FiX size={26} />
        </button>

        <div className="">
            <img src={Byc} alt="" className="logo" />
          </div>

        <Link to="/" onClick={() => setOpen(false)}>Shop Products</Link>
        <Link to="/blog" onClick={() => setOpen(false)}>Blog</Link>
        <Link to="/about" onClick={() => setOpen(false)}>About Us</Link>
        <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
        <Link to="/wishlist" onClick={() => setOpen(false)}>Wishlist</Link>
        <Link to="/cart" onClick={() => setOpen(false)}>Cart</Link>

      </div>

      {/* Overlay */}
      {open && <div className="overlay" onClick={() => setOpen(false)}></div>}
    </>
  );
};

export default Navbar;
