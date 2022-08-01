// 3
import { LOGIN_FAILED, LOGIN_FETCHING, LOGIN_SUCCESS } from "../Constants";

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
    default:
      return state;
  }
};
