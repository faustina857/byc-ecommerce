import React from 'react'
import { FiArrowRight, FiEye, FiHeart } from "react-icons/fi";
import { Frame10, Frame11, Frame12, Image} from '../assets';

const BlogSection = () => {
  return (
    <>
     <div className="container px-4 n-blog">
        
        <div className="row">
        <div className="col-md-4">
            <div className="card border-0 shadow-sm h-100" >
            <img src={Frame10} alt=""/>
            <div className="card-body">
                <div className='font-jost'>
                    <img src={Image} alt="" className='img'/>
                        <span className='s-right'><FiEye/>  35 </span>
                        <span className='s-left'><FiHeart/>  23 </span><br />
                    <div className='mt-2'>
                        <small style={{fontWeight:"600"}}>Wade Warren  </small>
                        <small className='ml-3' style={{color:"#424242"}}>. Fashion Designer</small>
                    </div>
                </div>
                <h5 className="card-title font-jost">How important are clothes <br />in your style?</h5>
                <p className="card-text mb-4 font-lato">Amet minim mollit non deserunt ullamco est sit aliqua <br />
                dolor do amet sint. Velit officia consequat duis enim <br />
                velit mollit. Exercitation veniam consequat sunt nostrud <br />amet.</p>
                <button style={{border:"1px solid",background:"transparent",
                     padding:"5px 10px",fontWeight:"500", marginBottom:"80px"}} className="font-jost">Read more <FiArrowRight/></button>
            </div>
        </div>
        </div>
        <div className="col-md-4">
            <div className="card border-0 shadow-sm h-100" >
            <img src={Frame11} alt=""/>
            <div className="card-body">
                <div className='font-jost'>
                    <img src={Image} alt="" className='img'/>
                    <span className='s-right'><FiEye/>  35 </span>
                    <span className='s-left'><FiHeart/>  23 </span><br />
                    <div className='mt-2'>
                        <small style={{fontWeight:"600"}}>Wade Warren  </small>
                        <small className='ml-3' style={{color:"#424242"}}>. Fashion Designer</small>
                    </div>
                </div>
                <h5 className="card-title font-jost">How important are pants <br />in your style?</h5>
                <p className="card-text mb-4 font-lato">Amet minim mollit non deserunt ullamco est sit aliqua <br />
                dolor do amet sint. Velit officia consequat duis enim <br />
                velit mollit. Exercitation veniam consequat sunt nostrud <br />amet.</p>
                <button style={{border:"1px solid",background:"transparent",
                     padding:"5px 10px",fontWeight:"500", marginBottom:"80px"}} className="font-jost">Read more <FiArrowRight/></button>
            </div>
        </div>
        </div>
        <div className="col-md-4">
            <div className="card border-0 shadow-sm h-100" >
            <img src={Frame12} alt=""/>
            <div className="card-body">
                <div className='font-jost'>
                    <img src={Image} alt="" className='img'/>
                    <span className='s-right'><FiEye/>  35 </span>
                    <span className='s-left'><FiHeart/>  23 </span><br />
                    <div>
                        <small style={{fontWeight:"600"}}>Wade Warren  </small>
                        <small className='ml-3' style={{color:"#424242"}}>. Fashion Designer</small>
                    </div>
                </div>
                <h5 className="card-title font-jost">How important are shoes <br />in your style?</h5>
                <p className="card-text mb-4 font-lato">Amet minim mollit non deserunt ullamco est sit aliqua <br />
                dolor do amet sint. Velit officia consequat duis enim <br />
                velit mollit. Exercitation veniam consequat sunt nostrud <br />amet.</p>
                <button style={{border:"1px solid",background:"transparent",
                     padding:"5px 10px",fontWeight:"500", marginBottom:"80px"}} className="font-jost">Read more <FiArrowRight/></button>
            </div>
        </div>
        </div>
        </div>
        <div className='text-center'>
            <button className='framebtn font-jost'>View All</button>
        </div>
     </div>
    </>
  )
}

export default BlogSection


