// 4
import { combineReducers } from "redux";
import registerReducer, { registerState } from "./register.reducer";
import loginReducer, { loginState } from "./login.reducer";
export default combineReducers({registerReducer, loginReducer});

// benefit of typescript - ใช้อ้างถึง reducer 
export interface RootReducer{
    registerReducer:registerState
    loginReducer:loginState
}