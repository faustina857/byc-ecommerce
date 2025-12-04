import React, { useState } from "react";

const CheckoutPage = () => {

  return (
    <div className="container py-5">

      {/* ORDER SUMMARY */}
      <div className="card p-5 mb-5 border-0 shadow-sm">
        <h5 style={{fontWeight:"700"}} className=" mb-4">Order Summary 1 item(s)</h5>
         <hr style={{backgroundColor:"#F1EEEE",height:"2px", border:"none"}}/>
        <div className="row align-items-center">

          {/* IMAGE */}
          <div className="col-md-2">
            <img
              src="https://res.cloudinary.com/dgwg6d5gv/image/upload/v1764710370/Image_mrxtiv.png"
              alt="product"
              className="img-fluid rounded"
            />
          </div>

          {/* PRODUCT INFO */}
          <div className="col-md-5">
            <h6 style={{fontWeight:"700"}} className="mb-1">MEN BOXERS</h6>
            <p style={{fontWeight:"700"}} className=" mb-1">BYC 1166</p>
            <p className="">100% Cotton 12 Pieces Of Mens Boxer</p>

            <h5 style={{fontWeight:"700"}} className="mt-3">₦2,800.00</h5>
            <p className="mb-0"> Quantity: <strong>1</strong></p>

            <button style={{backgroundColor:"#BD3A3A",color:"#fff"}} className="btn px-5 mt-3">Modify Cart</button>
          </div>
           <div style={{borderLeft:"1px solid #F1EEEE",height:"180px"}}></div>
          {/* TOTALS */}
          <div className="col-md-4">
            <div className="d-flex justify-content-between mb-2">
              <span className="fw-bold">Subtotal</span>
              <span>₦2,800.00</span>
            </div>
            <div className="d-flex justify-content-between mb-2">
              <span className="fw-bold">Delivery fee</span>
              <span>₦800.00</span>
            </div>

            <hr />
            <div className="d-flex justify-content-between">
              <h5 style={{fontWeight:"700"}}>Total</h5>
              <h6 style={{fontWeight:"700"}}>₦3,600.00</h6>
            </div>
          </div>
        </div>
      </div>

      {/* SHIPPING + CHECKOUT */}
      <div className="row">
      
        {/* SHIPPING ADDRESS */}
        <div className="col-md-6 mt-5 mb-4">
            <h5 style={{fontWeight:"700"}} className="mb-2">SHIPPING ADDRESS</h5>
            <hr style={{backgroundColor:"#F1EEEE",height:"2px", border:"none",marginBottom:"25px"}}/>
              
          <div className="card p-4 border-0 shadow-sm">
            <form>
              <div className="mb-3">
                <label htmlFor="fullName">Full Name</label>
                <input id="fullName" type="text" style={{border:"1px solid #BD3A3A"}} className="form-control" />
              </div>

              <div className="mb-3">
                <label htmlFor="companyName">Company name (optional)</label>
                <input id="companyName" type="text" style={{border:"1px solid #BD3A3A"}} className="form-control"  />
              </div>

              <div className="mb-3">
                <label htmlFor="country">Country / Region</label>
                <input id="country" type="text" style={{border:"1px solid #BD3A3A"}} className="form-control" />
              </div>

              <div className="mb-3">
                <label htmlFor="Town">Town / City</label>
                <input id="town" type="text" style={{border:"1px solid #BD3A3A"}} className="form-control" />
              </div>

                <div className="mb-3">
                  <label htmlFor="state">State</label>
                  <input id="state" type="text" style={{border:"1px solid #BD3A3A"}} className="form-control" />
                </div>
                <div className="mb-3">
                  <label htmlFor="address">Address</label>
                  <input id="address" type="text" style={{border:"1px solid #BD3A3A"}} className="form-control" />
                </div>
            
              <div className="mb-3">
                <label htmlFor="phone">Phone</label>
                <input id="phone" type="tel" style={{border:"1px solid #BD3A3A"}} className="form-control" />
              </div>

              <div className="mb-3">
                <label htmlFor="emailAddress">Email address</label>
                <input id="email" type="email" style={{border:"1px solid #BD3A3A"}} className="form-control" />
              </div>
              <div className="mb-3">
                <label htmlFor="landMark">Landmark</label>
                <input id="landMark" type="text" style={{border:"1px solid #BD3A3A"}} className="form-control" />
              </div>
              <button style={{backgroundColor:"#BD3A3A",color:"#fff"}} className="btn w-100">Submit</button>
            </form>
          </div>
        </div>
<div className="col-md-1"></div>
        {/* PAYMENT CHECKOUT */}
        <div className="col-md-5 mt-5">
          <h5 style={{fontWeight:"700"}} className="mb-3">CHECKOUT</h5>
          <hr style={{backgroundColor:"#F1EEEE",height:"2px", border:"none",marginBottom:"25px"}}/>

          <div style={{backgroundColor:"#FFF8F8"}} className="card p-4 border-0">

            {/* BANK TRANSFER */}
            <div className="p-3 rounded mb-3">
              <div className="form-check">
                <input className="form-check-input" id="bankTransfer" type="radio"/>
                <label className="form-check-label fw-semibold" htmlFor="bankTransfer">
                  Direct bank transfer</label>
              </div>

                <p className="bg-light p-3 mt-3 rounded small">
                  Make your payment directly into our bank account. <br />
                  Please use your Order ID as the payment reference. <br />
                  Your order will not be shipped until the funds have cleared in our account.
                </p>
            </div>

            {/* ONLINE PAYMENT */}
            <div className="d-flex p-3 rounded mb-3">
              <div className="form-check">
                <input className="form-check-input" id="onlinePayment" type="radio"/>
                <label className="form-check-label fw-semibold" htmlFor="onlinePayment">
                  Secured Online Payment</label>
              </div>

                <div className="mt-2 ml-2">
                  <img src="https://res.cloudinary.com/dgwg6d5gv/image/upload/v1764773405/image_16_qceodn.png"
                   style={{width:"150px"}}/>
                </div>
            </div>

            <p style={{fontSize:"12px"}} className="mt-4">
              Your personal data will be used to process your order, support your experience throughout <br /> 
this website, and for other purposes described in our privacy policy.
            </p>

          </div>
            <button style={{backgroundColor:"#BD3A3A",color:"#fff"}} className="btn w-100 mt-4">Place Order</button>

        </div>
      </div>

    </div>
  );
};

export default CheckoutPage;

