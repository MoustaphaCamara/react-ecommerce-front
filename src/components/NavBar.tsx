import { NavLink } from "react-router-dom";
import { AiOutlineShopping } from "react-icons/ai";

import Cart from "./Cart";

import { useStateContext } from "../../context/StateContext";

const NavBar = () => {
  const { showCart, setShowCart, totalQuantities }: any = useStateContext();
  return (
    <div className="navbar-container">
      <p className="logo">
        <NavLink to="/">Accueil</NavLink>
      </p>
      <button
        type="button"
        className="cart-icon"
        onClick={() => {
          setShowCart(!showCart);
        }}
      >
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>
      {showCart && <Cart />}
    </div>
  );
};

export default NavBar;
