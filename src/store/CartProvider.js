// React-useReducer-ComplexStateManagement
import React, { useReducer } from 'react';
// React-ContextAPI-CentralizingProps
import CartContext from './cart-context.js';

// React-useReducer-ComplexStateManagement
// This reducer function is outside the component function 
// Because it won't not need anything from the component function
const defaultCartState = {
    items: [],
    totalAmount: 0
}

// React-useReducer-ComplexStateManagement
// This reducer function is outside the component function 
// Because it won't not need anything from the component function
const cartReducer = (state, action) => {
    if (action.type === 'ADD') {
        return { items: , totalAmount:  };
    }

    return defaultCartState;
};

// React-ContextAPI-CentralizingProps
const CartProvider = props => {

    // React-useReducer-ComplexStateManagement
    const [cartState, dispatchCart] = useReducer(cartReducer, defaultCartState);

    const addItemToCartHandler = item => {
        // React-useReducer-ComplexStateManagement
        // "type" property is for identifying the action name
        // instead of "type" any propery can be declared here.
        // dispatch function should take an object as an argument.
        // first item in the object defines the action type.
        // second item in the object defines which property will be forwarded and updated.
        // We choose item to be updated. This is an argument coming from
        // addItemToCartHandler function.
        // first property can be accessed as "action.type" in cartReducer function.
        dispatchCart({type: 'ADD', newItem: item});
    };

    const removeItemFromCartHandler = id => {

    };

    // React-ContextAPI-CentralizingProps
    const cartContext = {
        // React-useReducer-ComplexStateManagement
        items: cartState.items,
        // React-useReducer-ComplexStateManagement
        totalAmount: cartState.totalAmount,
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
