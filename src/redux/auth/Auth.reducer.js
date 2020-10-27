import {
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  USER_REQUEST,
  USER_REQUEST_FAIL,
} from './Auth.actions';

const initialState = {
  user: null,
  isLoading: false,
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.user,
        isLoading: false,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        user: null,
        isLoading: false,
      };
    case USER_REQUEST_FAIL:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
};

export default AuthReducer;
