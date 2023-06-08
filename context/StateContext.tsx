import React, { createContext, useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { ProductInt } from "../src/models/product";

const Context = createContext(null!);

export const StateContext = ({ children }: React.FC | any) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [qtt, setQtt] = useState(1);

  const onAdd = (product: ProductInt, quantity: number) => {
    const checkIfProductInCart = cartItems.find(
      (item: any) => item._id === product._id
    );
    setTotalPrice(
      (prevTotalPrice) => prevTotalPrice + product.price * quantity
    );
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);
    if (checkIfProductInCart) {
      const updatedCartItems = cartItems.map((cartProduct) => {
        if (cartProduct._id === product._id)
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + quantity,
          };
      });
      setCartItems(updatedCartItems);
    } else {
      product.quantity = quantity;
      setCartItems([...cartItems, { ...product }]);
    }
    toast.success(`${qtt} ${product.name} added to the cart.`);
  };

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
        setShowCart,
        cartItems,
        totalPrice,
        totalQuantities,
        qtt,
        incQtt,
        decQtt,
        onAdd,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
