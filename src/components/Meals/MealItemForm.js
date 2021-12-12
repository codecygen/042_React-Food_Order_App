// React-ConditionalRendering-useState
// React-useRef-useStateAlternativeNoReRender-forwardRef
import React, { useRef, useState } from 'react';
import Input from '../UI/Input';
import classes from './MealItemForm.module.css';

const MealItemForm = props => {
    // React-ConditionalRendering-useState
    const [amountIsValid, setAmountIsValid] = useState(true);

    // React-useRef-useStateAlternativeNoReRender-forwardRef
    const amountInputRef = useRef();

    // React-useRef-useStateAlternativeNoReRender-forwardRef
    const submitHandler = event => {
        event.preventDefault();

        // React-useRef-useStateAlternativeNoReRender-forwardRef
        // This could be "amountInputRef.current.focus()"
        // There is also such a function 
        // "amountInputRef.current" will point you to the "ref" prop
        // in the "Input" component and "amountInputRef.current.value"
        // will extract the current value of it.
        // In "amountInputRef.current.value", "current.value" will always
        // return a string even if it is a number that is provided.
        const enteredAmount = amountInputRef.current.value;
        // Converting String to Number type variable
        const enteredAmountNumber = +enteredAmount

        if(enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5) {
            // React-ConditionalRendering-useState
            setAmountIsValid(false);
            return;
        }

        // React-LiftingStateUp
        props.onAddToCart(enteredAmountNumber);
    };

    return (
        // React-useRef-useStateAlternativeNoReRender-forwardRef
        <form className={classes.form} onSubmit={submitHandler}>
            {/* React-Props-SpreadOperator */}
            <Input
                // React-useRef-useStateAlternativeNoReRender-forwardRef
                ref={amountInputRef}
                label="Amount"
                input={{
                    id: `amount_${props.id}`,
                    type: 'number',
                    min: '1',
                    max: '5',
                    step: '1',
                    defaultValue: '1'
                }}
            />
            <button>+ Add</button>
            {/* React-ConditionalRendering-useState */}
            {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
        </form>
    );
};

export default MealItemForm;
