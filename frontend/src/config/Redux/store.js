import { combineReducers, applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { cartReducer } from "./Reducer/cartReducer";
import { productListReducer, singleProductReducer } from "./Reducer/productReducer";

const configureStore = () => {
    const reducer = combineReducers({
        productList: productListReducer,
        singleProduct: singleProductReducer,
        cart: cartReducer
    });

    const cartItemFromStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []

    const initialState = {
        cart: { cartItems: cartItemFromStorage }
    };

    const middlewares = [thunk];

    const composeEnhancer = composeWithDevTools(applyMiddleware(...middlewares))

    const store = createStore(reducer, initialState, composeEnhancer)

    return store;
}

export default configureStore;