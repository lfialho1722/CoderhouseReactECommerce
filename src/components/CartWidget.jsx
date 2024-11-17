
import { IoCartOutline } from "react-icons/io5";
import { useCart } from "./CartContext";
import "./css/CartWidget.css"; // Assuming a separate CSS file for styling

const CartWidget = () => {
  const { cartCount } = useCart();

  return (
    <div className="cartwidget">
      <IoCartOutline className="cart-icon" size={45} />
      {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
    </div>
  );
};

export default CartWidget;
