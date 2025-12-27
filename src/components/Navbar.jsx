import React, { useContext } from 'react';
import { Byc } from '../assets';
import { FiHeart, FiSearch, FiShoppingCart, FiUser } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
const Navbar = () => {
  const navigate = useNavigate();
  const { cartCount } = useContext(CartContext);
  return (
    <nav className="navbar navbar-expand-lg navbar-light py-3 px-4 font-jost">
      <Link className="navbar-brand" to="/">Shop Products</Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/blog">Blog</Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="">FAQ</a>
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
        <div className="d-flex align-items-center">
          <FiSearch size={20} style={{ marginRight: "17px" }} />
          <Link to="/user">
            <FiUser color="#000" size={20} style={{ marginRight: "17px" }} />
          </Link>
          <FiHeart size={20} style={{ marginRight: "17px" }} />
          <div
            className="cart-icon"
            onClick={() => navigate("/cart")}
            style={{ cursor: "pointer", position: "relative" }}
          >
            <FiShoppingCart size={20} style={{ marginRight: "17px" }} />
            {cartCount > 0 && (
              <span
                style={{
                  position: "absolute",
                  top: "-5px",
                  right: "-10px",
                  backgroundColor: "red",
                  color: "white",
                  borderRadius: "50%",
                  padding: "2px 6px",
                  fontSize: "12px",
                }}
              >
                {cartCount}
              </span>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;