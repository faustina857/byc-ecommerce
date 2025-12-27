import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { FiHeart, FiTrash } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);
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
          <div className="cart d-flex align-items-center justify-content-between">
            {/* Image */}
            <img src={product.image} alt={product.name} className="cart-img" />
            {/* Info */}
            <div>
              <h6>{product.name}</h6>
              <p>{product.model}</p>
              <p>{product.desc}</p>
              <button
                onClick={() => removeFromCart(product._id)}
                style={{
                  border: "none",
                  backgroundColor: "#BD3A3A",
                  color: "#fff",
                  padding: "5px 20px",
                  borderRadius: "5px",
                }}
              >
                <FiTrash /> Remove
              </button>
            </div>
            {/* Quantity controls */}
            <div className="text-center">
              <p className="mb-1">Quantity</p>
              <div className="d-flex align-items-center gap-2">
                <button
                  onClick={() =>
                    updateQuantity(product._id, Math.max(product.quantity - 1, 1))
                  }
                  style={{
                    backgroundColor: "#BD3A3A",
                    color: "#fff",
                    border: "none",
                    padding: "1px 15px",
                  }}
                >
                  -
                </button>
                <span className="mx-2 fw-bold">{product.quantity}</span>
                <button
                  onClick={() =>
                    updateQuantity(product._id, product.quantity + 1)
                  }
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
            </div>
            {/* Price */}
            <div className="text-end">
              <p>Unit Price</p>
              <h5 className="fw-bold">₦{product.price.toLocaleString()}</h5>
              <p>Total: ₦{(product.price * product.quantity).toLocaleString()}</p>
            </div>
          </div>
        </div>
      ))}
      {/* Cart Totals */}
      <hr />
      <div className="d-flex justify-content-between">
        <h6 className="fw-bold">Subtotal</h6>
        <h6 className="fw-bold">₦{subtotal.toLocaleString()}</h6>
      </div>
      <div className="d-flex justify-content-end mt-4">
        <button onClick={() => navigate("/allProducts")} className="mr-4 px-3"
          style={{border:"1px solid #BD3A3A",backgroundColor:"#fff",
          color:"#BD3A3A",borderRadius:"5px"}}>Continue Shopping</button>
        <button
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




// import React, { useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import { FiHeart,FiTrash } from "react-icons/fi";
// import Recently from "./Recently";
// import { CartContext } from "../context/CartContext";

// const Cart = () => {
//     const navigate = useNavigate(); 
//     const { cartItems, removeFromCart } = useContext(CartContext);
//   const [quantity, setQuantity] = useState(1);
//   const [isWishlisted, setIsWishlisted] = useState(false);



//   return (
//     <div className="container py-5">
//       <h5 className="mb-4 fw-bold">Cart {cartItems.length} item(s)</h5>
//        <hr style={{backgroundColor:"#F1EEEE",height:"2px", border:"none"}} className="mt-4" />
       
//       <div className="cart-card p-4 rounded">
//         <div className="cart">
//           {/* Image */}
//           <div className="">
//             <img src={product.image} className="cart-img"/>
//           </div>

//           {/* Product Info */}
//           <div className="">
//             <h6 style={{fontWeight:'700'}}>{product.name}</h6>
//             <p style={{fontWeight:'700'}}>{product.model}</p>
//             <p>{product.desc}</p>

//             <div className="d-flex cart-btn mt-3">
//               <button onClick={() => setIsWishlisted(!isWishlisted)} style={{border:"1px solid #BD3A3A",backgroundColor:"#fff",color:"#BD3A3A",
//                 padding:"5px 30px",borderRadius:"5px"}}><FiHeart className="mr-2" fill={isWishlisted ? "#BD3A3A" : "none"}/> Wishlist</button>
//               <button style={{border:"none",backgroundColor:'#BD3A3A',padding:"5px 30px",
//                 color:"#fff",borderRadius:"5px"}}> <FiTrash className="mr-2"/> Remove </button>
//             </div>
//           </div>
          

//           {/* Quantity */}
//           <div className="text-center">
//             <p className="mb-1">Quantity</p>

//             <div className="  align-items-center justify-content-center gap-2">
//               <button style={{backgroundColor:"#BD3A3A",color:"#fff",border:"none",padding:"1px 15px"}}
//                 onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>
//                 -</button>
//               <span className="mx-3" style={{fontWeight:"bold"}}>{quantity}</span>
//               <button style={{backgroundColor:"#BD3A3A",color:"#fff",border:"none",padding:"1px 15px"}}
//                onClick={() => setQuantity(quantity + 1)}> + </button>
//             </div>
//           </div>
//           <div style={{borderLeft:"1px solid #F1EEEE",height:"180px"}}></div>
//           {/* Price */}
//           <div className="text-end">
//             <p >Unit Price</p>
//             <h5 style={{fontWeight:"700"}}>₦{product.price.toLocaleString()}</h5>
//           </div>
//         </div>

//         {/* Divider */}
//         <hr style={{backgroundColor:"#F1EEEE",height:"2px", border:"none"}} className="mt-4" />

//         {/* Cart Totals */}
//         <div className="row mt-4">
//           <div className="col-md-6"></div>

//           <div className="col-md-6">
//             <h6 style={{fontWeight:"700"}}>CART TOTALS</h6>

//             <div className="d-flex justify-content-between mt-4">
//               <p>Subtotal</p>
//               <p >₦{product.price.toLocaleString()}</p>
//             </div>

//             <div className="d-flex justify-content-between">
//               <p className="fw-semibold">Total</p>
//               <p className="fw-bold">₦{product.price.toLocaleString()}</p>
//             </div>

//             <div className="d-flex cart-btn mt-4">
//               <button className="px-4" style={{border:"1px solid #BD3A3A",backgroundColor:"#fff",color:"#BD3A3A",
//                 padding:"5px 30px",borderRadius:"5px"}}
//               >Continue Shopping</button>

//               <button onClick={() => navigate("/checkout")} style={{border:"none",backgroundColor:'#BD3A3A',padding:"5px 30px",
//                 color:"#fff",borderRadius:"5px"}}>Proceed to Checkout
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     <Recently/>

//     </div>
//   );
// };

// export default Cart;
