import axios from 'axios'
import {
  PRODUCTS_LIST_REQUEST,
  PRODUCTS_LIST_SUCCESS,
  PRODUCTS_LIST_FAIL,
  PRODUCTS_DETAILS_REQUEST,
  PRODUCTS_DETAILS_SUCCESS,
  PRODUCTS_DETAILS_FAIL,
} from '../constants/productsConstants'

export const ListProducts = (keyword= '') => async (dispatch) => {
  console.log(keyword)
  try {
    dispatch({ type: PRODUCTS_LIST_REQUEST })

    const { data } = await axios.get(`http://localhost:5000/products?keyword=${keyword}`)
    console.log('get Products Data', data)
    dispatch({
      type: PRODUCTS_LIST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: PRODUCTS_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const ListProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCTS_DETAILS_REQUEST })
    console.log('imhere')

    const { data } = await axios.get(`http://localhost:5000/Products/${id}`)
    console.log('data', data)
    dispatch({
      type: PRODUCTS_DETAILS_SUCCESS,
      payload: data,
    })
    console.log('data', data)
  } catch (error) {
    dispatch({
      type: PRODUCTS_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
