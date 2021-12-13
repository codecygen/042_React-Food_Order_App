// React-ContextAPI-CentralizingProps
import React, { useContext } from 'react';
import Modal from '../UI/Modal';
// React-ContextAPI-CentralizingProps
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';
import classes from './Cart.module.css';

const Cart = props => {
    // React-ContextAPI-CentralizingProps
    const cartCtx = useContext(CartContext);

    // React-ContextAPI-CentralizingProps
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

    // React-ContextAPI-CentralizingProps
    const hasItems = cartCtx.items.length > 0

    // Javascript-bindMethod
    const cartItemRemoveHandler = id => {

    };

    // Javascript-bindMethod
    const cartItemAddHandler = item => {
        
    };

    // React-ContextAPI-CentralizingProps
    const cartItems =
        <ul className={classes['cart-items']}>
            {/* React-ContextAPI-CentralizingProps */}
            {cartCtx.items.map(item => 
                <CartItem 
                    key={item.id} 
                    name={item.name} 
                    amount={item.amount}
                    price={item.price}
                    // Javascript-bindMethod
                    // Preconfigures a function for future execution and basically
                    // allows you to preconfigure the argument, that function will receive
                    // when executed. So we ensure that the both functions will receive
                    // the "id" and "item respectively."
                    onRemove={cartItemRemoveHandler.bind(null, item.id)}
                    // Javascript-bindMethod
                    onAdd={cartItemAddHandler.bind(null, item)}
                />
            )}
        </ul>
    ;

    return (
        // React-onClickEvent-MovinguseStateDownWithProps
        <Modal onClose={props.onClose}>
            {/* React-ContextAPI-CentralizingProps */}
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                {/* React-ContextAPI-CentralizingProps */}
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                {/* React-onClickEvent-MovinguseStateDownWithProps */}
                <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
                {hasItems && <button className={classes.button}>Order</button>}
            </div>
        </Modal>
    );
};

export default Cart;
