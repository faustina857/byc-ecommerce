import React,{useEffect, useState, useContext} from 'react'
import { useParams } from 'react-router-dom'
import { CartContext } from '../context/CartContext';
import { AiFillStar } from 'react-icons/ai';
import { FiHeart, FiShoppingCart } from 'react-icons/fi';
import ProductDetails from './ProductDetails';

const CategoryPage = () => {
    const {categoryId} = useParams()
    const [products,setProducts] = useState([])
    const [category, setCategory] = useState(null)
    const [selectedProduct, setSelectedProduct] = useState(null)
    const [showDetails, setShowDetails] = useState(false);
    const [loading, setLoading] = useState(true);
    const [showButton, setShowButton] = useState(null)
    const { wishlist, addToWishlist, removeFromWishlist } = useContext(CartContext);
    const isInWishlist = (id) => wishlist.some(item => item._id === id);

    useEffect(() => {

       const fetchProducts = async () => {
    try {
      const response = await fetch(`https://byc-ecommerce-backend.onrender.com/api/byc-stores/product/get-product-by-category/${categoryId}`);
      const data = await response.json();

      const formatted = data.map((item) => {
        // Calculate average rating
        const avgRating =
          item.productRating && item.productRating.length > 0
            ? item.productRating.reduce((a, b) => Number(a) + Number(b), 0) /
              item.productRating.length
            : 0;

        return {
          _id: item._id,                   
          name: item.productName,
          model: item.productNumber,
          description: item.productTitle,
          price: Number(item.productPrice),     
          rating: avgRating.toFixed(1),
          image: item.productImage[0],
          colors: [
            { name: "Blue", hex: "#3870C4" },
            { name: "Pink", hex: "#FF05E6" },
            { name: "Orange", hex: "#FB8200" },
            { name: "Black", hex: "#000" }
          ],
          sizes: ["S", "M", "L", "XL"],
          category: item.category
            };
      });

      setProducts(formatted);
      setLoading(false);
    } catch (error) {
      console.log("Fetch error:", error);
      setLoading(false);
    }
  };

  fetchProducts();

     fetch(`https://byc-ecommerce-backend.onrender.com/api/byc-stores/category/get-single-category/${categoryId}`)
    .then(res => res.json())
    .then(setCategory)
    .catch(err => console.error(err));
    },[categoryId])

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
    <div className="container">
      <h4 className="text-center my-4 font-jost">
       {category?.name}
      </h4>

      <div className="products-grid">
            {loading ? (
              <p>Loading products...</p>
            ) : (
               products.map((product) => (
              <div className="product-card shadow-sm my-3 " onMouseOver={() => setShowButton(product._id)} key={product._id}>
                <img src={product.image} className="product-img w-100 rounded-top" />
                <div className='p-2'>
                <h6 className="card-title text-uppercase mb-1 mt-2">{product.name}</h6>
                <p className="card-text text-uppercasecd  small mb-2">{product.model}</p>
                <p className="text-secondary " style={{fontSize:'11px'}}>{product.description}</p>
                <p className="mb-3" style={{fontWeight:"500"}}>₦{product.price}</p>
                <div className="d-flex align-items-center small mt-auto mb-4">
                    {[...Array(5)].map((_, i) => (
                        <AiFillStar
                          key={i}
                          style={{ color: i < Math.round(product.rating) ? "#FB8200" : "#CCC" }}
                        />
                      ))}
                    <span style={{fontWeight:"500",fontSize:"16px" ,color:"#5E6366",marginLeft:"8px"}}>{product.rating}</span>
                </div>
                {showButton === product._id && (
                  <div className='mb-3'>
                  <button className='mr-3' onClick={(e) => { e.stopPropagation(); isInWishlist(product._id)
                      ? removeFromWishlist(product._id)
                      : addToWishlist(product); }}
                  style={{backgroundColor:"#fff",color:"#BD3A3A",border:"1px solid #BD3A3A",borderRadius:"5px",padding:"5px 7px",fontWeight:"500",fontSize:"13px"}}>
                    <FiHeart fill={isInWishlist(product._id) ? "#BD3A3A" : "none"} className='mr-2'/>Wishlist</button>
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
            ))
          )}
          </div>
    </div>
  )
}

export default CategoryPage
