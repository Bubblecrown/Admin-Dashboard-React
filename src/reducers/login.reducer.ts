// 3
import { LOGIN_FAILED, LOGIN_FETCHING, LOGIN_SUCCESS, USER_LOGOUT } from "../Constants";

export interface loginState {
  isFetching: boolean;
  isError: boolean;
  result: any;
}

const initialState: loginState = {
  isFetching: false,
  isError: false,
  result: null,
};

export default (state = initialState, { type, payload }: any): loginState => {
  switch (type) {
    case LOGIN_FETCHING:
      return { ...state, isFetching: true, isError: false, result: null };
    case LOGIN_SUCCESS:
      return { ...state, isFetching: false, isError: false, result: payload };
    case LOGIN_FAILED:
      return { ...state, isFetching: false, isError: true, result: null };
    case USER_LOGOUT:
      return initialState
    default:
      return state;
  }
};
