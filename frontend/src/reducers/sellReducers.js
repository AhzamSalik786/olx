import {
     USER_SELL_REQUEST ,
 USER_SELL_SUCCESS ,
 USER_SELL_FAIL ,
 USER_SHIPPING_LOCATION
} from '../constants/sellConstant'
export const sellProductListReducer = (state = {  shippingLocation: {}}, action) => {
    switch (action.type) {
        case USER_SELL_REQUEST:
            return {loading : true }
        case USER_SELL_SUCCESS:
            return { loading: false, sellProduct: action.payload }
            case USER_SHIPPING_LOCATION:
      return {
        ...state,
        shippingLocation: action.payload,
      }
        case USER_SELL_FAIL:
            return {loading: false, error: action.patload}
        default:
            return state
    }
}