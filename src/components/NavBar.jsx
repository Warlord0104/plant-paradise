import { Link } from "react-router-dom";
import {useSelector} from "react-redux";


function Header({ cartCount }) {
  const cart = useSelector((state) => state.cart.cart);
 

  const totalItems = cart.length;

  return (
    <header className="header">
      <h2> <Link to="/">GreenLeaf</Link> </h2>
      <nav>
        <Link to="/products">Products</Link>
        <Link to="/cart">🛒 Cart ({totalItems})</Link>
      </nav>
    </header>
  );
}

export default Header;
