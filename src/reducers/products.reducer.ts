import { PRODUCTS_CLEAR, PRODUCTS_FAILED, PRODUCTS_FETCHING, PRODUCTS_SUCCESS } from "../Constants";


export interface productsState{
  result: any[];
  isFetching: boolean;
  isError:boolean;
}
const initialState:productsState = {
  result: [],
  isFetching: false,
  isError:false,
}

export default (state = initialState, { type, payload }:any)=> {
  switch (type) {
    case PRODUCTS_FETCHING:
      return { ...state, result: [], isFetching: true, isError: false };
    case PRODUCTS_SUCCESS:
      return { ...state, result: payload, isFetching: false, isError: false  };
    case PRODUCTS_FAILED:
      return { ...state, result: [], isFetching: false, isError: true };
    case PRODUCTS_CLEAR:
      return {...state, result: [], isFetching: false, isError: false}
    default:
      return state;
  }
}
