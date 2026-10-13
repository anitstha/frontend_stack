import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Navbar = () => {
  const { cart } = useContext(CartContext);

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between bg-gray-900 px-6 py-4 text-white shadow-md">
      <h1 className="text-2xl font-bold">MyShop</h1>

      <div className="flex items-center gap-6">
        <a href="#" className="transition hover:text-gray-300">
          Home
        </a>

        <a href="#cart" className="transition hover:text-gray-300">
          Cart ({totalItems})
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
