import React, { useEffect, useState } from 'react'
import { Frame1, Frame2, Frame3, Frame4, Frame5, Frame6, Frame7, Frame8, Frame9, Card1, Card2, Card3} from '../assets'
import BlogSection from '../components/BlogSection'
import { useNavigate, Link } from 'react-router-dom';


const Home = () => {
    const navigate = useNavigate();
    const [categories, setCategories] =useState([])

  const viewAllProducts = () => {
    navigate("/allproducts");
  };

  useEffect(() => {
    fetch("https://byc-ecommerce-backend.onrender.com/api/byc-stores/category/get-all-categories")
    .then(res => res.json())
    .then(data => setCategories(data))
    .catch(err => console.error(err))
  }, [])
    
  return (
    <>
      <section className='hero-section'>
        <div className='hero text-center'>
            <p className='font-jost'>Your body deserves comfort</p>
            <h1 className='font-jost'>Get the best for yourself</h1>
            <div>
                <button  onClick={viewAllProducts} className="hero-btn font-jost">Shop Now</button>
                <button className="hero-btn2 font-jost">Learn more</button>
            </div>
            <div className="frame text-center">
               <img className='home-pic' src={Frame1} alt="" />
               <img src={Frame2} alt="" className='m-frame home-pic'/>
               <img className='home-pic' src={Frame3} alt="" />
            </div>
        </div>
      </section>

      <div className="container">
        <h2 style={{textAlign:"center"}} className='font-jost check'>Checkout BYC New Arrivals</h2>
        <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-4 font-jost hom-pic">
            <img src={Frame4} alt="" className="himg"/>
            <p className='f-text' style={{fontWeight:'700'}}>Men Underwears</p>
            <small style={{fontWeight:"400",fontSize:"15px"}}>Parturient Venenatis Etiam</small>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-4 font-jost hom-pic">
            <img src={Frame5} alt="" className="himg"/>
            <p className='f-text' style={{fontWeight:'700'}}>Women Underwears</p>
            <small style={{fontWeight:"400",fontSize:"15px"}}>Parturient Venenatis Etiam</small>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-4 font-jost hom-pic">
            <img src={Frame6} alt="" className="himg"/>
            <p className="f-text" style={{fontWeight:'700'}}>Underwears</p>
            <small style={{fontWeight:"400",fontSize:"15px"}}>Parturient Venenatis Etiam</small>
        </div>
      </div>
      <div className='text-center'>
        <button onClick={viewAllProducts} className="framebtn font-jost">View All</button>
      </div>
      </div>
      <div className="container h-third">
        <div className="row">
            <div className="col-md-6 font-jost home-pic">
                <div style={{backgroundColor:"#F1F1F1", width:"100%"}} className='title'>
                    <h3 style={{color:"#616161", fontWeight:"700"}}>BYC Collection 2021</h3>
                    <h2 className='check'>BYC Collection</h2>
                    <p className='font-lato ships-text' style={{color:"#424242"}}>The best everyday option in a Super Saver range within a <br />reasonable price. It is our responsibility to keep you <br />
                    100 percent stylish. Be smart & trendy with us.</p>
                    <button className="framebtn font-jost" style={{backgroundColor:"#F1F1F1",marginTop:"40px"}}>Explore</button>
                </div>
            </div>
            <div className="col-md-6">
                <img src={Frame7} alt="" style={{width:"100%"}}/>
            </div>
            <div className="col-md-6">
                <img src={Frame8} alt="" style={{width:"100%",marginTop:"20px"}}/>
            </div>
            <div className="col-md-6">
                <img src={Frame9} alt="" style={{width:"100%",marginTop:"20px"}}/>
            </div>
        </div>
        <div className='text-center'>
        <button className="framebtn font-jost">View All</button>
        </div>
      </div>

    <section className="shop-category text-center">
        <div className="container">
            <h2 className="font-jost check">Shop By Category</h2>
            <ul className="nav justify-content-center font-jost">
                {categories.map(category =>(
                    <li className="shop-item" key={category._id}>
                         <Link to={`/category/${category._id}`} className="shop-link" style={{color:"#000"}} >For {category.name}</Link>
                    </li>
                ))}
            </ul>

        <div className="d-flex justify-content-center shop-btn font-jost">
        <button style={{border:"1px solid #F5F5F5",backgroundColor:"#fff",fontSize:"16px",padding:"5px 20px"}}>T-Shirt</button>
        <button style={{border:"1px solid #F5F5F5",backgroundColor:"#fff",fontSize:"16px",padding:"5px 20px"}}>Singlet</button>
        <button style={{color:"#fff",backgroundColor:"#D7000F",fontSize:"16px",padding:"5px 20px",border:"none"}}>Pant</button>
        <button style={{border:"1px solid #F5F5F5",backgroundColor:"#fff",fontSize:"16px",padding:"5px 20px"}}>Boxers</button>
        </div>

        <div className="row justify-content-center mb-4">
        <div>
            <img src={Card1} alt="" className='shop-img mt-3'/>
            <p className='align mb-0'>WOWEN PANTS<span style={{marginLeft:"10px",fontWeight:"400",color:"#19191D"}}>BYC-501LMS</span></p>
            <p className='aligns josefin'>₦2,800.00</p>
        </div>
        <div>
            <img src={Card2} alt="" className='shop-imgs'/>
            <p className='align ml-3 mb-0'>WOWEN PANTS<span style={{marginLeft:"10px",fontWeight:"400",color:"#19191D"}}>BYC-501LMS</span></p>
            <p className='aligns ml-3 josefin'>₦2,800.00</p>
        </div>
        <div>
            <img src={Card3} alt="" className='shop-img mt-3'/>
            <p className='align mb-0 segoe'>WOWEN PANTS<span style={{marginLeft:"10px",fontWeight:"400",color:"#19191D"}}>BYC-501LMS</span></p>
            <p className='aligns josefin'>₦2,800.00</p>
        </div>
        </div>
        <button className='framebtn font-jost'>View All</button>
        </div>
        <div className='n-blog' ><h2 className='text-center font-jost check' style={{fontWeight:"700"}}>BYC AFRICA Blog News</h2></div>
    </section>
    <BlogSection />

    </>
  )
}

export default Home
