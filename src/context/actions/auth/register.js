import {
  CLEAR_AUTH_STATE,
  REGISTER_FAIL,
  REGISTER_LOADING,
  REGISTER_SUCCESS,
} from '../../../constants/actionTypes';
import axiosInstance from '../../../helpers/axiosInterceptor';

export default ({
    email,
    username,
    firstName: first_name,
    lastName: last_name,
    password,
  }) =>
  dispatch => {
    dispatch({type: REGISTER_LOADING});
    axiosInstance
      .post('/auth/register', {
        email,
        username,
        first_name,
        last_name,
        password,
      })
      .then(res => {
        dispatch({type: REGISTER_SUCCESS, payload: res.data});
      })
      .catch(err => {
        dispatch({
          type: REGISTER_FAIL,
          payload: err.response
            ? err.response.data
            : {error: 'Something went wrong'},
        });
      });
  };

export function clearAuthState() {
  return function (dispatch) {
    dispatch({
      type: CLEAR_AUTH_STATE,
    });
  };
}
