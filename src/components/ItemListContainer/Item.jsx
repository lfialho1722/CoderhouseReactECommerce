/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling
import { Link } from "react-router-dom"

const Item = ({ product }) => {
    return (
      <Link to={"/detail/" + product.id} className="product-card">
        <img src={product.image} alt={product.name} className="product-image" />
        <h2 className="product-name">{product.name}</h2>
        <p className="product-price">Precio: ${product.price}</p>
      </Link>
    )
  }
  
  export default Item
  