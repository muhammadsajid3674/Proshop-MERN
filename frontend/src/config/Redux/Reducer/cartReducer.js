import { actionType } from "../Constant/cartConstant";

export const cartReducer = (state = { cartItems: [] }, action) => {
    switch (action.type) {
        case actionType.CART_ADD_ITEM:
            const item = action.payload
            const existItem = state.cartItems.find(e => e.productId === item.productId);
            if (existItem) {
                return {
                    ...state,
                    cartItems: state.cartItems.map(e => e.productId === existItem.productId ? item : e)
                };
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, item]
                };
            };
        case actionType.CART_REMOVE_ITEM:
            return {
                ...state,
                cartItems: state.cartItems.filter(elem => elem.productId !== action.payload)
            }
        default:
            return state;
    }
}