import React, { createContext, useContext, useState } from "react";

const OrdersContext = createContext();

export function OrdersProvider({ children }) {
  const [orders, setOrders] = useState([]);

  function addOrder(items, total) {
    const newOrder = {
      id: Date.now().toString(),
      items,
      total,
      status: "Em preparo",
      createdAt: new Date().toLocaleString("pt-BR"),
    };

    setOrders((previousOrders) => [
      newOrder,
      ...previousOrders,
    ]);
  }

  return (
    <OrdersContext.Provider
      value={{
        orders,
        addOrder,
      }}
    >
      {children}
    </OrdersContext.Provider>
  );
}

export function useOrders() {
  return useContext(OrdersContext);
}