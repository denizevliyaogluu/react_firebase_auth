import React from 'react'
import {Routes,Route, Navigate} from 'react-router-dom';
//components
import Login from "../apps/auth/components/Login";
import Register from "../apps/auth/components/Register";

const PublicRoutes = () => {
  return (
       <Routes>
       <Route path="/" element={<Navigate to="/login" />} />
       <Route path="login" element={<Login />} />
       <Route path="register" element={<Register />} />
       </Routes>
  )
}

export default PublicRoutes
