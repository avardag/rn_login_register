import {
  CLEAR_AUTH_STATE,
  REGISTER_FAIL,
  REGISTER_LOADING,
  REGISTER_SUCCESS,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGIN_LOADING,
} from '../../constants/actionTypes';

export default function authReducer(state, action) {
  switch (action.type) {
    case LOGIN_LOADING:
    case REGISTER_LOADING:
      return {...state, loading: true};
    case REGISTER_SUCCESS:
      return {...state, loading: false, data: action.payload};
    case LOGIN_SUCCESS:
      return {...state, loading: false, data: action.payload, isLoggedIn: true};
    case REGISTER_FAIL:
    case LOGIN_FAIL:
      return {...state, loading: false, error: action.payload};
    case CLEAR_AUTH_STATE:
      return {...state, data: null, loading: false, error: null};

    default:
      return state;
  }
}
