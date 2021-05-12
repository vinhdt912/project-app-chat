import React, { createContext, useState } from "react";
import { firebase } from "../firebase";
import admin from "firebase-admin";

export const AuthContext = createContext({
  register: null,
  loading: null,
  user: {
    id: "",
    displayName: "",
    email: "",
  },
  setUser: null,
  setLoading: null,
  login: null,
  logout: null,
  error: null,
  setError: null,
});

const AuthProvider: React.FC<any> = ({ children }) => {
  const [user, setUser] = useState({
    id: "",
    displayName: "",
    email: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        loading,
        setLoading,
        error,
        setError,
        login: async (email, password) => {
          setLoading(true);
          try {
            await firebase
              .auth()
              .signInWithEmailAndPassword(email, password)
              .then((credential) => {
                // TODO start a user chat session and log the user in
                setError("");
                setUser({
                  id: credential.user.uid,
                  displayName: credential.user.displayName,
                  email: credential.user.email,
                });
              });
          } catch (e) {
            setError(e.message);
          }
          setLoading(false);
        },
        register: async (displayName, email, password) => {
          setLoading(true);
          try {
            await firebase
              .auth()
              .createUserWithEmailAndPassword(email, password)
              .then((credential) => {
                // TODO start a user chat session and log the user in
                setError("");
                credential.user.updateProfile({ displayName: displayName }).then(async () => {});
              });
          } catch (e) {
            setError(e.message);
          }
          setLoading(false);
        },
        logout: async () => {
          // TODO
          setUser({
            id: "",
            email: "",
            displayName: "",
          });
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
