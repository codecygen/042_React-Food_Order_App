import React from 'react';

// React-ContextAPI-CentralizingProps
// This section is done so that React can recommend the props in other components
const CartContext = React.createContext({
    items: [],
    totalAmount: 0,
    addItem: () => {},
    removeItem: () => {},
    clearCart: () => {}
});

// React-ContextAPI-CentralizingProps
export default CartContext;
