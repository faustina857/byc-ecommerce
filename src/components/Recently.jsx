import React from 'react'
import { Frame18 } from '../assets';
import { FiChevronRight, } from 'react-icons/fi';
import { AiFillStar } from 'react-icons/ai';


const products = [
  {
    id: 1,
    name: "MEN BOXERS",
    model: "BYC 1163",
    description: "Fashionable Men's Underwear Boxer Cotton Underwear 3 In 1",
    price: "₦1,900.00",
    rating: 4.05,
    image: Frame18
  },
  {
    id: 2,
    name: "MEN BOXERS",
    model: "BYC 1163",
    description: "Fashionable Men's Underwear Boxer Cotton Underwear 3 In 1",
    price: "₦1,900.00",
    rating: 4.05,
    image: Frame18
  },
  {
    id: 3,
    name: "MEN BOXERS",
    model: "BYC 1163",
    description: "Fashionable Men's Underwear Boxer Cotton Underwear 3 In 1",
    price: "₦1,900.00",
    rating: 4.05,
    image: Frame18
  },
  {
    id: 4,
    name: "MEN BOXERS",
    model: "BYC 1163",
    description: "Fashionable Men's Underwear Boxer Cotton Underwear 3 In 1",
    price: "₦1,900.00",
    rating: 4.05,
    image: Frame18
  },
  {
    id: 5,
    name: "MEN BOXERS",
    model: "BYC 1163",
    description: "Fashionable Men's Underwear Boxer Cotton Underwear 3 In 1",
    price: "₦1,900.00",
    rating: 4.05,
    image: Frame18
  },
];
const Recently = () => {
  return (
    <>
      <div className="container shadow recent p-5" style={{borderRadius:"10px"}}>
      <div className="d-flex justify-content-between align-items-center mb-3 mt-2">
        <h5 style={{fontWeight:"700"}}>Recently Viewed</h5>
        <button className="bg-white border-0 font-jost" style={{color:"#BD3A3A",fontWeight:"500"}}>
          See all <FiChevronRight/>
        </button>
      </div>
      <hr style={{backgroundColor:"#F1EEEE",height:"2px", border:"none"}}/>

      <div className="recent-grid mt-4">
        {products.map((product) => (
          <div key={product.id} className="card border-0 rounded-top">
              <img src={product.image} alt={product.name} className="img-fluid rounded-top"/>
              <div className="card-body">
              <h6 className="card-title mb-1 mt-2">
                {product.name}
              </h6>
              <p className="card-text small mb-2">{product.model}</p>
              <p className="text-secondary my-3" style={{fontSize:'11px'}}>{product.description}</p>
              <p className="mb-3" style={{fontWeight:"500"}}>{product.price}</p>
              <div className="d-flex align-items-center gap-1 small mt-auto">
                <AiFillStar style={{color:"#FB8200"}} />
                <AiFillStar style={{color:"#FB8200"}} />
                <AiFillStar style={{color:"#FB8200"}} />
                <AiFillStar style={{color:"#FB8200"}} />
                <AiFillStar style={{color:"#FB8200"}} />
                <span style={{fontWeight:"500", color:"#5E6366"}}>{product.rating}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    </>
  )
}

export default Recently
