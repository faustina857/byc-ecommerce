import React from 'react'
import {Awards, Frame17} from '../assets'
import Recently from '../components/Recently'
import { BsGeoAltFill } from 'react-icons/bs'

const About = () => {
  return (
    <>
      <div className="container about">
        <h1 className='text-center font-jost a-head'>ABOUT US</h1>
        <div className="row">
            <div className="col-md-6"><img src={Frame17} alt="" className='w-100'/></div>
            <div className="col-md-6">
                <h3>ABOUT BYC AFRICA</h3>
                <p className='about-p'>
                    We are the sole distributor of BYC products in <br />
                    Africa. We import BYC products from Korea <br />and distribute them to African countries <br />
                    through Onamik Holdings Limited.
                </p>
            </div>
        </div>
        <h1 className='text-center font-jost a-head'>WHAT OUR RECORD SAYS</h1>
        <div className="row">
            <div className="col-md-4">
                <div className='about-box shadow-sm' style={{backgroundColor:"#BD3A3A0A",borderRadius:"5px"}}>
                    <img src={Awards} alt="" />
                    <p>Gold Prize for the Best Listed Firm awarded <br />by Daesin Economy Research Institute.</p>
                    <h5 style={{color:"#D7000F",fontWeight:"700",marginTop:"35px"}}>Year 1990</h5>
                </div>
            </div>
            <div className="col-md-4">
                <div className='about-box' style={{backgroundColor:"#FBFBFB",borderRadius:"5px"}}>
                    <img src={Awards} alt="" />
                    <p>Selected as representaive enterprise of Korea for <br />
                    successful stategies on globalization of Korean brands <br />
                    by Korean Traders Association.</p>
                    <h5 style={{color:"#D7000F",fontWeight:"700"}}>Year 1993</h5>
                </div>
            </div>
            <div className="col-md-4">
                <div className='about-box' style={{backgroundColor:"#FBFBFB",borderRadius:"5px"}}>
                    <img src={Awards} alt="" />
                    <p>BYC' selected as the most preferred brand for <br />underwear by the Federation of Korean Women <br />
                    Economists..</p>
                    <h5 style={{color:"#D7000F",fontWeight:"700"}}>Year 1997</h5>
                </div>
            </div>
            <div className="col-md-4">
                <div className='about-box' style={{backgroundColor:"#FBFBFB",borderRadius:"5px"}}>
                    <img src={Awards} alt="" />
                    <p>Selected as the official commercializer of underwear for <br />1988 France Worldcup.</p>
                    <h5 style={{color:"#D7000F",fontWeight:"700"}}>Year 1997</h5>
                </div>
            </div>
            <div className="col-md-4">
                <div className='about-box' style={{backgroundColor:"#FBFBFB",borderRadius:"5px"}}>
                    <img src={Awards} alt="" />
                    <p>The Prize for Export of Original Brands awarded as <br />recommended by the Korean Assoiatioon of Textile <br />
                    Industries</p>
                    <h5 style={{color:"#D7000F",fontWeight:"700"}}>Year 1999</h5>
                </div>
            </div>
            <div className="col-md-4">
                <div className='about-box' style={{backgroundColor:"#FBFBFB",borderRadius:"5px"}}>
                    <img src={Awards} alt="" />
                    <p>"The 10th Prize for the Enterprise of Economical <br />Justice" by the enterprise Assessment commission.</p>
                    <h5 style={{color:"#D7000F",fontWeight:"700",marginTop:"35px"}}>Year 2001</h5>
                </div>
            </div>
            <div className="col-md-4">
                <div className='about-box' style={{backgroundColor:"#FBFBFB",borderRadius:"5px"}}>
                    <img src={Awards} alt="" />
                    <p>The Prize for Export of Original Brands awarded as <br />recommended by the Korean Assoiatioon of Textile <br />
                    Industries</p>
                    <h5 style={{color:"#D7000F",fontWeight:"700"}}>Year 2006</h5>
                </div>
            </div>
            <div className="col-md-4">
                <div className='about-box' style={{backgroundColor:"#FBFBFB",borderRadius:"5px"}}>
                    <img src={Awards} alt="" />
                    <p>selected by korea management association as no.1 <br />in brand influence among
                    the men's underwear <br />companies</p>
                    <h5 style={{color:"#D7000F",fontWeight:"700"}}>Year 2006</h5>
                </div>
            </div>
            <div className="col-md-4">
                    <div className='about-box' style={{backgroundColor:"#FBFBFB",borderRadius:"5px"}}>
                        <img src={Awards}  alt="" />
                        <BsGeoAltFill/>
                        <p>Selected as the Best Korean Enterprise of 1992 by <br />Korean Management Association.</p>
                        <h5 style={{color:"#D7000F",fontWeight:"700",marginTop:"35px"}}>Year 2011</h5>
                    </div>
            </div>
        </div>
      </div>
      <Recently/>
      
    </>
  )
}

export default About
