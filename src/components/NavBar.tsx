import { NavLink } from "react-router-dom";
import { AiOutlineShopping } from "react-icons/ai";
const NavBar = () => {
  return (
    <div className="navbar-container">
      <p className="logo">
        <NavLink to="/">Accueil</NavLink>
      </p>
      <button type="button" className="cart-icon" onClick={() => {}}>
        <AiOutlineShopping />
        <span className="cart-item-qty">1 </span>
      </button>
    </div>
  );
};

export default NavBar;
