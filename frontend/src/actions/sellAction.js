import axios from 'axios'
import {
  USER_SELL_REQUEST,
  USER_SELL_SUCCESS,
  USER_SELL_FAIL,
  USER_SHIPPING_ADDRESS,
  USER_CURRENT_LOCATION,
} from '../constants/sellConstant'

export const sellListProduct = (sellProduct) => async (dispatch) => {
  try {
    console.log('sell', sellProduct)
    dispatch({ type: USER_SELL_REQUEST })
    const config = {
      header: {
        'Content-Type': 'application/json',
      },
    }
    const { data } = await axios.post(
      'http://localhost:5000/products',
      sellProduct,
      config
    )
    console.log('daaaaaata', data)
    dispatch({
      type: USER_SELL_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: USER_SELL_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

// export const saveShippingAddress = (data) => (dispatch) => {
//     dispatch({
//       type: USER_SHIPPING_ADDRESS,
//       payload: data,
//     })
//     localStorage.setItem('shippingAddress', JSON.stringify(data))
//     console.log("address" , data)
//   }
export const saveCurrentLocation = (data) => {
  console.log('dadddddddtaaaaaaaaaaaaaa', data)
  localStorage.setItem('currentLocation', JSON.stringify(data))
  console.log('Location', data)
  return {
    type: USER_CURRENT_LOCATION,
    payload: data,
  }
}
