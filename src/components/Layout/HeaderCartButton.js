// React-ContextAPI-CentralizingProps
import React, {useContext} from 'react';
import CartIcon from '../Cart/CartIcon';
// React-ContextAPI-CentralizingProps
import CartContext from '../../store/cart-context';

import classes from './HeaderCartButton.module.css';

const HeaderCartButton = props => {
    // React-ContextAPI-CentralizingProps
    const cartCtx = useContext(CartContext);

    // cartCtx.items is an array of objects of items. We need to only extract the amounts here.
    const amount = [];
    // React-ContextAPI-CentralizingProps
    cartCtx.items.forEach(item => amount.push(item.amount));

    // We use reduce method because a person can buy multiple of same item.
    // So we need to add all item numbers added on top of each other.
    // React-ContextAPI-CentralizingProps
    const numberOfCartItems = amount.reduce((previousValue, currentValue) => {
        return (
            previousValue + currentValue
        );
    }, 0);

    const btnClasses = `${classes.button} ${classes.bump}`;

    return (
        <button className={btnClasses} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>
                Your Cart
            </span>
            <span className={classes.badge}>
                {/* React-ContextAPI-CentralizingProps */}
                {numberOfCartItems}
            </span>
        </button>
    );
};

export default HeaderCartButton;