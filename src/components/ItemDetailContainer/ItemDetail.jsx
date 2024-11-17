
/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling
import "../css/ItemDetail.css";
import { useState } from "react";
import { useCart } from "../CartContext";

const ItemDetail = ({ product }) => {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
    alert(`${quantity} x ${product.name} Añadido al carrito!`);
  };

  return (
    <div className="item-detail-container">
    <img className="prod_img" src={product.image} width={500} alt={product.name} />
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p className="price">Precio: ${product.price}</p>
      <div className="quantity-container">
        <label htmlFor="quantity">Cantidad:</label>
        <input
          type="number"
          id="quantity"
          min="1"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        />
        <button onClick={handleAddToCart}>Agregar al carrito</button>
      </div>
    </div>
  </div>
  );
};

export default ItemDetail;
