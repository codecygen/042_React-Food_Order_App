// React-useRef-useStateAlternativeNoReRender-forwardRef
import React from 'react';
import classes from './Input.module.css';

// React-useRef-useStateAlternativeNoReRender-forwardRef
// "forwardRef" will forward the ref props to the children component.
// Without the existence of that function, you are unable to receive
// the "ref" prop from the parent element "MealItemForm.js".
const Input = React.forwardRef((props, ref) => {
    return (
        <div className={classes.input}>
            <label htmlFor={props.input.id}>{props.label}</label>
            {/* React-Props-SpreadOperator */}
            {/* React-useRef-useStateAlternativeNoReRender-forwardRef */}
            <input ref={ref} {...props.input} />
        </div>
    );
});

export default Input;
