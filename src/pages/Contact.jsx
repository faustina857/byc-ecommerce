import React from 'react'
import { Rectangle, Location, Call, Email } from '../assets'
import Recently from '../components/Recently'

const Contact = () => {
  return (
    <>
    <div className="container">
        <h1 className='c-head font-jost text-center'>CONTACT US</h1>
        <img src={Rectangle} alt="" className='w-100'/>
        <div className="row py-5 c-row" style={{backgroundColor:"#FBFBFB"}}>
            <div className="col-md-4 d-flex g-2">
                <img src={Location} alt="" className='c-icon'/>
                <div>
                    <h5>ADDRESS</h5>
                    <p>( Head Office ) <br />
                    175 Cameroun Road Aba, Abia State.
                    </p>
                </div>
            </div>
            <div className="col-md-4 d-flex g-2">
                <img src={Call} alt="" className='c-icon'/>
                <div>
                    <h5>PHONE</h5>
                    <p>08101375376 09053403403</p>
                </div>
            </div>
            <div className="col-md-4 d-flex g-5">
                <img src={Email} alt="" className='c-icon'/>
                <div>
                    <h5>EMAIL ADDRESS</h5>
                    <p>BYCAFRICA@gmail.com</p>
                </div>
            </div>
        </div>
        <h2 className='font-jost check'>Drop a Message</h2>
        <form style={{width: "32rem"}}>
            <div className="c-form mb-4">
                <label className="form-label" for="form4Example1">Phone</label>
                <input type="text" id="form4Example1" className="form-control p-4" />
            </div>

            <div className="c-form form-outline mb-4">
                <label className="form-label" for="form4Example2">Email address</label>
                <input type="email" id="form4Example2" className="form-control p-4" />
            </div>

            <div className="c-form form-outline mb-4">
                <label className="form-label" for="form4Example3">Notes</label>
                <textarea className="form-control" id="form4Example3" rows="6"></textarea>
            </div>

                <button type="button" className="btn btn-block c-btn" style={{backgroundColor:"#BD3A3A",color:"#fff"}}>Submit</button>
        </form>
    </div>
    <Recently/>
    </>
  )
}

export default Contact
