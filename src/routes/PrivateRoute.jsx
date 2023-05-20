import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return (
      <div
        className="radial-progress text-center text-orange-600"
        style={{ '--value': 70 }}>
        100%</div>
    );
  }
  if (user) {
    return children;
  }
  return (
    <Navigate state={{from:location}} to='/login' replace/>
  );
};

export default PrivateRoute;