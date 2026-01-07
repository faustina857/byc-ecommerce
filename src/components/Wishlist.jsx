// src/pages/Wishlist.jsx
import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { FiTrash, FiShoppingCart } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Wishlist = () => {
  const navigate = useNavigate();

  const {
    wishlist,
    removeFromWishlist,
    addToCart,
  } = useContext(CartContext);

  if (wishlist.length === 0) {
    return (
      <div className="container py-5 text-center">
        <h4 className="fw-bold mb-3">Your Wishlist is Empty ❤️</h4>
        <p className="text-muted mb-4">
          Browse products and add your favorites here.
        </p>
        <button
          onClick={() => navigate("/allProducts")}
          style={{
            backgroundColor: "#BD3A3A",
            color: "#fff",
            border: "none",
            padding: "10px 25px",
            borderRadius: "5px",
          }}
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <h5 className="fw-bold mb-4">
        Wishlist ({wishlist.length} item{wishlist.length > 1 ? "s" : ""})
      </h5>
      <hr />

      {wishlist.map((product) => (
        <div key={product._id} className="cart-card p-4 rounded mb-3 shadow-sm">
          <div className="d-flex align-items-center justify-content-between flex-wrap">
            {/* Image */}
            <img
              src={product.image}
              alt={product.name}
              className="cart-img"
              style={{ width: "100px" }}
            />

            {/* Info */}
            <div style={{ flex: 1, marginLeft: "20px" }}>
              <h6 className="fw-bold">{product.name}</h6>
              <p className="mb-1">{product.model}</p>
              <p className="fw-bold">₦{product.price.toLocaleString()}</p>

              <div className="d-flex mt-3">
                <button
                  onClick={() => addToCart({ ...product, quantity: 1 })}
                  style={{
                    backgroundColor: "#BD3A3A",
                    color: "#fff",
                    border: "none",
                    padding: "6px 15px",
                    borderRadius: "5px",
                    fontSize: "14px",
                    marginRight: "20px"
                  }}
                >
                  <FiShoppingCart className="mr-2" />
                  Add to Cart
                </button>

                <button
                  onClick={() => removeFromWishlist(product._id)}
                  style={{
                    backgroundColor: "#fff",
                    color: "#BD3A3A",
                    border: "1px solid #BD3A3A",
                    padding: "6px 15px",
                    borderRadius: "5px",
                    fontSize: "14px",
                  }}
                >
                  <FiTrash className="mr-2" />
                  Remove
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Wishlist;
