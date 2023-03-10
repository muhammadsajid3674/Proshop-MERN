import axios from "axios"
import BASE_URI from "../../BASE_URI"
import { PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, SINGLE_PRODUCT_FAIL, SINGLE_PRODUCT_REQUEST, SINGLE_PRODUCT_SUCCESS } from "../Constant/productListConstant"

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
                payload: error.response && error.response.data.message ? error.response.data.message : error.message
            })
        }
    }
}
export const fetchSingleProduct = (id) => {
    return async (dispatch) => {
        try {
            dispatch({ type: SINGLE_PRODUCT_REQUEST })
            const { data } = await axios.get(`${BASE_URI}/api/product/${id}`);
            dispatch({
                type: SINGLE_PRODUCT_SUCCESS,
                payload: data
            })
        } catch (error) {
            dispatch({
                type: SINGLE_PRODUCT_FAIL,
                payload: error.response && error.response.data.message ? error.response.data.message : error.message
            })
        }
    }
} 