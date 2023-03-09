import axios from "axios"
import BASE_URI from "../../BASE_URI"
import { PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from "../Constant/productListConstant"

export const fetchProductList = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: PRODUCT_LIST_REQUEST })
            const { data } = await axios.get(`${BASE_URI}/api/product`);
            dispatch({
                type: PRODUCT_LIST_SUCCESS,
                payload: data
            })
        } catch (error) {
            dispatch({
                type: PRODUCT_LIST_FAIL,
                payload: error.response
            })
        }
    }
} 