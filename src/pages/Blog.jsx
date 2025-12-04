import React from 'react'
import {Frame13, Image, Frame14, Frame15} from '../assets'
import { FiArrowRight, FiEye, FiHeart} from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';





const Blog = () => {
    const navigate = useNavigate();
    
      const viewBlogs = () => {
        navigate("/blogs");
      };
  return (
    <>

    <div className="container">
        <h2 className='bagn font-jost'>BYC AFRICA Blog News</h2>
        <div className="row blog-row">
            <div className="col-md-6"><img src={Frame13} alt="" className='b1img w-100'/></div>
        <div className="col-md-6 blogfp">
            <h5 style={{fontWeight:"700"}}>Fashion trend forecast for  Summer 2021</h5>
            <p style={{color:"#424242",fontSize:"15px"}}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet <br />
            sint. Velit officia consequat duis enim velit mollit. Exercitation veniam <br />
            consequat sunt nostrud ametAmet minim mollit non deserunt ullamco <br />
            est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit <br />
            mollit. Exercitation veniam consequat sunt nostrud amet..</p>
            <button style={{border:"1px solid",background:"transparent",
              padding:"5px 10px",fontWeight:"500", marginBottom:"50px"}} 
              className="font-jost" onClick={viewBlogs}>Read more <FiArrowRight/></button>
            <div className="font-jost">
                <img src={Image} alt="" className='img'/>
                <span className='s-right' style={{backgroundColor:"#FCFCFC"}}><FiEye/>  35 </span>
                <span className='s-left' style={{backgroundColor:"#FCFCFC"}}><FiHeart/>  23 </span><br />
                <div className='mt-4'>
                    <small style={{fontWeight:"600"}}>Wade Warren  </small>
                    <small className='ml-3' style={{color:"#424242"}}>. Fashion Designer</small>
                </div>
            </div>
        </div>
        </div>
        <div className="row blog-row">
            <div className="col-md-6 blogfp">
            <h5 style={{fontWeight:"700"}}>Fashion trend forecast for  Summer 2021</h5>
            <p style={{color:"#424242",fontSize:"15px"}}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet <br />
            sint. Velit officia consequat duis enim velit mollit. Exercitation veniam <br />
            consequat sunt nostrud ametAmet minim mollit non deserunt ullamco <br />
            est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit <br />
            mollit. Exercitation veniam consequat sunt nostrud amet..</p>
            <button style={{border:"1px solid",background:"transparent",
              padding:"5px 10px",fontWeight:"500", marginBottom:"50px"}} 
              className="font-jost">Read more <FiArrowRight/></button>
            <div className="font-jost">
                <img src={Image} alt="" className='img'/>
                <span className='s-right' style={{backgroundColor:"#FCFCFC"}}><FiEye/>  35 </span>
                <span className='s-left' style={{backgroundColor:"#FCFCFC"}}><FiHeart/>  23 </span><br />
                <div className='mt-4'>
                    <small style={{fontWeight:"600"}}>Wade Warren  </small>
                    <small className='ml-3' style={{color:"#424242"}}>. Fashion Designer</small>
                </div>
            </div>
        </div>
        <div className="col-md-6"><img src={Frame14} alt="" className='b1img w-100'/></div>
        </div>
        <div className="row blog-row">
            <div className="col-md-6"><img src={Frame15} alt="" className='b1img w-100'/></div>
        <div className="col-md-6 blogfp">
            <h5 style={{fontWeight:"700"}}>Fashion trend forecast for  Summer 2021</h5>
            <p style={{color:"#424242",fontSize:"15px"}}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet <br />
            sint. Velit officia consequat duis enim velit mollit. Exercitation veniam <br />
            consequat sunt nostrud ametAmet minim mollit non deserunt ullamco <br />
            est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit <br />
            mollit. Exercitation veniam consequat sunt nostrud amet..</p>
            <button style={{border:"1px solid",background:"transparent",
              padding:"5px 10px",fontWeight:"500", marginBottom:"50px"}} 
              className="font-jost">Read more <FiArrowRight/></button>
            <div className="font-jost">
                <img src={Image} alt="" className='img'/>
                <span className='s-right' style={{backgroundColor:"#FCFCFC"}}><FiEye/>  35 </span>
                <span className='s-left' style={{backgroundColor:"#FCFCFC"}}><FiHeart/>  23 </span><br />
                <div className='mt-4'>
                    <small style={{fontWeight:"600"}}>Wade Warren  </small>
                    <small className='ml-3' style={{color:"#424242"}}>. Fashion Designer</small>
                </div>
            </div>
        </div>
        </div>
        
    </div> 

    </>
  )
}

export default Blog
