import axios from 'axios';
import  {  
  USER_SELL_REQUEST ,
USER_SELL_SUCCESS ,
 USER_SELL_FAIL,
 USER_SHIPPING_ADDRESS,
 USER_SHIPPING_LOCATION

} from '../constants/sellConstant'


export const sellListProduct = (user, name, type, info, description, price, runingKilometers, date, addressLocation, currentLocation,images) => async (dispatch) => {
    try {
        dispatch({type: USER_SELL_REQUEST});
        const config={
            header:{
                'Content-Type': 'application/json',
            },
        }
        const { data } = await axios.post('http://localhost:5000/products', { user, name, type, info, description, price, runingKilometers, date, addressLocation, currentLocation,images});
        dispatch({
            type : USER_SELL_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: USER_SELL_FAIL,
            payload : error.response && error.response.data.message 
            ? error.response.data.message
            : error.message,
        })
    }
};


// export const saveShippingAddress = (data) => (dispatch) => {
//     dispatch({
//       type: USER_SHIPPING_ADDRESS,
//       payload: data,
//     })
//     localStorage.setItem('shippingAddress', JSON.stringify(data))
//     console.log("address" , data)
//   }
//   export const saveLocation = (data) => (dispatch) => {
//       console.log("dadddddddtaaaaaaaaaaaaaa", data)
//     dispatch({
//       type: USER_SHIPPING_LOCATION,
//       payload: data,
//     })
//     localStorage.setItem('shippingLocation', JSON.stringify(data))
//     console.log("Location" , data)
//   }