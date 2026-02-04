import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import Swal from "sweetalert2";
import axios from 'axios'

const CheckoutPage = () => {
  const { cartItems, clearCart } = useContext(CartContext);
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState("");

  const [isLoggedIn, setIsLoggedIn] = useState(false);

   useEffect(() => {
    // Check if user is logged in
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  // Calculate totals
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const deliveryFee = 800; // Fixed delivery fee
  const total = subtotal + deliveryFee;



  // Form state for shipping address
  const [shippingInfo, setShippingInfo] = useState({
     fullName: "",
     companyName: "", // optional 
     country: "",
     city: "",
     state: "",
     address: "",
     phone: "",
     emailAddress: "", 
     landMark: "", 
    });
    
    // Handle input changes 
    const handleInputChange = (e) => { 
      setShippingInfo({ 
        ...shippingInfo, [e.target.id]: e.target.value, 
      }); };
       // Validate required fields (companyName excluded) 
    const validateForm = () => { 
      const { fullName, country, city, state, address, phone, emailAddress ,landMark} = shippingInfo; 
    if (!fullName || !country || !city || !state || !address || !phone || !emailAddress || !landMark) {
       return false; 
      } return true; }; 

      // Handle form submission 
    const handleSubmit = async (e) => {
       e.preventDefault(); if (!validateForm()) { 
        Swal.fire({
           icon: "warning",
           title: "Missing Fields", 
           text: "Please fill in all required fields.", 
          }); return; } 
          try {
             const token = localStorage.getItem("token"); // if route is protected 

             const payload = { ...shippingInfo }; 
             if (!payload.companyName) { 
              delete payload.companyName; 
            }

             const res = await axios.post( "https://byc-ecommerce-backend.onrender.com/api/byc-stores/customer/add-new-customer", 
              shippingInfo, 
              { 
                headers: { 
                  "Content-Type": "application/json", 
                  ...(token && { "x-auth-token": token }),
                   // only add if token exists 
                   }, 
                  } 
                ); 
                   console.log("Customer snapshot saved:", res.data); 
                   localStorage.setItem("customer", res?.data?.customerId); 
                   Swal.fire({ 
                    icon: "success", 
                    title: "Success", 
                    text: "Shipping information saved", 
                  }); 
                } catch (error) {
                   console.error("Customer snapshot error:", error.response?.data || error.message);
                    Swal.fire({
                       icon: "error",
                       title: "Error", 
                       text: error.response?.data?.message || "Failed to save shipping info", 
                      }); 
                    } 
                  };


  // Handle place order
  const handlePlaceOrder = async (e) => {
    e.preventDefault();

    if (!validateForm()) { 
        Swal.fire({
           icon: "warning",
           title: "Missing Fields", 
           text: "Please fill in all required fields.", 
          }); return; } 

    if (!paymentMethod) {
      Swal.fire({
        icon:'warning',
        title:'Select payment method',
        text:'Please choose a payment method'
      })
      return;
    }

     const token = localStorage.getItem("token");
    if (!token) {
      Swal.fire({
        icon: "warning",
        title: "Login Required",
        text: "You must be logged in to place an order!",
        confirmButtonText: "Login",
      }).then(() => {
        localStorage.setItem("redirectAfterLogin", window.location.pathname);
      // Redirect user to login page if they click "Login"
      window.location.href = "/user"; 
    });
    return;
    }

  try {
    const token = localStorage.getItem("token");    
    if (cartItems.length === 0) {
      Swal.fire({ icon: "error", text: "Cart is empty" });
      return;
    }

  const orderItems = cartItems.map((item) => ({
    productId: item._id,
    name: item.name,
    price: item.price,
    quantity: item.quantity,
    color: item.selectedColor?.name,
    size: item.selectedSize,
    image: item.image,
    subTotal: item.price * item.quantity
  }));

  const totalAmount = orderItems.reduce(
      (sum, item) => sum + item.subTotal,
      0
    );

    console.log("Order Items:", orderItems);

    const customerId = localStorage.getItem('customer')

   const orderPayload = { 
    customerId: customerId, 
    customerSnapshot: { 
      ...shippingInfo, 
      ...(shippingInfo.companyName ? { 
        companyName: shippingInfo.companyName 
      } : {}
    ), // only include if not empty 
    }, 
      items: orderItems,
      totalAmount, 
    };

    const response = await axios.post(
      "https://byc-ecommerce-backend.onrender.com/api/byc-stores/order/create",
      orderPayload,
      {
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": token,
        },
      }
    );

    if (response.data) {
      Swal.fire({
        icon: "success",
        title:"Order Placed!",
        text: "Redirecting to payment..."
      }).then(() => {
          // ✅ Clear the cart now that order succeeded
        clearCart();

            localStorage.setItem("lastOrderId", response.data._id);
            window.location.href = response.data.authorizationUrl;
      });
    }



  } catch (error) {
    console.error(
      "Order error:",
      error.response?.data || error.message
    );
     Swal.fire({
      icon: "error",
      title: "Order Failed",
      text: error.response?.data?.message || "Something went wrong",
    });
  }
    

  };

  return (
    <div className="container check-con">
      {/* ORDER SUMMARY */}
      <div className="card p-5 mb-5 border-0 shadow-sm">
        <h5 style={{ fontWeight: "700" }} className="mb-4">
          Order Summary {cartItems.length} item(s)
        </h5>
        <hr style={{ backgroundColor: "#F1EEEE", height: "2px", border: "none" }} />

        {/* MAP THROUGH CART ITEMS */}
        {cartItems.map((product) => (
          <div key={product._id} className="row align-items-center mb-4">
            <div className="col-md-2 col-4">
              <img
                src={product.image}
                alt={product.name}
                className="img-fluid rounded pic-thumb"
              />
            </div>

            <div className="col-md-5 col-8">
              <h6 style={{ fontWeight: "700" }} className="mb-1 text-uppercase checks-text">
                {product.name}
              </h6>
              <p style={{ fontWeight: "700" }} className="mb-1 text-uppercase checks-text">
                {product.model}
              </p>
              <p className="checks-text">{product.description}</p>
              <h5 style={{ fontWeight: "700" }} className="mt-3 checks-text">
                ₦{product.price.toLocaleString()}
              </h5>
              <p className="mb-0">
                Quantity: <strong>{product.quantity}</strong>
              </p>

              {product.selectedSize && (
                <p className="mb-0">Size: <strong>{product.selectedSize}</strong></p>
              )}
              {product.selectedColor && (
                <p className="mb-0">Color: <strong>{product.selectedColor.name}</strong></p>
              )}
            </div>

            <div className="checkout-hr"></div>

            <div className="col-md-4">
              <h6 style={{ fontWeight: "700" }}>
                Item Total: ₦{(product.price * product.quantity).toLocaleString()}
              </h6>
            </div>
          </div>
        ))}

        <button onClick={() => navigate("/allProducts")}
          style={{ backgroundColor: "#BD3A3A", color: "#fff" }}
          className="btn px-5 mt-3">
          Modify Cart
        </button>

        <hr style={{ backgroundColor: "#F1EEEE", height: "2px", border: "none" }} />

        <div className="row">
          <div className="col-md-8"></div>
          <div className="col-md-4">
            <div className="d-flex justify-content-between mb-2">
              <span className="fw-bold">Subtotal</span>
              <span>₦{subtotal.toLocaleString()}</span>
            </div>
            <div className="d-flex justify-content-between mb-2">
              <span className="fw-bold">Delivery fee</span>
              <span>₦{deliveryFee.toLocaleString()}</span>
            </div>

            <hr />
            <div className="d-flex justify-content-between">
              <h5 style={{ fontWeight: "700" }}>Total</h5>
              <h6 style={{ fontWeight: "700" }}>₦{total.toLocaleString()}</h6>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 mt-5 mb-4">
          <h5 style={{ fontWeight: "700" }} className="mb-2 ships-text">
            SHIPPING ADDRESS
          </h5>
          <hr
            style={{ backgroundColor: "#F1EEEE", height: "2px", border: "none", marginBottom: "25px" }}
          />

          <div className="card p-4 border-0 shadow-sm">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="fullName">Full Name *</label>
                <input id="fullName" type="text" style={{ border: "1px solid #BD3A3A" }}
                  className="form-control" value={shippingInfo.fullName} onChange={handleInputChange} required/>
              </div>

              <div className="mb-3">
                <label htmlFor="companyName">Company name (optional)</label>
                <input id="companyName" type="text" style={{ border: "1px solid #BD3A3A" }}
                  className="form-control" value={shippingInfo.companyName} onChange={handleInputChange}/>
              </div>

              <div className="mb-3">
                <label htmlFor="country">Country / Region *</label>
                <input id="country" type="text" style={{ border: "1px solid #BD3A3A" }}
                  className="form-control" value={shippingInfo.country} onChange={handleInputChange} required/>
              </div>

              <div className="mb-3">
                <label htmlFor="city">Town / City *</label>
                <input id="city" type="text" style={{ border: "1px solid #BD3A3A" }}
                  className="form-control" value={shippingInfo.city} onChange={handleInputChange} required/>
              </div>

              <div className="mb-3">
                <label htmlFor="state">State *</label>
                <input id="state" type="text" style={{ border: "1px solid #BD3A3A" }}
                  className="form-control" value={shippingInfo.state} onChange={handleInputChange} required/>
              </div>

              <div className="mb-3">
                <label htmlFor="address">Address *</label>
                <input id="address" type="text" style={{ border: "1px solid #BD3A3A" }} className="form-control"
                  value={shippingInfo.address} onChange={handleInputChange} required />
              </div>

              <div className="mb-3">
                <label htmlFor="phone">Phone *</label>
                <input id="phone" type="tel" style={{ border: "1px solid #BD3A3A" }}
                  className="form-control" value={shippingInfo.phone} onChange={handleInputChange}
                  required/>
              </div>

              <div className="mb-3">
                <label htmlFor="emailAddress">Email address *</label>
                <input id="emailAddress" type="email"
                  style={{ border: "1px solid #BD3A3A" }}
                  className="form-control" value={shippingInfo.emailAddress} onChange={handleInputChange}
                  required />
              </div>

              <div className="mb-3">
                <label htmlFor="landmark">Landmark *</label>
                <input id="landMark" type="text"
                  style={{ border: "1px solid #BD3A3A" }}
                  className="form-control" value={shippingInfo.landMark}
                  onChange={handleInputChange} required/>
              </div>

              <button type="submit"
                style={{ backgroundColor: "#BD3A3A", color: "#fff" }}
                className="btn w-100"
              > Save Shipping Info
              </button>
            </form>
          </div>
        </div>

        <div className="col-md-1"></div>

        <div className="col-md-5 mt-5">
          <h5 style={{ fontWeight: "700" }} className="mb-3 ships-text">
            CHECKOUT
          </h5>
          <hr
            style={{ backgroundColor: "#F1EEEE", height: "2px", border: "none", marginBottom: "25px" }}
          />

          <div style={{ backgroundColor: "#FFF8F8" }} className="card p-4 border-0">
            <div className="p-3 rounded mb-3">
              <div className="form-check">
                <input className="form-check-input" id="bankTransfer" type="radio"
                  name="paymentMethod" value="bank_transfer"
                  checked={paymentMethod === "bank_transfer"}
                  onChange={(e) => setPaymentMethod(e.target.value)} />
                <label className="form-check-label fw-semibold" htmlFor="bankTransfer">
                  Direct bank transfer
                </label>
              </div>
              {paymentMethod === "bank_transfer" && (
                <p className="bg-light p-3 mt-3 rounded small">
                  Make your payment directly into our bank account. <br />
                  Please use your Order ID as the payment reference. <br />
                  Your order will not be shipped until the funds have cleared in our account.
                </p>
              )}
            </div>

            <div className="p-3 rounded mb-3">
              <div className="form-check">
                <input className="form-check-input" id="onlinePayment"
                  type="radio" name="paymentMethod" value="online_payment"
                  checked={paymentMethod === "online_payment"}
                  onChange={(e) => setPaymentMethod(e.target.value)}/>
                <label className="form-check-label fw-semibold" htmlFor="onlinePayment">
                  Secured Online Payment
                </label>
              </div>

              {paymentMethod === "online_payment" && (
                <div className="mt-2">
                  <img
                    src="https://res.cloudinary.com/dgwg6d5gv/image/upload/v1764773405/image_16_qceodn.png"
                    style={{ width: "150px" }}
                    alt="Payment methods"/>
                </div>
              )}
            </div>

            <p style={{ fontSize: "12px" }} className="mt-4">
              Your personal data will be used to process your order, support your experience
              throughout <br />
              this website, and for other purposes described in our privacy policy.
            </p>
          </div>

          <button onClick={handlePlaceOrder}
            style={{ backgroundColor: "#BD3A3A", color: "#fff" }}
            className="btn w-100 mt-4 mb-4"
          >
            Place Order - ₦{total.toLocaleString()}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;