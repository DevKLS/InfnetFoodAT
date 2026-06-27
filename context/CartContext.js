import React, { createContext, useContext, useState } from "react";

export const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addItem(product, quantity = 1) {
    const itemExistente = cart.find((item) => item.id === product.id);

    if (itemExistente) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + quantity,
              }
            : item
        )
      );

      return;
    }

    setCart([
      ...cart,
      {
        ...product,
        quantity,
      },
    ]);
  }

  function removeItem(id) {
    setCart(cart.filter((item) => item.id !== id));
  }

  function clearCart() {
    setCart([]);
  }

  const total = cart.reduce(
    (acc, item) => acc + Number(item.price || 0) * item.quantity,
    0
  );

  const totalItems = cart.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        clearCart,
        total,
        totalItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}