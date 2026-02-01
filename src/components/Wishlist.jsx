import React, { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { FiTrash, FiShoppingCart } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Wishlist = () => {
  const navigate = useNavigate();
  const { wishlist, removeFromWishlist, addToCart } = useContext(CartContext);
  const [activeProduct, setActiveProduct] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);

  const handleAddToCart = (product) => {
    if ((product.colors?.length && !selectedColor) || (product.sizes?.length && !selectedSize)) {
      Swal.fire({
        icon: "warning",
        title: "Select product options",
        text: "Please choose color and size",
        confirmButtonText: "Choose now",
      }).then(() => setActiveProduct(product));
      return;
    }
    const { colors, sizes, ...cleanProduct } = product;
    addToCart({
      ...cleanProduct,
      quantity: 1,
      selectedColor,
      selectedSize,
    });

    // Reset modal state
    setActiveProduct(null);
    setSelectedColor(null);
    setSelectedSize(null);
  };

  if (wishlist.length === 0) {
    return (
      <div className="container py-5 text-center">
        <h4 className="fw-bold mb-3">Your Wishlist is Empty ❤️</h4>
        <p className="text-muted mb-4">Browse products and add your favorites here.</p>
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
            <img src={product.image} alt={product.name} style={{ width: "100px" }} />

            <div style={{ flex: 1, marginLeft: "20px" }}>
              <h6 className="text-uppercase font-jost">{product.name}</h6>
              <p className="mb-1 text-uppercase">{product.model}</p>
              <p className="fw-bold">₦{product.price.toLocaleString()}</p>

              <div className="d-flex justify-content-between mt-3">
                <button className="details-wlist"
                  onClick={() => setActiveProduct(product)}
                  style={{
                    backgroundColor: "#BD3A3A",
                    color: "#fff",
                    border: "none",
                    padding: "6px 15px",
                    borderRadius: "5px",
                    fontSize: "14px",
                    marginRight: "20px",
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

      {/* Modal for selecting variants */}
      {activeProduct && (
        <div className="modal-backdrop-custom">
          <div className="modal-content-custom">
            <h6 className="fw-bold mb-3">{activeProduct.name}</h6>

            {/* Color selection */}
            {activeProduct.colors?.length > 0 && (
              <div className="mb-3">
                <small className="fw-bold">Color</small>
                <div className="d-flex gap-2 mt-1">
                  {activeProduct.colors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color)}
                      style={{
                        width: "40px",
                        marginRight:'7px',
                        height: "40px",
                        borderRadius: "50%",
                        backgroundColor: color.hex,
                        border: selectedColor?.name === color.name ? "2px solid #FFF" : "2px solid #ddd",
                        cursor: "pointer",
                      }}
                      title={color.name}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Size selection */}
            {activeProduct.sizes?.length > 0 && (
              <div className="mb-3">
                <small className="fw-bold">Size</small>
                <div className="d-flex gap-2 mt-1">
                  {activeProduct.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`mr-2 font-jost btn btn-sm ${selectedSize === size ? "btn-dark" : "btn-outline-secondary"}`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="d-flex justify-content-end">
              <button
                className="btn btn-outline-secondary mr-2 btn-sm"
                onClick={() => {
                  setActiveProduct(null);
                  setSelectedColor(null);
                  setSelectedSize(null);
                }}
              >
                Cancel
              </button>
              <button className="btn btn-success btn-sm" onClick={() => handleAddToCart(activeProduct)}>
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Wishlist;
