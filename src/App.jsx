import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import Landing from "./components/Landing";
import ProductList from "./pages/ProductList";
import CartItem from "./pages/CartItem";


function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (plant) => {
    setCart(prev => {
      const found = prev.find(i => i.id === plant.id);
      return found
        ? prev.map(i => i.id === plant.id ? { ...i, qty: i.qty + 1 } : i)
        : [...prev, { ...plant, qty: 1 }];
    });
  };

  const updateQty = (id, qty) => {
    if (qty <= 0) removeItem(id);
    else setCart(cart.map(i => i.id === id ? { ...i, qty } : i));
  };

  const removeItem = (id) => {
    setCart(cart.filter(i => i.id !== id));
  };

  const cartCount = cart.reduce((sum, i) => sum + i.qty, 0);

  return (
    <BrowserRouter>
      <Header cartCount={cartCount} />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/products" element={<ProductList addToCart={addToCart} />} />
        <Route path="/cart" element={<CartItem cart={cart} updateQty={updateQty} removeItem={removeItem} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
