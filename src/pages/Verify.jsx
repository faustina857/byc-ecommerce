// import { useEffect, useState, useContext } from "react";
// import { useSearchParams, useNavigate } from "react-router-dom";
// import axios from "axios";
// import Swal from "sweetalert2";
// import OrderModal from "../components/OrderModal";
// import { CartContext } from "../context/CartContext";

// const Verify = () => {
//   const { clearCart } = useContext(CartContext);
//   const [params] = useSearchParams();
//   const navigate = useNavigate();
//   const [orderDetails, setOrderDetails] = useState(null)
//   const [showModal, setShowModal] = useState(false)

//   const reference = params.get("reference");

//   useEffect(() => {
//     const verifyPayment = async () => {
//       try {
//        const res = await axios.post(
//           "https://byc-ecommerce-backend.onrender.com/api/byc-stores/order/confirm",
//           { reference }
//         );

//         setOrderDetails(res.data.order);
//         setShowModal(true);

//         Swal.fire({
//           icon: "success",
//           title: "Payment Successful",
//           text: "Your order has been confirmed!",
//         });
//         clearCart();
//         localStorage.removeItem("cartItems");

//       } catch (error) {
//          console.error("Payment verification failed:", error.response || error);
//         Swal.fire({
//           icon: "error",
//           title: "Payment Verification Failed",
//           text: error.response?.data?.message
//         });
//       }
//     };

//     if (reference) verifyPayment();
//   }, [reference]);

//   return (
//     <OrderModal show={showModal}
//     order={orderDetails} onClose={() => {
//       setShowModal(false)
//       navigate("/allProducts")
//     }}
//     />
//   )
// };

// export default Verify;

import { useEffect, useState, useContext } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import OrderModal from "../components/OrderModal";
import { CartContext } from "../context/CartContext";

const Verify = () => {
  const { clearCart } = useContext(CartContext);
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const [orderDetails, setOrderDetails] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const reference = params.get("reference");

  useEffect(() => {
    const verifyPayment = async () => {
      if (!reference) return;

      try {
        const res = await axios.post(
          "https://byc-ecommerce-backend.onrender.com/api/byc-stores/order/confirm",
          { reference }
        );

        console.log("Payment verification response:", res.data);

        if (res.data.success && res.data.order) {
          setOrderDetails(res.data.order);
          setShowModal(true);

          // Optionally show a quick success toast
          Swal.fire({
            icon: "success",
            title: "Payment Successful",
            text: "Your order has been confirmed!",
            timer: 2000,
            showConfirmButton: false
          });

          // Clear cart after order confirmed
          clearCart();
          localStorage.removeItem("cartItems");
        } else {
          Swal.fire({
            icon: "error",
            title: "Payment Failed",
            text: res.data.message || "Order verification failed"
          });
        }

      } catch (error) {
        console.error("Payment verification failed:", error.response || error);
        Swal.fire({
          icon: "error",
          title: "Payment Verification Failed",
          text: error.response?.data?.message || "Something went wrong"
        });
      }
    };

    verifyPayment();
  }, [reference]);

  return (
    <>
      {showModal && orderDetails && (
        <OrderModal
          show={showModal}
          order={orderDetails}
          onClose={() => {
            setShowModal(false);
            navigate("/allProducts");
          }}
        />
      )}
    </>
  );
};

export default Verify;

