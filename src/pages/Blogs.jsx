import React, {useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import BlogSection from '../components/BlogSection'

const Blogs = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://byc-ecommerce-backend.onrender.com/api/byc-stores/blog/get-single-blog/${id}`)
      .then(res => res.json())
      .then(data => {
        setBlog(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div className="container mt-5">Loading blog...</div>;
  }

  if (!blog) {
    return <div className="container mt-5">Blog not found</div>;
  }

  return (
    <>
      <div className="container blogs">
        <h2 className='text-center font-jost check'>{blog.blogTitle}</h2>
        <p className='segoe'>{blog.blogContent}</p>
        <img src={blog.blogImage} alt="" className='blogsimg w-100'/>
        <p> {blog.blogContent}</p>
        <h2 className='text-center check'>More Blog news</h2>
      </div>
      <BlogSection className='mobile'/>


    </>
  )
}

export default Blogs
