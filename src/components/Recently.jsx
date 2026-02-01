import React, {useContext} from 'react'
import { FiChevronRight, } from 'react-icons/fi';
import { AiFillStar } from 'react-icons/ai';
import { CartContext } from '../context/CartContext';

const Recently = () => {
  const {recentlyViewed} = useContext(CartContext);

  if (recentlyViewed.length === 0) return null;
  return (
    <>
      <div className="container shadow recent p-5" style={{borderRadius:"10px"}}>
      <div className="d-flex justify-content-between align-items-center mb-3 mt-2">
        <h5 className='ships-text' style={{fontWeight:"700"}}>Recently Viewed</h5>
        <button className="bg-white border-0 font-jost" style={{color:"#BD3A3A",fontWeight:"500"}}>
          See all <FiChevronRight/>
        </button>
      </div>
      <hr style={{backgroundColor:"#F1EEEE",height:"2px", border:"none"}}/>

      <div className="recent-grid mt-4">
        {recentlyViewed.map((item) => (
          <div key={item._id} className="card border-0 rounded-top">
              <img src={item.image} alt={item.name} className="img-fluid rounded-top"/>
              <div className="card-body">
              <h6 className="card-title mb-1 mt-2">
                {item.name}
              </h6>
              <p className="card-text small mb-2">{item.model}</p>
              <p className="text-secondary my-3" style={{fontSize:'11px'}}>{item.description}</p>
              <p className="mb-3" style={{fontWeight:"500"}}>{item.price}</p>
              <div className="d-flex align-items-center gap-1 small mt-auto">
                 {[...Array(5)].map((_, i) => (
                      <AiFillStar key={i}
                          style={{ color: i < Math.round(item.rating) ? "#FB8200" : "#CCC" }}/>
                  ))}
                <span style={{fontWeight:"500", color:"#5E6366"}}>{item.rating}</span>
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
