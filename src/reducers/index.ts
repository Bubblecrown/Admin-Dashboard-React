// 4
import { combineReducers } from "redux";
import registerReducer, { registerState } from "./register.reducer";
import loginReducer, { loginState } from "./login.reducer";
import productsReducer, { productsState } from "./products.reducer";
export default combineReducers({registerReducer, loginReducer, productsReducer});

// benefit of typescript - ใช้อ้างถึง reducer 
export interface RootReducer{
    registerReducer:registerState
    loginReducer:loginState
    productsReducer:productsState
}