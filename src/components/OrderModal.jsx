import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { AiFillCheckCircle } from 'react-icons/ai';

const OrderModal = ({ onClose, order }) => {
    const navigate = useNavigate()
     if ( !order) return null;

  return (

    <div className="modal-dialog modal-lg shadow">
      <div className="modal-content">
        <h4 className='font-nunito text-success order-text'>Order completed successfully<AiFillCheckCircle className='ml-1' size={30}/></h4>
        <div className="modal-header">
          <h5 className="modal-title">
            <span className="fw-font-lato order-text">Order Details</span>
          </h5>
        </div>

        <div className='modal-body'>
            <p className='font-jost'><strong className='text-success'>Order ID:</strong> {order._id}</p>
            <p className='font-jost'><strong className='text-success'>Date:</strong> {new Date(order.createdAt).toLocaleString()}</p>
            <p className='font-jost'><strong className='text-success'>Total:</strong> ₦{order.totalAmount}</p>
            <p className='font-jost'><strong className='text-success'>Delivery status:</strong> {order.deliveryStatus}</p>

            <hr />
            <h6>Items:</h6>

            {order?.items?.map((item, i) => (

                <ul key={i}>
                    <img src={item.image} className='thumb-img' />
                    <li className='font-jost'><strong className='text-success'>Product name:</strong> {item.name}</li>
                    <li className='font-jost'><strong className='text-success'>Quantity:</strong> {item.quantity}</li>
                    <li className='font-jost'><strong className='text-success'>Color:</strong> {item.color}</li>
                    <li className='font-jost'><strong className='text-success'>Size:</strong> {item.size}</li>
                </ul>
            ))}
    
            <div className='text-right'>
                <button className="btn btn-success font-jost mr-3" onClick={onClose}>
                Continue Shopping
            </button>
            <button className='btn btn-secondary' onClick={() => navigate('/')}>Close</button>
            </div>
        </div>
       
      </div>
    </div>
  );
};

export default OrderModal
