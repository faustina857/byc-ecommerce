import React from 'react'
import {Mcard, Paypal, Visa, Icon1, Icon2, Icon3, Icon4} from '../assets'
import { FiMail, FiPhone, FiArrowRight } from "react-icons/fi";

const Footer = () => {
  return (
    <>
      
<footer className="text-center py-5" style={{backgroundColor:"#212121", color:"white"}}>
  
  <section className="">
    <div className="container text-center text-md-start mt-5 mb-5">
      <div className="row">
        <div className="col-md-2 text-left font-jost">
          <p className="fhead">Company Info</p>
          <p><a href="#!" className="text-reset flink">About Us</a></p>
          <p><a href="#!" className="text-reset flink">Affiliate</a></p>
          <p><a href="#!" className="text-reset flink">Fashion Blogger</a></p>
        </div>

        <div className="col-md-2 text-left font-jost">
          <p className="fhead">Help & Support</p>
          <p><a href="#!" className="text-reset flink">Shipping Info</a></p>
          <p><a href="#!" className="text-reset flink">Refunds</a></p>
          <p><a href="#!" className="text-reset flink">How to Order</a></p>
          <p><a href="#!" className="text-reset flink">How to Track</a></p>
          <p><a href="#!" className="text-reset flink">Size Guides</a></p>
        </div>

        <div className="col-md-2 text-left font-jost">
          <p className="fhead"> Customer Care</p>
          <p><a href="#!" className="text-reset flink">Contact Us</a></p>
          <p><a href="#!" className="text-reset flink">Payment Methods</a></p>
           <img src={Paypal} alt="" className='mr-2'/>
           <img src={Visa} alt="" className='mr-2'/>
           <img src={Mcard} alt="" />
        </div>
        <div className="col-md-2"></div>

        <div className="col-md-4 text-left">
            <form action="">
                <div className="form-group position-relative fiel w-20 font-jost">
                <label htmlFor="exampleInputEmail1" className='fhead'>Signup For The Latest News</label>
                <input type="email" className="form-control rounded-0 my-2" id='exampleInputEmail1' placeholder="Enter your email"/>
                <FiArrowRight style={{position: "absolute", top: "70%", right: "12px",
                transform: "translateY(-50%)", cursor: "pointer"}}/>
                </div>
            </form>
            <p className='flink font-nunito'><FiMail className='mr-2'/>ibycafrica@gmail.com </p>
          <p className='flink font-nunito'><FiPhone className='mr-2'/>+2348101375376 ; +2349053403403 </p>
        </div>
      </div>
    </div>
  </section>
   <div className=''>
    <a className="text-white btn-floating m-2 socials"
        href="#!"
        role="button"><img src={Icon1} alt="" /></a>
      <a className=" btn-floating m-2"
        href="#!"
        role="button"><img src={Icon2} alt="" /></a>
      <a className="text-white btn-floating m-2"
        href="#!"
        role="button"><img src={Icon3} alt="" /></a>
      <a className="text-white btn-floating m-2"
        href="#!"
        role="button"><img src={Icon4} alt="" /></a>
   </div>
   <div className="container">
    <hr style={{backgroundColor:"#fff"}}/>
   </div>
  <p className='hr-text font-jost'>All rights Reserved  copyright bycafrica 2021.</p>
</footer>

    </>
  )
}

export default Footer
