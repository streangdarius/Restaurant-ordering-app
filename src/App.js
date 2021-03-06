import { useState } from "react";
import Header from "./components/Layout/Header";
import Recipes from "./components/Other/Recipes";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
import Home from "./components/Other/Pages/Home";
import Footer from "./components/Layout/Footer";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Home />
        <Recipes />
        <Footer />
      </main>
    </CartProvider>
  );
}

export default App;
