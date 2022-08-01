import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

// 5. create store 
// redux
import { legacy_createStore as createStore, applyMiddleware, Middleware } from "redux";
import thunk from "redux-thunk";
import { Provider, useDispatch } from "react-redux";
import reducers from "./reducers";
import logger from "redux-logger";
// end redux
import { createBrowserHistory } from "history";

let middlewares: Middleware[] = [thunk];

if (true || process.env.REACT_APP_IS_PRODUCTION != "1") {
  middlewares.push(logger);
}
// คล้ายกับ useNavigate
export const history = createBrowserHistory();
export const store = createStore(reducers, applyMiddleware(...middlewares));



const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
