import React from 'react'
import { Frame18,Frame19, Frame20, Frame21, Frame22 } from '../assets';
import Recently from '../components/Recently';
import { AiFillStar } from 'react-icons/ai';
import { useState } from 'react';
import { FiHeart,  FiShoppingCart } from 'react-icons/fi';
import {  FaCaretDown, FaList, FaThLarge } from 'react-icons/fa';
import ProductDetails from '../components/ProductDetails';

const AllProducts = () => {

  const [showDetails, setShowDetails] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [];

  for (let i = 1; i <= 10; i++) {
    products.push({
      id: i,
      name: "CAMISOLE" ,
      model:"BYC-501LMS",
      description:"Long Cotton Adjustable Strap Camisole Tank Top - Black",
      price: "₦1,900.00",
      rating: 4.05,
      image: Frame18,
      colors: [
        { name: "Blue", hex: "#3870C4" },
        { name: "Pink", hex: "#FF05E6" },
        { name: "Orange", hex: "#FB8200" },
        { name: "Black", hex: "#000" }
      ],
      sizes: ["S", "M", "L", "XL"]
    });
  }

  const items = [
  {
    id: 1,
    name: "BOXERS",
    model: "BYC 1161",
    description: "Fashionable Men's Underwear Boxer Cotton Underwear 3 In 1",
    price: "₦1,800.00",
    rating: 4.05,
    image: Frame19,
    colors: [
        { name: "Blue", hex: "#3870C4" },
        { name: "Pink", hex: "#FF05E6" },
        { name: "Orange", hex: "#FB8200" },
        { name: "Black", hex: "#000" }
      ],
      sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 2,
    name: "BOXERS",
    model: "BYC 1201",
    description: "Fashionable Men's Underwear Boxer Cotton Underwear 3 In 1",
    price: "₦1,800.00",
    rating: 4.05,
    image: Frame20,
    colors: [
        { name: "Blue", hex: "#3870C4" },
        { name: "Pink", hex: "#FF05E6" },
        { name: "Orange", hex: "#FB8200" },
        { name: "Black", hex: "#000" }
      ],
      sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 3,
    name: "BOXERS",
    model: "KBY-3204",
    description: "Fashionable Men's Underwear Boxer Cotton Underwear 3 In 1",
    price: "₦10,000.00",
    rating: 4.05,
    image: Frame21,
    colors: [
        { name: "Blue", hex: "#3870C4" },
        { name: "Pink", hex: "#FF05E6" },
        { name: "Orange", hex: "#FB8200" },
        { name: "Black", hex: "#000" }
      ],
      sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 4,
    name: "BOXERS",
    model: "BYL 6709",
    description: "Fashionable Men's Underwear Boxer Cotton Underwear 3 In 1",
    price: "₦12,000.00",
    rating: 4.05,
    image: Frame22,
    colors: [
        { name: "Blue", hex: "#3870C4" },
        { name: "Pink", hex: "#FF05E6" },
        { name: "Orange", hex: "#FB8200" },
        { name: "Black", hex: "#000" }
      ],
      sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 5,
    name: "BOXERS",
    model: "KBY-3204",
    description: "Fashionable Men's Underwear Boxer Cotton Underwear 3 In 1",
    price: "₦10,000.00",
    rating: 4.05,
    image: Frame21,
    colors: [
        { name: "Blue", hex: "#3870C4" },
        { name: "Pink", hex: "#FF05E6" },
        { name: "Orange", hex: "#FB8200" },
        { name: "Black", hex: "#000" }
      ],
      sizes: ["S", "M", "L", "XL"]
  },
];
const [isWishlisted, setIsWishlisted] = useState(false);
const [showButton, setShowButton] = useState(null)
if (showDetails && selectedProduct) {
    return (
      <ProductDetails
        product={selectedProduct}
        onBack={() => setShowDetails(false)}
        onAddToCart={(item) => {
        }}
      />
    );
  }
  return (
    <>
    <div className="container all-products shadow">
      <div className='d-flex justify-content-between'>
        <h3 className="page-title mt-5" style={{fontWeight:"700"}}>All Products</h3>
        <div className="floating-select mt-5">
          <select >
            <option>Most Sold</option>
          </select>
          <label htmlFor="sortSelect" style={{fontWeight:"500",color:"#787885",letterSpacing:"1px"}}>SORT BY</label>
            <FaCaretDown className='select-arrow'/>

        </div>
      </div>
       <hr style={{backgroundColor:"#F1EEEE",height:"2px", border:"none"}}/>
       <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <div style={{backgroundColor:"#BD3A3A0F",color:"#000", padding:"7px 20px"}}><FaList size={20}/></div>
          <div className='shadow-sm' style={{color:"#CE6B6B",padding:"7px 20px",backgroundColor:"#FFF"}}><FaThLarge size={20}/></div>
        </div>
        <hr style={{backgroundColor:"#F1EEEE",height:"2px", border:"none"}}/>
      <div className="products-grid">

        {products.map((product) => (
          <div className="product-card shadow-sm my-3 " onClick={() => setShowButton(product.id)} key={product.id}>
            <img src={product.image} className="product-img w-100 rounded-top" />
            <div className='p-2'>
            <h6 className="card-title mb-1 mt-2">{product.name}</h6>
            <p className="card-text small mb-2">{product.model}</p>
            <p className="text-secondary " style={{fontSize:'11px'}}>{product.description}</p>
            <p className="mb-3" style={{fontWeight:"500"}}>{product.price}</p>
            <div className="d-flex align-items-center small mt-auto mb-4">
                <AiFillStar style={{color:"#FB8200"}} />
                <AiFillStar style={{color:"#FB8200"}} />
                <AiFillStar style={{color:"#FB8200"}} />
                <AiFillStar style={{color:"#FB8200"}} />
                <AiFillStar style={{color:"#FB8200"}} />
                <span style={{fontWeight:"500",fontSize:"16px" ,color:"#5E6366",marginLeft:"8px"}}>{product.rating}</span>
            </div>
            {showButton === product.id && (
              <div className='mb-3'>
              <button className='mr-3' onClick={() => setIsWishlisted(!isWishlisted)}
              style={{backgroundColor:"#fff",color:"#BD3A3A",border:"1px solid #BD3A3A",borderRadius:"5px",padding:"5px 7px",fontWeight:"500",fontSize:"13px"}}>
                <FiHeart fill={isWishlisted ? "#BD3A3A" : "none"} className='mr-2'/>Wishlist</button>
              <button  onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProduct(product);
                        setShowDetails(true);
                      }}
              style={{backgroundColor:"#BD3A3A",color:"#fff",border:"none",borderRadius:"5px",padding:"5px 7px",fontWeight:"500",fontSize:"13px"}}>
                <FiShoppingCart className='mr-2'/>Buy Now</button>
            </div>
            )}
            </div>
          </div>
        ))}
      </div>
      <div className="recent-grid mt-4">
              {items.map((items) => (
                <div onClick={() => setShowButton(items.id)} key={items.id} className="card border-0 shadow-sm rounded-top">
                    <img src={items.image} alt={items.name} className="rounded-top"/>
                    <div className="card-body">
                    <h6 className="card-title mb-1 mt-2">
                      {items.name}
                    </h6>
                    <p className="card-text small mb-2">{items.model}</p>
                    <p className="text-secondary my-3" style={{fontSize:'11px'}}>{items.description}</p>
                    <p className="mb-3" style={{fontWeight:"500"}}>{items.price}</p>
                    <div className="d-flex align-items-center gap-1 small mt-auto mb-3">
                      <AiFillStar style={{color:"#FB8200"}} />
                      <AiFillStar style={{color:"#FB8200"}} />
                      <AiFillStar style={{color:"#FB8200"}} />
                      <AiFillStar style={{color:"#FB8200"}} />
                      <AiFillStar style={{color:"#FB8200"}} />
                      <span style={{fontWeight:"500", color:"#5E6366",marginLeft:"8px"}}>{items.rating}</span>
                    </div>
                    {showButton === items.id && (
                    <div className='mb-3'>
                    <button className='mr-3' onClick={() => setIsWishlisted(!isWishlisted)}
                    style={{backgroundColor:"#fff",color:"#BD3A3A",border:"1px solid #BD3A3A",borderRadius:"5px",padding:"5px 7px",fontWeight:"500",fontSize:"13px"}}>
                      <FiHeart className='mr-2'fill={isWishlisted ? "#BD3A3A" : "none"}/>Wishlist</button>
                    <button onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProduct(items);
                        setShowDetails(true);
                      }} style={{backgroundColor:"#BD3A3A",color:"#fff",border:"none",borderRadius:"5px",padding:"5px 7px",fontWeight:"500",fontSize:"13px"}}>
                      <FiShoppingCart className='mr-2'/>Buy Now</button>
                  </div>
                  )}
                  </div>
                </div>
              ))}
            </div>
    </div>

    <Recently/>
    </>
  )
}
export default AllProducts
