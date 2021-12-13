Searchable Sections:

- React-ConditionalRendering-useState
- React-LiftingStateUp
- React-Portals
- React-Props-SpreadOperator
- React-onClickEvent-MovinguseStateDownWithProps  
  
    For Button Click to Close Cart (App.js => Cart.js => Modal.js)  
    For Backdrop Click to Close Cart (App.js => Cart.js => Modal.js => Backdrop Function inside Modal.js)  
- React-ContextAPI-CentralizingProps 
   
    CartProvider.js uses info in cart-context.js  
    App.js imports and wraps CartProvider.js  
    HeaderCartButton.js reaches to cart-context.js and uses props controlled in CartProvider.js  
    CartProvider.js holds both info of "React-ContextAPI-CentralizingProps" and "React-useReducer-ComplexStateManagement".  
- React-useReducer-ComplexStateManagement  
    CartProvider.js holds both info of "React-ContextAPI-CentralizingProps" and "React-useReducer-ComplexStateManagement".  
- React-useRef-useStateAlternativeNoReRender-forwardRef  
    "MealItemForm.js" will forward the ref to the children component "Input.js".  
    Input we receive from "ref" prop will always be in String format even if it is a number. In order to convert it into a Number type variable, put plus sign in front of it.  
- Javascript-bindMethod  
    This method ensures that the given arguments will be taken into the called functions.  
- Object-Array-SpreadOperator  
    How spread operator is used inside an object is give in this example  
