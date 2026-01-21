import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || [];
  });

  const addToCart = (book) => {
    const alreadyInCart = cart.find(b => b.id === book.id);
    if (!alreadyInCart) {
      const updated = [...cart, book];
      setCart(updated);
      localStorage.setItem("cart", JSON.stringify(updated));
    }
  };

  const removeFromCart = (id) => {
    const updated = cart.filter(b => b.id !== id);
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
