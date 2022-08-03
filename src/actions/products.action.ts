import { PRODUCTS_CLEAR, PRODUCTS_FAILED, PRODUCTS_FETCHING, PRODUCTS_SUCCESS, server } from "../Constants";
import { httpClient } from "../utills/httpclient";

export const setFetchingProducts = () => ({
  type: PRODUCTS_FETCHING,
});

export const setSuccessProducts = (payload: any) => ({
  type: PRODUCTS_SUCCESS,
  payload,
});

export const setFailedProducts = () => ({
  type: PRODUCTS_FAILED,
});

export const setClearProducts = () => ({
  type: PRODUCTS_CLEAR,
});

export const productsFunc = () => {
  return (async (dispatch: any) => {
    try {
      dispatch(setFetchingProducts());
      const result = await httpClient.get(server.PRODUCT_URL);
      dispatch(setSuccessProducts(result.data));
    } catch (error) {
      dispatch(setFailedProducts());
    }
  });
};
