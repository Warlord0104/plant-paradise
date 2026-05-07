import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import Landing from "./components/Landing";
import Products from "./pages/products";
import Cart from "./pages/cart";


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
        <Route path="/products" element={<Products addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cart={cart} updateQty={updateQty} removeItem={removeItem} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
