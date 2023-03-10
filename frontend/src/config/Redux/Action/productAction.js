import axios from "axios"
import BASE_URI from "../../BASE_URI"
import { actionType } from "../Constant/productConstant"

export const fetchProductList = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: actionType.PRODUCT_LIST_REQUEST })
            const { data } = await axios.get(`${BASE_URI}/api/product`);
            dispatch({
                type: actionType.PRODUCT_LIST_SUCCESS,
                payload: data
            })
        } catch (error) {
            dispatch({
                type: actionType.PRODUCT_LIST_FAIL,
                payload: error.response && error.response.data.message ? error.response.data.message : error.message
            })
        }
    }
}
export const fetchSingleProduct = (id) => {
    return async (dispatch) => {
        try {
            dispatch({ type: actionType.SINGLE_PRODUCT_REQUEST })
            const { data } = await axios.get(`${BASE_URI}/api/product/${id}`);
            dispatch({
                type: actionType.SINGLE_PRODUCT_SUCCESS,
                payload: data
            })
        } catch (error) {
            dispatch({
                type: actionType.SINGLE_PRODUCT_FAIL,
                payload: error.response && error.response.data.message ? error.response.data.message : error.message
            })
        }
    }
} 