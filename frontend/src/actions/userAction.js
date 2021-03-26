// make a login and get the Token
import axios from 'axios'
import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_FAIL,
  USER_LOGIN_SUCCESS,
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
///////////////
// export const loginWithGmail = (gmail) => async (dispatch) => {
//   try {
//     dispatch({
//       type: USER_LOGINWITHGMAIL_REQUEST,
//     })

//     const config = {
//       header: {
//         'Content-Type': 'application/json',
//       },
//     }
//     const { data } = await axios.post(
//       'http://localhost:5000/gmailUser/loginWithGmail',
//       { gmail },
//       config
//     )

//     dispatch({
//       type: USER_LOGINWITHGMAIL_SUCCESS,
//       payload: data,
//     })

//     localStorage.setItem('userInfoGmail', JSON.stringify(data))
//   } catch (error) {
//     dispatch({
//       type: USER_LOGINWITHGMAIL_FAIL,
//       payload:
//         error.response && error.response.data.message
//           ? error.response.data.message
//           : error.message,
//     })
//   }
// }
/////////////////
export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    })

    const config = {
      header: {
        'Content-Type': 'application/json',
      },
    }
    const { data } = await axios.post(
      'http://localhost:5000/user/login',
      { email, password },
      config
    )
console.log("login data", data)
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    })

    localStorage.setItem('userInfo', JSON.stringify(data))
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
///////////////////LOGOUT ACTION/////////////////

export const logout = () => async (dispatch) => {
  localStorage.removeItem('userInfo')
  dispatch({
    type: USER_LOGOUT,
  })
}

///////////////USER REGISTER////////////
export const register = (name, email, phoneNo, password) => async (dispatch) => {
  console.log('namw', name, email,phoneNo, password)
  try {
    dispatch({
      type: USER_REGISTER_REQUEST,
    })

    const config = {
      header: {
        'Content-Type': 'application/json',
      },
    }
    const { data } = await axios.post(
      'http://localhost:5000/user/register',
      { name, email, phoneNo,  password },
      config
    )
    console.log("userInfo000000000000000000" , data)

    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: data,
    })

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    })
    
    localStorage.setItem('userInfo', JSON.stringify(data))
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
////////////////GET USER DETAIL?????????//
export const getUserDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_DETAIL_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }
    const { data } = await axios.get(`/api/users/${id}`, config)

    dispatch({
      type: USER_DETAIL_SUCCESS,
      payload: data,
    })

    // dispatch({
    //   type: USER_LOGIN_SUCCESS,
    //   payload: data,
    // })

    // localStorage.setItem('userInfo  ', JSON.stringify(data))
  } catch (error) {
    dispatch({
      type: USER_DETAIL_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

/////////////////UPDATE USER PROFILE///////////

export const updateUserProfile = (user) => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_UPDATE_PROFILE_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }
    const { data } = await axios.put(`/api/users/profile`, user, config)

    dispatch({
      type: USER_UPDATE_PROFILE_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: USER_UPDATE_PROFILE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}