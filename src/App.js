// React-ConditionalRendering-useState
import React, { useState } from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
// React-ContextAPI-CentralizingProps
import CartProvider from './store/CartProvider';

function App() {
  // React-ConditionalRendering-useState
  const [cartIsShown, setCartIsShown] = useState(false);

  // React-ConditionalRendering-useState
  const showCartHandler = () => {
    setCartIsShown(true);
  };

  // React-ConditionalRendering-useState
  // React-onClickEvent-MovinguseStateDownWithProps
  const hideCartHandler = () => {
    setCartIsShown(false);
  };


  return (
    // React-ContextAPI-CentralizingProps
    <CartProvider>
      {/* React-ConditionalRendering-useState */}
      {/* React-onClickEvent-MovinguseStateDownWithProps */}
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
    // React-ContextAPI-CentralizingProps
  );
}

export default App;