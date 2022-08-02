import React from "react";
import { store } from "./../index";
import { Navigate, Outlet } from "react-router-dom";

const PublicRoutes = (props: any) => {
  const auth = store.getState().loginReducer.result;
  // check login and register page ถ้า login แล้วให้ไปหน้า reports
  return auth ? <Navigate to="/reports" /> : <Outlet />;
};

export default PublicRoutes;
