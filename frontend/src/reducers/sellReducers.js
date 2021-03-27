import {
  USER_SELL_REQUEST,
  USER_SELL_SUCCESS,
  USER_SELL_FAIL,
  USER_CURRENT_LOCATION,
} from '../constants/sellConstant'
export const sellProductListReducer = (
  state = { currentLocation: {} },
  action
) => {
  console.log('yolo', action)
  switch (action.type) {
    case USER_SELL_REQUEST:
      return { loading: true }
    case USER_SELL_SUCCESS:
      return { loading: false, sellProduct: action.payload }
    case USER_CURRENT_LOCATION:
      console.log('act12', action.payload)
      return {
        ...state,
        currentLocation: action.payload,
      }
    case USER_SELL_FAIL:
      return { loading: false, error: action.patload }
    default:
      return state
  }
}
