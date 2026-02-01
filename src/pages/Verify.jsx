import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import OrderModal from "../components/OrderModal";

const Verify = () => {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const [orderDetails, setOrderDetails] = useState(null)
  const [showModal, setShowModal] = useState(false)

  const reference = params.get("reference");

  useEffect(() => {
    const verifyPayment = async () => {
      try {
       const res = await axios.post(
          "https://byc-ecommerce-backend.onrender.com/api/byc-stores/order/confirm",
          { reference }
        );

        setOrderDetails(res.data.order);
        setShowModal(true);

        Swal.fire({
          icon: "success",
          title: "Payment Successful",
          text: "Your order has been confirmed!",
        });

        localStorage.removeItem("cartItems");

      } catch (error) {
         console.error("Payment verification failed:", error.response || error);
        Swal.fire({
          icon: "error",
          title: "Payment Verification Failed",
          text: error.response?.data?.message
        });
      }
    };

    if (reference) verifyPayment();
  }, [reference]);

  return (
    <OrderModal show={showModal}
    order={orderDetails} onClose={() => {
      setShowModal(false)
      navigate("/allProducts")
    }}
    />
  )
};

export default Verify;
