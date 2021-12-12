// React-ContextAPI-CentralizingProps
import React, { useContext } from 'react';
import MealItemForm from '../MealItemForm';

// React-ContextAPI-CentralizingProps
import CartContext from '../../../store/cart-context';

import classes from './MealItem.module.css';

const MealItem = props => {
    // React-ContextAPI-CentralizingProps
    const cartCtx = useContext(CartContext)

    // React-LiftingStateUp
    const addToCartHandler = amount => {
        // React-ContextAPI-CentralizingProps
        // This method revokes the "addItem()" method in "CartProvider.js"
        // It sends the necessary argument along with it so that the reducer
        // function can use it.
        // props of "MealItem.js" component is received from "AvailableMeals.js" component.
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        });
    };

    return (
        <li className={classes.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>${props.price.toFixed(2)}</div>
            </div>
            <div>
                {/* React-LiftingStateUp */}
                <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
            </div>
        </li>
    );
};

export default MealItem;