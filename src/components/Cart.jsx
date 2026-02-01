import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { FiHeart, FiTrash } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity,addToWishlist, removeFromWishlist, wishlist } = useContext(CartContext);
  const isInWishlist = (id) => wishlist.some(item => item._id === id);

  const navigate = useNavigate();
  // Calculate totals
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="container py-5">
      <h5 className="mb-4 fw-bold">Cart {cartItems.length} item(s)</h5>
      <hr />
      {cartItems.map((product) => (
        <div key={product._id} className="cart-card p-4 rounded mb-3">
          <div className="cart d-flex align-items-center justify-content-between ">
            <img src={product.image} alt={product.name} className="cart-img" />
            <div className="cart-text ships-text">
              <h6 style={{textTransform:'uppercase',fontWeight:'700'}}>{product.name}</h6>
              <p style={{textTransform:'uppercase',fontWeight:'700'}}>{product.model}</p>
              <p>{product.description}</p>
               <button className='mr-3 cart-btns' onClick={(e) => { e.stopPropagation(); isInWishlist(product._id)
                                 ? removeFromWishlist(product._id)
                                 : addToWishlist(product); }}
                             style={{backgroundColor:"#fff",color:"#BD3A3A",border:"1px solid #BD3A3A",borderRadius:"5px",padding:"7px 10px",fontWeight:"500",fontSize:"13px"}}>
                               <FiHeart fill={isInWishlist(product._id) ? "#BD3A3A" : "none"} className='mr-2'/>Wishlist</button>
              <button className="cart-btns" onClick={() => removeFromCart(product._id)}
                style={{border: "none",backgroundColor: "#BD3A3A",
                  color: "#fff",padding: "5px 20px",
                  borderRadius: "5px"}}><FiTrash /> Remove
              </button>
            </div>
            {/* Quantity controls */}
            <div className="text-center">
              <p className="mb-1">Quantity</p>
              <div className="d-flex align-items-center gap-2">
                <button onClick={() => updateQuantity(product._id, Math.max(product.quantity - 1, 1))}
                  style={{backgroundColor: "#BD3A3A", color: "#fff",
                    border: "none", padding: "1px 15px",
                  }}> -
                </button>
                <span className="mx-2 fw-bold">{product.quantity}</span>
                <button onClick={() => updateQuantity(product._id, product.quantity + 1)}
                  style={{backgroundColor: "#BD3A3A",color: "#fff",
                    border: "none",padding: "1px 15px",
                  }}> +
                </button>
              </div>
            </div>
            {/* Price */}
            <div className="text-end cart-price">
              <p style={{textTransform:'uppercase',fontWeight:'600'}}>Unit Price:</p>
              <p className="">₦{product.price.toLocaleString()}</p>
              <p  style={{textTransform:'uppercase',fontWeight:'600'}}>Total: ₦{(product.price * product.quantity).toLocaleString()}</p>
            </div>
              <hr className="cart-hr"/>

          </div>
        </div>
      ))}
      {/* Cart Totals */}
      <hr />
      <div className="row">
        <div className="col-md-7"></div>
        <div className="col-md-5">
        <h6 style={{fontWeight:'700'}}>CART TOTALS</h6>
        <div className="d-flex justify-content-between">
        <p>Subtotal</p>
        <p style={{fontWeight:'600'}}>₦{subtotal.toLocaleString()}</p></div>
      </div>
      </div>
      <div className="d-flex justify-content-end mt-4">
        <button onClick={() => navigate("/allProducts")} className="mr-4 px-3 cart-btns"
          style={{border:"1px solid #BD3A3A",backgroundColor:"#fff",
          color:"#BD3A3A",borderRadius:"5px"}}>Continue Shopping</button>
        <button className="cart-btns"
          onClick={() => navigate("/checkout")}
          style={{
            border: "none",backgroundColor: "#BD3A3A",padding: "10px 30px",
            color: "#fff",borderRadius: "5px",}}>Proceed to Checkout
        </button>
      </div>
    </div>
  );
};
export default Cart;