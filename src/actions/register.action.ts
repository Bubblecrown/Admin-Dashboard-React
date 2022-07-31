// 2
// ส่วนที่ component ทำการเรียก และส่งข้อมูลไปที่ reducer
// เปรียบ reducer เหมือนสมอง หากเกิด stste แบบนี้มากระทบควรจะแสดงความรู้สึกออกไปยังไง

import { REGISTER_FAILED, REGISTER_FETCHING, REGISTER_SUCCESS, server } from "../Constants";
import { Account } from "../types/account.type";
import { httpClient } from "../utills/httpclient";

export const setFetchingRegister = () => ({
  type: REGISTER_FETCHING,
});

export const setFailedRegister = () => ({
  type: REGISTER_FAILED,
});

export const setSuccessRegister = (payload: any) => ({
  type: REGISTER_SUCCESS,
  payload,
});

export const register = (account: Account) => {
  return async (dispatch: any) => {
    try {
			// connecting
      dispatch(setFetchingRegister);
      const result = await httpClient.post(server.REGISTER_URL, account);
			// success case
      dispatch(setSuccessRegister(result.data));
			
    } catch (error) {
			// failed case
      dispatch(setFailedRegister());

		}
  };
};
