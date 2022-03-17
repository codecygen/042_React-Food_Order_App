Searchable Sections:

- React-ConditionalRendering-useState
- React-ComponentAsElementWrapper
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
- React-useEffect-Debouncing-useState-HeaderCartButtonBumpAnimation  
    The idea to use useEffect hook is to execute code that needs happens during lifecycle of the component instead of on specific user interactions or DOM events.  
    In this example, we will use useEffect to deploy a bump animation for "HeaderCartButton.js" component. So that it will have a bump animation when we add a new item to the cart. In order to do that, useEffect and useState have to be used at the same time.  
    Debouncing in Javascript is an exercise to enhance browser performance during any time-consuming computations.  
    Refer to this link [here](https://github.com/codecygen/040_React-Side_Effects-Reducers-Context_API) for more info on debouncing and other useEffect examples.  
- Javascript-bindMethod  
    This method ensures that the given arguments will be taken into the called functions.  
- Object-Array-SpreadOperator  
    How spread operator is used inside an object is give in this example  

- Fetch-API-Fetch-Data-Firebase

- Fetch-API-Fetch-Data-Loading-Message-Firebase

- Fetch-API-Fetch-Data-Error-Handling-Firebase

- React-Form Submission-Basic Approach
