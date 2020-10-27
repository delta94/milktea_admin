export const USER_REQUEST = 'USER_REQUEST';
export const USER_REQUEST_FAIL = 'USER_REQUEST_FAIL';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const AUTOLOGIN_SUCCESS = 'AUTOLOGIN_SUCCESS';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

export const login = (name) => {
  return async (dispatch) => {
    dispatch({
      type: USER_REQUEST,
    });
    try {
      dispatch({
        type: LOGIN_SUCCESS,
        user: { name },
      });
    } catch (err) {
      dispatch({
        type: USER_REQUEST_FAIL,
      });
      throw err;
    }
  };
};

export const logout = () => {
  return async (dispatch) => {
    dispatch({
      type: USER_REQUEST,
    });
    try {
      dispatch({
        type: LOGOUT_SUCCESS,
      });
    } catch (err) {
      dispatch({
        type: USER_REQUEST_FAIL,
      });
      throw err;
    }
  };
};
