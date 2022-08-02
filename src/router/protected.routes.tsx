import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { store } from "./../index";

const ProtectedRoutes = (props: any) => {
  const auth = store.getState().loginReducer.result;
  // ถ้า lodin แล้วก็ไปที่หน้าที่อยากไปได้เลย แต่ถ้ายังให้ไปหน้า login ก่อน
  return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
