import React, { useState, useContext } from "react";
import { FiShoppingCart, FiHeart, FiChevronLeft } from "react-icons/fi";
import { AiFillStar } from "react-icons/ai";
import CustomerReviews from "./CustomerReviews";
import Recently from "./Recently";
import { CartContext } from "../context/CartContext";
import Swal from "sweetalert2";
const ProductDetails = ({ product, onBack }) => {
  const { addToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const productImages = product?.images?.length > 0 ? product.images : [product.image];
  const handleQuantityChange = (type) => {
    if (type === "increase") {
      setQuantity((q) => q + 1);
    } else if (type === "decrease" && quantity > 1) {
      setQuantity((q) => q - 1);
    }
  };
  const handleAddToCart = () => {
    // :white_check_mark: Validation
    if (!selectedSize) {
      Swal.fire({
        icon: "warning",
        title: "Select a Size",
        text: "Please choose a size before adding to cart.",
      });
      return;
    }
    if (!selectedColor) {
      Swal.fire({
        icon: "warning",
        title: "Select a Color",
        text: "Please choose a color before adding to cart.",
      });
      return;
    }
    // :white_check_mark: If both are selected, proceed
    addToCart({
      ...product,
      quantity,
      selectedColor,
      selectedSize,
    });
  };
  return (
    <div>
      <button onClick={onBack} className="bnhg">
        <FiChevronLeft size={20} /> Back to Products
      </button>
      <div className="container bg-white rounded-lg shadow productsD">
        <div>
          <img
            className="d-img"
            src={productImages[currentImageIndex]}
            alt={product.name}
          />
          {productImages.length > 1 && (
            <div className="grid grid-cols-4 gap-3">
              {productImages.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={
                    currentImageIndex === index
                      ? "border-red-600 scale-105"
                      : "border-gray-200 hover:border-gray-300"
                  }
                >
                  <img src={img} alt={`${product.name} ${index + 1}`} />
                </button>
              ))}
            </div>
          )}
        </div>
        <div>
          <h5 style={{ fontWeight: "700" }}>{product.name}</h5>
          <p style={{ fontWeight: "700" }}>{product.model}</p>
          {product.description && <p>{product.description}</p>}
          {product.rating && (
            <div className="flex items-center gap-2 mb-6">
              {[...Array(5)].map((_, i) => (
                <AiFillStar key={i} style={{ color: "#FB8200" }} />
              ))}
              <span
                style={{
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#5E6366",
                  marginLeft: "7px",
                }}
              >
                {product.rating}
              </span>
            </div>
          )}
          <hr style={{ backgroundColor: "#F1EEEE", height: "2px", border: "none" }} />
          <span style={{ fontWeight: "700", marginBottom: "30px" }}>
            ₦{product.price.toLocaleString()}
          </span>
          {/* Sizes */}
          {product.sizes?.length > 0 && (
            <div>
              <label style={{ fontWeight: "600", fontSize: "16px" }}>Available Sizes</label>
              <div>
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    style={{
                      border: selectedSize === size ? "1px solid #FB8200" : "1px solid #ccc",
                      cursor: "pointer",
                      backgroundColor: "#FFF",
                      borderRadius: "5px",
                      padding: "5px 10px",
                      marginRight: "5px",
                    }}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}
          {/* Colors */}
          {product.colors?.length > 0 && (
            <div>
              <p style={{ fontWeight: "600", fontSize: "16px" }}>Available Colours</p>
              <div style={{ display: "flex", gap: "10px" }}>
                {product.colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color)}
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      backgroundColor: color.hex,
                      border:
                        selectedColor?.name === color.name
                          ? "2px solid #FB8200"
                          : "2px solid #ddd",
                      cursor: "pointer",
                    }}
                    title={color.name}
                  />
                ))}
              </div>
            </div>
          )}
          {/* Quantity and Wishlist */}
          <div style={{ display: "flex", gap: "30px", marginBottom: "15px" }}>
            <div>
              <button
                onClick={() => handleQuantityChange("decrease")}
                disabled={quantity <= 1}
                style={{
                  backgroundColor: "#BD3A3A",
                  color: "#fff",
                  border: "none",
                  padding: "1px 15px",
                }}
              >
                -
              </button>
              <span className="mx-2">{quantity}</span>
              <button
                onClick={() => handleQuantityChange("increase")}
                style={{
                  backgroundColor: "#BD3A3A",
                  color: "#fff",
                  border: "none",
                  padding: "1px 15px",
                }}
              >
                +
              </button>
            </div>
            <div>
              <button
                onClick={() => setIsWishlisted(!isWishlisted)}
                style={{
                  border: "1px solid #BD3A3A",
                  color: "#BD3A3A",
                  backgroundColor: "#fff",
                  padding: "4px 50px",
                  borderRadius: "5px",
                }}
              >
                <FiHeart
                  size={15}
                  fill={isWishlisted ? "#BD3A3A" : "none"}
                  className="mr-2"
                />
                Wishlist
              </button>
            </div>
          </div>
          {/* Add to Cart */}
          <button
            onClick={handleAddToCart}
            style={{
              border: "none",
              backgroundColor: "#BD3A3A",
              color: "#fff",
              padding: "5px 80px",
              borderRadius: "5px",
            }}
          >
            <FiShoppingCart size={16} className="mr-2" /> Add to Cart
          </button>
        </div>
      </div>
      {/* Description */}
      <div className="container shadow-sm px-3 py-5 mb-5 rounded">
        <h3 style={{ fontWeight: "700" }}>Product Description</h3>
        <hr style={{ backgroundColor: "#F1EEEE", height: "2px", border: "none" }} />
        <p style={{ fontSize: "13px" }}>{product.description}</p>
      </div>
      <CustomerReviews />
      <Recently />
    </div>
  );
};
export default ProductDetails;