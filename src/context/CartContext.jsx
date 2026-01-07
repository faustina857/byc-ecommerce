import { createContext, useState, useEffect } from "react";
import Swal from "sweetalert2";
export const CartContext = createContext();
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [wishlist, setWishlist] = useState(() => {
  const savedWishlist = localStorage.getItem("wishlist");
  return savedWishlist ? JSON.parse(savedWishlist) : [];
});

// Load wishlist from localStorage on first render
// useEffect(() => {
//   const savedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
//   setWishlist(savedWishlist);
// }, []);

// Save wishlist to localStorage whenever it changes
useEffect(() => {
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
}, [wishlist]);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem("cartItems");
    if (savedCart) {
      const parsed = JSON.parse(savedCart);
      setCartItems(parsed);
      setCartCount(parsed.reduce((sum, item) => sum + item.quantity, 0));
    }
  }, []);
  // Save cart to localStorage whenever it changes
  useEffect(() => {
    // :white_check_mark: Only save if cartItems is not empty
    if (cartItems.length > 0) {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
    const total = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    setCartCount(total);
  }, [cartItems]);
  // :white_check_mark: Add product to cart
  const addToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item._id === product._id);
      if (existing) {
        // update quantity if product already exists
        return prev.map((item) =>
          item._id === product._id
            ? { ...item, quantity: item.quantity + (product.quantity || 1) }
            : item
        );
      } else {
        // add new product
        return [...prev, { ...product, quantity: product.quantity || 1 }];
      }
    });
    // SweetAlert popup
    Swal.fire({
      icon: "success",
      title: "Added to Cart",
      text: `${product.name} has been added to your cart.`,
      timer: 1500,
      showConfirmButton: false,
    });
  };
  // :white_check_mark: Update quantity
  const updateQuantity = (productId, quantity) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item._id === productId ? { ...item, quantity } : item
      )
    );
  };
  // :white_check_mark: Remove product
  const removeFromCart = (productId) => {
    setCartItems((prev) => prev.filter((item) => item._id !== productId));
  };
  // :white_check_mark: Clear cart only after successful order
  const clearCart = () => {
    setCartItems([]);
    setCartCount(0);
    localStorage.removeItem("cartItems"); // wipe storage only when order succeeds
  };

  const addToWishlist = (product) => {
  if (!wishlist.find((item) => item._id === product._id)) {
    setWishlist([...wishlist, product]);
  }
};

const removeFromWishlist = (productId) => {
  setWishlist(wishlist.filter((item) => item._id !== productId));
};

const isInWishlist = (productId) => {
  return wishlist.some((item) => item._id === productId);
};

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartCount,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        wishlist,      
        addToWishlist,       
        removeFromWishlist, 
        isInWishlist     
      }}
    >
      {children}
    </CartContext.Provider>
  );
};










