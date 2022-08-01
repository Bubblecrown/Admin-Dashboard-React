// 2
// ส่วนที่ component ทำการเรียก และส่งข้อมูลไปที่ reducer
// เปรียบ reducer เหมือนสมอง หากเกิด stste แบบนี้มากระทบควรจะแสดงความรู้สึกออกไปยังไง

import { history } from "../index";
import { LOGIN_FAILED, LOGIN_FETCHING, LOGIN_SUCCESS, OK, server, TOKEN } from "../Constants";
import { Account } from "../types/account.type";
import { httpClient } from "../utills/httpclient";
import { loginResult } from "../types/authen.type";

export const setFetchingLogin = () => ({
  type: LOGIN_FETCHING,
});
export const setSuccessLogin = (payload: loginResult) => ({
  type: LOGIN_SUCCESS,
  payload,
});
export const setFailedLogin = () => ({
  type: LOGIN_FAILED,
});

export const loginFunc = (account: Account, naviage: any) => {
  // hook ไม่สามารถใช้ได้นอก component เลยต้องทำการส่งมันเข้ามาจาก component แทน เพื่อให้สามารถใช้งานได้ในนี้
  // ต้องใช้วิธีนี้แทน history.push เพราะ library bug
  return async (dispatch: any) => {
    try {
      // connecting
      dispatch(setFetchingLogin());
      const result = await httpClient.post<loginResult>(server.LOGIN_URL, account);

      if (result.data.result === OK) {
        localStorage.setItem(TOKEN, result.data.token!);
        // success case
        setTimeout(() => {
          dispatch(setSuccessLogin(result.data));
          naviage("/reports");
        }, 2000);
      } else {
        dispatch(setFailedLogin());
      }
    } catch (error) {
      // failed case
      dispatch(setFailedLogin());
    }
  };
};

// เวลา refresh ก็จะ restore ค่า token กลับมา
export const restoreLogin = () => {
  return (dispatch: any) => {
    const token = localStorage.getItem(TOKEN);
    if (token) {
      dispatch(setSuccessLogin({
        result:OK, token, message:"Login Successfully"
      }));
    }
  };
};
