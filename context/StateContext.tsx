import React, { createContext, useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { ProductInt } from "../src/models/product";

const Context = createContext<any>(null!);

export const StateContext = ({ children }: React.FC | any) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [qtt, setQtt] = useState(1);

  // products we want to update for toggleCartItemQuantity()
  let foundProduct: ProductInt;

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

  const onRemove = (product: ProductInt) => {
    foundProduct = cartItems.find((item) => item._id === product._id);
    const newCartItems = cartItems.filter((item) => item._id !== product._id);
    // 2:36
    setTotalPrice(
      (prevTotalPrice) =>
        prevTotalPrice - foundProduct.price * foundProduct.quantity
    );
    setTotalQuantities(
      (prevTotalQuantities) => prevTotalQuantities - foundProduct.quantity
    );
    setCartItems(newCartItems);
  };

  const toggleCartItemQuantity = (id: number, value: string) => {
    // to fix later : on update, latest item gets switched to bottom position
    foundProduct = cartItems.find((item) => item._id === id);
    let index;
    index = cartItems.findIndex((product) => product._id === id);

    // splice/destructure altering initial cart
    // create new cart by filtering all items except the one i'm updating

    const newCartItems = cartItems.filter((item) => item._id !== id);

    if (value === "inc") {
      setCartItems([
        ...newCartItems,
        { ...foundProduct, quantity: foundProduct.quantity + 1 },
      ]);
      setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price);
      setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + 1);
    } else if (value === "dec") {
      if (foundProduct.quantity > 1) {
        setCartItems([
          ...newCartItems,
          { ...foundProduct, quantity: foundProduct.quantity - 1 },
        ]);
        setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price);
        setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - 1);
      }
    }
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
        onRemove,
        toggleCartItemQuantity,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
