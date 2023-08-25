import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom';
//components
import Profile from '../apps/profile/components/Profile';

const PrivateRoutes = () => {
       return (
              <Routes>
                     <Route path="/" element={<Navigate to="/profile-page" />} />
                     <Route path="/profile-page" element={<Profile />} />
              </Routes>
       )
}

export default PrivateRoutes
