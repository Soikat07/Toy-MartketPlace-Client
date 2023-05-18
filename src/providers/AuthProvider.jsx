import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import app from '../firebase/firebase.config';
import { useRoutes } from 'react-router-dom';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  
  const authInfo = {
    user,
    createUser
  }
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
  </AuthContext.Provider>
  );
};

export default AuthProvider;