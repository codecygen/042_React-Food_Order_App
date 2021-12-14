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
        // Here, it says take the old satate of total amount to be paid
        // Add the new amount which is calculated as price * amount of the
        // newly added item.
        const updatedTotalAmount = state.totalAmount + action.newItem.price * action.newItem.amount;

        const existingCartItemIndex = state.items.findIndex(
            item => item.id === action.newItem.id
        );

        const existingCartItem = state.items[existingCartItemIndex];

        let updatedItems;

        // Object-Array-SpreadOperator
        if (existingCartItem) {
            const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.newItem.amount
            };

            // Object-Array-SpreadOperator
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        } else {
            // Do not use "push()" here, because in that case,
            // React won't know the old state snapshot is edited.
            // So with "contact()", you have to create a brand new snapshot.
            // This means find old items state and concatenate the new item
            // which comes with the new ADD action.
            updatedItems = state.items.concat(action.newItem);
        }

        return { items: updatedItems, totalAmount: updatedTotalAmount };
    }

    if (action.type === 'REMOVE') {
        const existingCartItemIndex = state.items.findIndex(
            item => item.id === action.newId
        );

        const existingItem = state.items[existingCartItemIndex];
        const updatedTotalAmount = state.totalAmount - existingItem.price;
        let updatedItems;

        if (existingItem.amount === 1) {
            updatedItems = state.items.filter(item => item.id !== action.newId);
        } else {
            const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        }

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        };
    }

    return defaultCartState;
};

// React-ContextAPI-CentralizingProps
const CartProvider = props => {

    // React-useReducer-ComplexStateManagement
    const [cartState, dispatchCart] = useReducer(cartReducer, defaultCartState);

    // React-ContextAPI-CentralizingProps
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
        dispatchCart({ type: 'ADD', newItem: item });
    };

    // React-ContextAPI-CentralizingProps
    const removeItemFromCartHandler = id => {
        // React-useReducer-ComplexStateManagement
        dispatchCart({ type: 'REMOVE', newId: id });
    };

    // React-ContextAPI-CentralizingProps
    const cartContext = {
        // React-useReducer-ComplexStateManagement
        items: cartState.items,
        // React-useReducer-ComplexStateManagement
        totalAmount: cartState.totalAmount,
        // React-ContextAPI-CentralizingProps
        // Item info is received from "MealItem.js" and the argument is passed
        // to "addItemToCartHandler"
        addItem: addItemToCartHandler,
        // React-ContextAPI-CentralizingProps
        removeItem: removeItemFromCartHandler
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
