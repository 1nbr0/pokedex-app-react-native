import React, { createContext, useContext, useEffect, useState } from "react";
import { auth, firebase } from "../../firebase-config";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
} from "firebase/auth";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // const [initialLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
      // setInitialLoading(false)
    });
    return () => unsubscribe();
  }, []);

  const handleError = (error) => {
    setLoading(false);
    const errorCode = error.code;
    const errorMessage = error.message;
    setError(`${errorCode} : ${errorMessage}`);
  };

  const cleanError = () => {
    setError(null);
  };

  const login = async (email, password) => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password).catch((error) => {
      handleError(error);
    });
  };

  const register = async (email, password) => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password).catch((error) => {
      handleError(error);
    });
  };

  const logout = () => {
    setLoading(true);
    // setCurrentUser(null);
    signOut(auth).catch((error) => {
      handleError(error);
    });
  };

  const forgotPassword = (email) => {
    // console.log("reset email sent to " + Email);
    sendPasswordResetEmail(auth, email, null).catch((error) => {
      handleError(error);
    });
    alert("reset email sent to " + email);
  };

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        login,
        register,
        logout,
        loading,
        error,
        cleanError,
        forgotPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};
