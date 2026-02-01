import React, { useState, useContext, useEffect } from "react";
import { FiShoppingCart, FiHeart, FiChevronLeft } from "react-icons/fi";
import { AiFillStar } from "react-icons/ai";
import CustomerReviews from "./CustomerReviews";
import Recently from "./Recently";
import { CartContext } from "../context/CartContext";
import Swal from "sweetalert2";

const ProductDetails = ({ product, onBack }) => {
  const { addToCart, addToRecentlyViewed } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const { addToWishlist, removeFromWishlist, wishlist } = useContext(CartContext);

  useEffect(() => {
    if (product) {
      addToRecentlyViewed(product);
    }
  }, [product]);

  const isInWishlist = wishlist.some(
    item => item._id === product._id
    );

  const handleQuantityChange = (type) => {
    if (type === "increase") {
      setQuantity((q) => q + 1);
    } else if (type === "decrease" && quantity > 1) {
      setQuantity((q) => q - 1);
    }
  };
  const handleAddToCart = () => {
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
    
  const { colors, sizes, ...cleanProduct } = product;
    addToCart({
      ...cleanProduct,
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
          <img className="d-img"
               src={product.image}
               alt={product.name}/>
          
        </div>
        <div>
          <h5 style={{ fontWeight: "700",textTransform: "uppercase" }}>{product.name}</h5>
          <p style={{ fontWeight: "700", textTransform: "uppercase" }}>{product.model}</p>
          {product.description && <p>{product.description}</p>}
          {product.rating && (
            <div className="flex items-center gap-2 mb-6">
              {[...Array(5)].map((_, i) => (
                <AiFillStar key={i} style={{ color: i < Math.round(product.rating) ? "#FB8200" : "#CCC" }} />
              ))}
              <span style={{fontWeight: "500",fontSize: "16px",color: "#5E6366",marginLeft: "7px"}}>
                {product.rating}
              </span>
            </div>
          )}
          <hr style={{ backgroundColor: "#F1EEEE", height: "2px", border: "none" }} />
          <span style={{ fontWeight: "700", marginBottom: "30px" }}>
            ₦{product.price.toLocaleString()}
          </span>
          <div className="d-flex">
          {/* sizes */}
            <div className="prods-info">
            {product.sizes?.length > 0 && (
            <div>
              <label style={{ fontWeight: "600", fontSize: "16px" }}>Available Sizes</label>
              <div>
                {product.sizes.map((size) => (
                  <button className="font-jost" key={size} onClick={() => setSelectedSize(size)}
                    style={{ border: selectedSize === size ? "1px solid #BD3A3A" : "1px solid #ccc",
                      cursor: "pointer",backgroundColor: "#FFF",borderRadius: "5px",fontWeight:"500",
                      padding: "5px 10px",marginRight: "5px"}}>
                   {size}
                  </button>
                ))}
              </div>
            </div>
          )}
          </div>
          <div>
            {product.colors?.length > 0 && (
            <div>
              <p className="mb-2" style={{ fontWeight: "600", fontSize: "16px" }}>Available Colours</p>
              <div style={{ display: "flex", gap: "10px" }}>
                {product.colors.map((color) => (
                  <button key={color.name} onClick={() => setSelectedColor(color)}
                    style={{ width: "40px",height: "40px",
                      borderRadius: "50%", backgroundColor: color.hex,
                      border: selectedColor?.name === color.name ? "2px solid #FB8200" : "2px solid #ddd",
                      cursor: "pointer",
                    }}
                    title={color.name}
                  />
                ))}
              </div>
            </div>
          )}
          </div>
          </div>
          <div style={{ display: "flex", gap: "30px", marginBottom: "20px",marginTop:'15px' }}>
            <div className="detail-btn">
              <button onClick={() => handleQuantityChange("decrease")} disabled={quantity <= 1}
                style={{backgroundColor: "#BD3A3A",color: "#fff", border: "none", padding: "1px 15px",}}>-
              </button>
              <span className="mx-2">{quantity}</span>
              <button onClick={() => handleQuantityChange("increase")}
                style={{ backgroundColor: "#BD3A3A",color: "#fff",border: "none",padding: "1px 15px"}}>
                +
              </button>
            </div>
            <div>
              <button onClick={() => isInWishlist
                    ? removeFromWishlist(product._id)
                    : addToWishlist(product)} 
                     className="details-wlist detail-btn"
                style={{border: "1px solid #BD3A3A",color: "#BD3A3A", backgroundColor: "#fff",
                  padding: "7px 40px",borderRadius: "5px"}}>
                <FiHeart size={15} fill={isInWishlist ? "#BD3A3A" : "none"} className="mr-2"/>
                Wishlist
              </button>
            </div>
          </div>
          <button onClick={handleAddToCart} className="details-wlist"
            style={{ border: "none",backgroundColor: "#BD3A3A",color: "#fff",padding: "5px 80px", borderRadius: "5px"}}
          ><FiShoppingCart size={16} className="mr-2" /> Add to Cart
          </button>
        </div>
      </div>
      <div className="container shadow-sm px-3 py-5 mb-5 rounded">
        <h3 className="ships-text" style={{ fontWeight: "700" }}>Product Description</h3>
        <hr style={{ backgroundColor: "#F1EEEE", height: "2px", border: "none" }} />
        <p style={{ fontSize: "13px" }}>{product.description}</p>
      </div>
      <CustomerReviews />
      <Recently />
    </div>
  );
};
export default ProductDetails;