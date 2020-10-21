import axios from 'axios';
import { PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODCUT_LIST_FAILED, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODCUT_DETAILS_FAILED } from '../constants/productConstants';

export const listProducts = () => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_LIST_REQUEST });

        const { data } = await axios.get('/api/products');

        dispatch({
            type: PRODUCT_LIST_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: PRODCUT_LIST_FAILED,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        });
    }
}

export const listProductDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_DETAILS_REQUEST });

        const { data } = await axios.get(`/api/products/${id}`);

        dispatch({
            type: PRODUCT_DETAILS_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: PRODCUT_DETAILS_FAILED,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        });
    }
}