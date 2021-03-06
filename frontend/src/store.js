import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
    productListReducer,
  productDetailsReducer,
} from './reducers/productsReducers'
import { sellProductListReducer } from './reducers/sellReducers'
// import { bagReducer } from './reducers/bagReducers'
import {
  userLoginReducer,
  // gmailUserLoginReducer,
  userRegisterReducer,
  // userDetailReducer,
  // userUpdateProfileReducer,
} from './reducers/userReducers'
// import {
//   orderCreateReducer,
//   orderDetailsReducer,
//   orderPayReducer,
// } from './reducers/orderReducers'
// // console.log( userLogin)

const reducer = combineReducers({
  sellProductList : sellProductListReducer,
  productList: productListReducer,
  productDetails: productDetailsReducer,
//   bookList: bookListReducer,
//   bookDetails: bookDetailsReducer,
//   bag: bagReducer,
  userLogin: userLoginReducer,
//   gmailUserLogin : gmailUserLoginReducer,
  userRegister: userRegisterReducer,
//   userDetails: userDetailReducer,
//   userUpdateProfile: userUpdateProfileReducer,
//   orderCreate: orderCreateReducer,
//   orderDetails: orderDetailsReducer,
//   orderPay: orderPayReducer,
})

// const bagItemFromStorage = localStorage.getItem('bagItems')
//   ? JSON.parse(localStorage.getItem('bagItems'))
//   : []

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null
//   const userInfoFromGmailStorage = localStorage.getItem('userInfoGmail')
//   ? JSON.parse(localStorage.getItem('userInfoGmail'))
//   : null
// const shippingAddressFromStorage = localStorage.getItem('shippingAddress')
//   ? JSON.parse(localStorage.getItem('shippingAddress'))
//   : {}
  const shippingLocationFromStorage = localStorage.getItem('currentLocation')
  ? JSON.parse(localStorage.getItem('currentLocation'))
  : {}
  console.log("shipping" , shippingLocationFromStorage)
//   const paymentMethodFromStroage= localStorage.getItem('paymentMethod')
//   ? JSON.parse(localStorage.getItem('paymentMethod'))
//   : {}
// console.log("l, l ,address", shippingAddressFromStorage)
// console.log("l, l ,Location", shippingLocationFromStorage)
const initialState = {
//   bag: {
//     bagItems: bagItemFromStorage,
//     shippingAddress: shippingAddressFromStorage,
//     shippingLocation: shippingLocationFromStorage,
//     paymentMethod: paymentMethodFromStroage,
//   },
  userLogin: { userInfo: userInfoFromStorage,
    // currentLocation: shippingLocationFromStorage
              //  userInfoGmail : userInfoFromGmailStorage
   },
   sellProductList: {
    currentLocation: shippingLocationFromStorage

   },
  productDetails : {
    Product: productDetailsReducer
  }
  
}
const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
