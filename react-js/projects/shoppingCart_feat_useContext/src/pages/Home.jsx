import ProductCard from "../components/ProductCart";
import { products } from "../data/products";

const Home = () => {
  return (
    <div>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          name={product.name}
          price={product.price}
          category={product.category}
          image={product.image}
        />
      ))}
    </div>
  );
};

export default Home;
