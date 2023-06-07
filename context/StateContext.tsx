import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-hot-toast";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState();
  const [totalPrice, setTotalPrice] = useState();
  const [totalQuantities, settotalQuantities] = useState();
  const [qtt, setQtt] = useState(1);

  const incQtt = () => {
    setQtt((prevQtt) => prevQtt + 1);
  };
  const decQtt = () => {
    setQtt((prevQtt) => {
      if (prevQtt - 1 < 1) return 1;
      return prevQtt - 1;
    });
  };
  return (
    <Context.Provider
      value={{
        showCart,
        cartItems,
        totalPrice,
        totalQuantities,
        qtt,
        incQtt,
        decQtt,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default StateContext;
