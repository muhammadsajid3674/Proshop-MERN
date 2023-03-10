import { combineReducers, applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { productListReducer, singleProductReducer } from "./Reducer/productReducer";

const configureStore = () => {
    const reducer = combineReducers({
        productList: productListReducer,
        singleProduct: singleProductReducer
    });

    const initialState = {};

    const middlewares = [thunk];

    const composeEnhancer = composeWithDevTools(applyMiddleware(...middlewares))

    const store = createStore(reducer, initialState, composeEnhancer)

    return store;
}

export default configureStore;