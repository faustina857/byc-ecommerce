import { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const Verify = () => {
  const [params] = useSearchParams();
  const navigate = useNavigate();

  const reference = params.get("reference");

  useEffect(() => {
    const verifyPayment = async () => {
      try {
        await axios.post(
          "http://localhost:3001/api/byc-stores/order/confirm",
          { reference }
        );

        Swal.fire({
          icon: "success",
          title: "Payment Successful",
          text: "Your order has been confirmed!",
        });

        localStorage.removeItem("cartItems");

        setTimeout(() => navigate("/allProducts"), 2000);
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Payment Verification Failed",
          text: "Please contact support",
        });
      }
    };

    if (reference) verifyPayment();
  }, [reference, navigate]);

  return null;
};

export default Verify;
