import React from 'react';
// React-ContextAPI-CentralizingProps
import CartContext from './cart-context.js';

// React-ContextAPI-CentralizingProps
const CartProvider = props => {

    const addItemToCartHandle = () => {};

    const removeItemFromCartHandle = () => {};

    // React-ContextAPI-CentralizingProps
    const cartContext = {
        items: [],
        totalAmount: 0,
        addItem: () => {},
        removeItem: () => {}
    };

    return (
        // React-ContextAPI-CentralizingProps
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
};

// React-ContextAPI-CentralizingProps
export default CartProvider;
