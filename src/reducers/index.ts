// 4
import { combineReducers } from "redux";
import registerReducer, { registerState } from "./register.reducer";
export default combineReducers({registerReducer});

// benefit of typescript - ใช้อ้างถึง reducer 
export interface RootReducer{
    registerReducer:registerState
}