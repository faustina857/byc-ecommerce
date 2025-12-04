import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { FiShoppingCart, FiHeart, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { AiFillStar } from 'react-icons/ai';
import CustomerReviews from './CustomerReviews';
import Recently from './Recently';

// Product Details Component
const ProductDetails = ({ product, onBack }) => {
  const navigate = useNavigate(); 
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0] || null);
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] || null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleQuantityChange = (type) => {
    if (type === 'increase') {
      setQuantity(q => q + 1);
    } else if (type === 'decrease' && quantity > 1) {
      setQuantity(q => q - 1);
    }
  };

  // const handleAddToCart = () => {
  //   const cartItem = {
  //     ...product,
  //     quantity,
  //     selectedColor,
  //     selectedSize,
  //   };
  //   // const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
  //   // const existingItemIndex = existingCart.findIndex(item => item.id === product.id);
  //   // if (existingItemIndex > -1) {
  //   //   // Update quantity if item exists
  //   //   existingCart[existingItemIndex].quantity += quantity;
  //   // } else {
  //   //   // Add new item
  //   //   existingCart.push(cartItem);
  //   // }
  //   // localStorage.setItem('cart', JSON.stringify(existingCart));
  //   navigate('/cart');
  // };

  const productImages = product.images || [product.image];

  // const nextImage = () => {
  //   setCurrentImageIndex((prev) => (prev + 1) % productImages.length);
  // };

  // const previousImage = () => {
  //   setCurrentImageIndex((prev) => (prev - 1 + productImages.length) % productImages.length);
  // };

  return (
       <div>
        <div>
        <button onClick={onBack} className="bnhg">
          <FiChevronLeft size={20} /> Back to Products
        </button>

        <div className="container bg-white rounded-lg shadow productsD">
            <div>
                <img className='d-img' src={productImages[currentImageIndex]} alt={product.name}/>

              {productImages.length > 1 && (
                <div className="grid grid-cols-4 gap-3">
                  {productImages.map((img, index) => (
                    <button key={index} onClick={() => setCurrentImageIndex(index)}
                      className={` ${ currentImageIndex === index ? 'border-red-600 scale-105':'border-gray-200 hover:border-gray-300'}`}>
                      <img src={img} alt={`${product.name} ${index + 1}`}/>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="">
                <h5 style={{fontWeight:"700"}}>{product.name}</h5>
                <p style={{fontWeight:"700"}}>{product.model}</p>
              {product.description && (
                <p className="">{product.description}</p>
              )}
              {product.rating && (
                <div className="flex items-center gap-2 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <AiFillStar style={{color:"#FB8200"}}/>
                    ))}
                  <span style={{fontWeight:"500",fontSize:"16px" ,color:"#5E6366",marginLeft:"7px"}}>{product.rating}</span>
                </div>
              )}
              <hr style={{backgroundColor:"#F1EEEE",height:"2px", border:"none"}}/>
                  <span style={{fontWeight:"700",marginBottom:"30px"}}>
                    {product.price.toLocaleString()}
                  </span>
                  
              <div style={{display:"flex",gap:"20px",marginTop:"10px"}}>
            <div>
                {product.sizes && product.sizes.length > 0 && (
                <div className="">
                  <label style={{fontWeight:"600", fontSize:"16px", marginBottom:"10px"}}>Available Sizes</label>
                  <div className="">
                    {product.sizes.map(size => (
                      <button key={size}  onClick={() => setSelectedSize(size)} className='mr-2 shadow-sm'
                      style={{border: selectedSize === size ? "1px solid #FB8200" : "1px solid #ccc",
                            cursor: "pointer",backgroundColor:"#FFF",borderRadius:"5px",padding:"5px 10px"}}>
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
                    )}
                </div>
                <div>
                    {product.colors && product.colors.length > 0 && (
                <div style={{marginBottom: "20px"}}>
                    <p style={{fontWeight:"600", fontSize:"16px", marginBottom:"10px"}}>Available Colours</p>
                    <div style={{display:"flex", gap:"10px"}}>
                    {product.colors.map(color => (
                        <button
                        key={color.name}
                        onClick={() => setSelectedColor(color)}
                        style={{
                            width: "40px",
                            height: "40px",
                            borderRadius: "50%",
                            backgroundColor: color.hex,
                            border: selectedColor?.name === color.name ? "1px solid #fff" : "2px solid #ddd",
                            cursor: "pointer"
                        }}
                        title={color.name}
                        />
                    ))}
                    </div>
                </div>
)}
                </div>
              </div>




              {/* Quantity and Actions */}
            
                <div style={{display:"flex",gap:"30px",marginBottom:"15px"}}>
                    <div className="">
                  <button onClick={() => handleQuantityChange('decrease')} disabled={quantity <= 1}
                  style={{backgroundColor:"#BD3A3A",color:"#fff",border:"none",padding:"1px 15px"}}>
                    -
                  </button>
                  <span className="mx-2">{quantity}</span>
                  <button onClick={() => handleQuantityChange('increase')}
                  style={{backgroundColor:"#BD3A3A",color:"#fff",border:"none",padding:"1px 15px"}}
                  >
                    +
                  </button>
                </div>

                <div>
                    <button onClick={() => setIsWishlisted(!isWishlisted)}
                    style={{border:'1px solid #BD3A3A',color:"#BD3A3A",backgroundColor:"#fff",padding:"4px 50px",borderRadius:"5px"}}
                >
                  <FiHeart size={15} fill={isWishlisted ? "#BD3A3A" : "none"} className='mr-2'/>
                  Wishlist
                </button>
                </div>
                </div>
            

              {/* Add to Cart Button */}
              <button onClick={() => navigate("/cart")} 
              style={{border:"none",backgroundColor:"#BD3A3A",color:"#fff",padding:"5px 80px",borderRadius:"5px"}}>
                <FiShoppingCart size={16} className='mr-2'/>Add to Cart
              </button>
            </div>
          
        </div>
    </div>
    <div className='container shadow-sm px-3 py-5 mb-5 rounded'>
      <h3 style={{fontWeight:"700"}}>Product Description</h3>
      <hr style={{backgroundColor:"#F1EEEE",height:"2px", border:"none"}}/>
      <p style={{fontSize:"13px"}}>This set of boxers will make you feel comfortable. The hem doesn't ravel. It is made from cotton which allows aeration around your body. It suitable for both adults and teenagers. <br /> 
          These pair of boxers give good fit and sits appropriately, they ensure there is no unsightly bulge and they also give support to an important part of your body, which overall improves <br />
          your confidence. It has a comfortable cotton material. It comes in different beautiful colors and patterns.  It has cool and comfortable fit with flexible hem that doesn't ravel and comes <br />
          tag -free for maximum comfort. Soft breathable fabric for air movement and forms to your body for best Fit. <br />
          It is made of 100% premium cotton and is perfect for crotch, so you don't have to worry about ugly bumps. <br />
          For pure organic softness and premium lingerie support, pair this four-in-one suit with yourself or the special man in your life.</p>
    </div>
    <CustomerReviews/>
    <Recently/>

    </div>

    
  );

};

export default ProductDetails;

