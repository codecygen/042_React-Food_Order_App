// React-ContextAPI-CentralizingProps
// React-useEffect-useState-HeaderCartButtonBumpAnimation
import React, {useContext, useEffect, useState} from 'react';
import CartIcon from '../Cart/CartIcon';
// React-ContextAPI-CentralizingProps
import CartContext from '../../store/cart-context';

import classes from './HeaderCartButton.module.css';

const HeaderCartButton = props => {
    // React-useEffect-useState-HeaderCartButtonBumpAnimation
    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

    // React-ContextAPI-CentralizingProps
    const cartCtx = useContext(CartContext);

    // React-useEffect-useState-HeaderCartButtonBumpAnimation
    const { items } = cartCtx;

    // We use reduce method because a person can buy multiple of same item.
    // So we need to add all item numbers added on top of each other.
    // React-ContextAPI-CentralizingProps
    const numberOfCartItems = items.reduce((curNumber, item) => {
        return curNumber + item.amount;
      }, 0);

    // React-useEffect-useState-HeaderCartButtonBumpAnimation
    const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;

    // React-useEffect-useState-HeaderCartButtonBumpAnimation
    useEffect(() => {
        if (items.length === 0) {
            return;
          }
          setBtnIsHighlighted(true);
      
          const timer = setTimeout(() => {
            setBtnIsHighlighted(false);
          }, 300);
      
          return () => {
            clearTimeout(timer);
          };
    }, [items]);

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