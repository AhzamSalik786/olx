import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGOUT,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL,
    USER_DETAIL_REQUEST,
    USER_DETAIL_SUCCESS,
    USER_DETAIL_FAIL,
    USER_UPDATE_PROFILE_REQUEST,
    USER_UPDATE_PROFILE_SUCCESS,
    USER_UPDATE_PROFILE_FAIL,
    USER_UPDATE_PROFILE_RESET,
    USER_LOGINWITHGMAIL_REQUEST,
    USER_LOGINWITHGMAIL_SUCCESS,
    USER_LOGINWITHGMAIL_FAIL,
  } from '../constants/userConstants'
  
//   export const gmailUserLoginReducer = (state = {}, action) => {
//     switch (action.type) {
//       case USER_LOGINWITHGMAIL_REQUEST:
//         return { loading: true }
//       case USER_LOGINWITHGMAIL_SUCCESS:
//         return { loading: false, userInfo: action.payload }
//       case USER_LOGINWITHGMAIL_FAIL:
//         return { loadind: false, error: action.payload }
//       // case USER_LOGOUT:
//       //   return {}
//       default:
//         return state
//     }
//   } 
  export const userLoginReducer = (state = {}, action) => {
    switch (action.type) {
      case USER_LOGIN_REQUEST:
        return { loading: true }
      case USER_LOGIN_SUCCESS:
        return { loading: false, userInfo: action.payload }
      case USER_LOGIN_FAIL:
        return { loadind: false, error: action.payload }
      case USER_LOGOUT:
        return {}
      default:
        return state
    }
  }
  
  export const userRegisterReducer = (state = {}, action) => {
    switch (action.type) {
      case USER_REGISTER_REQUEST:
        return { loading: true }
      case USER_REGISTER_SUCCESS:
        return { loading: false, userInfo: action.payload }
      case USER_REGISTER_FAIL:
        return { loadind: false, error: action.payload }
  
      default:
        return state
    }
  }
  
//   export const userDetailReducer = (state = { user: {} }, action) => {
//     // console.log('state ', state)
  
//     // console.log('action ', action.type)
//     switch (action.type) {
//       case USER_DETAIL_REQUEST:
//         return { ...state, loading: true }
//       case USER_DETAIL_SUCCESS:
//         return { loading: false, user: action.payload }
//       case USER_DETAIL_FAIL:
//         return { loadind: false, error: action.payload }
  
//       default:
//         return state
//     }
//   }
  
//   export const userUpdateProfileReducer = (state = {}, action) => {
//     // console.log('state ', state)
  
//     // console.log('action ', action.type)
//     switch (action.type) {
//       case USER_UPDATE_PROFILE_REQUEST:
//         return { loading: true }
//       case USER_UPDATE_PROFILE_SUCCESS:
//         return { loading: false, success: true, userInfo: action.payload }
//       case USER_UPDATE_PROFILE_FAIL:
//         return { loadind: false, error: action.payload }
//       // case USER_UPDATE_PROFILE_RESET:
//       //   return { loadind: false, error: action.payload }
  
//       default:
//         return state
//     }
//   }
  