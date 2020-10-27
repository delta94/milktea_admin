import {
  MEMBER_GET_SUCCESS,
  MEMBER_REQUEST,
  MEMBER_REQUEST_FAIL,
} from './Member.actions';

const initialState = {
  members: [],
  isLoading: false,
};

const MemberReducer = (state = initialState, action) => {
  switch (action.type) {
    case MEMBER_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case MEMBER_GET_SUCCESS:
      return {
        ...state,
        members: action.members,
        isLoading: false,
      };
    case MEMBER_REQUEST_FAIL:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
};

export default MemberReducer;
