import React from 'react'
import LoginPage from './components/pages/LoginPage'
import RegisterPage from './components/pages/RegisterPage'
import { Link, Navigate, Route, Routes } from "react-router-dom";
type Props = {}

export default function App({ }: Props) {
  return (
    <div>
      <Routes>
        <Route path='/login' element={<LoginPage />}/>
        <Route path='/register' element={<RegisterPage />}/>
        <Route path='/' element={<Navigate to={"/login"}/>}/>
        <Route path='*' element={<PageNotFound />}/>
      </Routes>
    </div>
  );
}


const PageNotFound=()=>(
    <div>
      <h1>404 Not found</h1>
      <Link to="/">Go home</Link>
    </div>
);