 // 2
// ส่วนที่ component ทำการเรียก และส่งข้อมูลไปที่ reducer
// เปรียบ reducer เหมือนสมอง หากเกิด stste แบบนี้มากระทบควรจะแสดงความรู้สึกออกไปยังไง

import { history } from "../index";
import {
  LOGIN_FAILED,
  LOGIN_FETCHING,
  LOGIN_SUCCESS,
  OK,
  server,
} from "../Constants";
import { Account } from "../types/account.type";
import { httpClient } from "../utills/httpclient";

export const setFetchingLogin = () => ({
  type: LOGIN_FETCHING,
});
export const setSuccessLogin = (payload: any) => ({
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
      const result = await httpClient.post(server.LOGIN_URL, account);

      if (result.data.result === OK) {
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
