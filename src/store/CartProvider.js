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
        // Do not use "push()" here, because in that case,
        // React won't know the old state snapshot is edited.
        // So with "contact()", you have to create a brand new snapshot.
        // This means find old items state and concatenate the new item
        // which comes with the new ADD action.
        const updatedItems = state.items.concat(action.newItem);

        // Here, it says take the old satate of total amount to be paid
        // Add the new amount which is calculated as price * amount of the
        // newly added item.
        const updatedTotalAmount = state.totalAmount + action.newItem.price * action.newItem.amount;
        
        return { items: updatedItems, totalAmount: updatedTotalAmount };
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
        // React-useReducer-ComplexStateManagement
        dispatchCart({type: 'REMOVE', newId: id});
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
