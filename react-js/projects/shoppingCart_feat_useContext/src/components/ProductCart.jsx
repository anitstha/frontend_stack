import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const ProductCard = (product) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div>
      <img src={product.image} alt={product.name} />

      <h2>{product.name}</h2>
      <p>Rs. {product.price}</p>
      <p>{product.category}</p>

      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
