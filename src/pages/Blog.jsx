import React, { useEffect, useState } from 'react'
import { FiArrowRight, FiEye, FiHeart} from 'react-icons/fi'
import { useNavigate } from 'react-router-dom';
import BlogSection from '../components/BlogSection';


const Blog = () => {
    const navigate = useNavigate();
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() =>{
       fetch('http://localhost:3001/api/byc-stores/blog/get-all-blogs')
      .then(res => res.json())
      .then(data => {
        setBlogs(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="container mt-5">Loading blogs...</div>;
  }

  return (
    <>

    <div className="container">
        <h2 className='bagn font-jost'>BYC AFRICA Blog News</h2>
        {blogs.map((blog, index) =>(
             <div className="row blog-row" key={blog._id}>
            <div className={`col-md-6 ${index % 2 !== 0 ? 'order-md-2' : ''}`}>
                <img src={blog.blogImage} alt="" className='b1img w-100'/></div>
        <div className="col-md-6 blogfp">
            <h5 style={{fontWeight:"700"}}>{blog.blogTitle}</h5>
            <p style={{color:"#424242",fontSize:"15px"}}>{blog.blogDescription.substring(0, 180)}</p>
            <button onClick={() => navigate(`/blogs/${blog._id}`)} style={{border:"1px solid",background:"transparent",
              padding:"5px 10px",fontWeight:"500", marginBottom:"50px"}} 
              className="font-jost">Read more <FiArrowRight/></button>
            <div className="font-jost">
                <img src={blog.ownerImage} alt="" className='img'/>
                <span className='s-right' style={{backgroundColor:"#FCFCFC"}}><FiEye/>  35 </span>
                <span className='s-left' style={{backgroundColor:"#FCFCFC"}}><FiHeart/>  23 </span><br />
                <div className='mt-4'>
                    <small style={{fontWeight:"600"}}>{blog.ownerName}</small>
                    <small className='ml-3' style={{color:"#424242"}}>{blog.ownerProfession}</small>
                </div>
            </div>
        </div>
        </div>
        ))}
       
        
    </div> 
   <BlogSection/>
    </>
  )
}

export default Blog
