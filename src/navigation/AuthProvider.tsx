import React, { createContext, useState } from "react";
import { firebase } from "../firebase";
import admin, { database } from "firebase-admin";
import { useDispatch } from "react-redux";
import { loginAction, logoutAction } from "../containers/redux/actions/auth";
import { uploadPeopleAction } from "../containers/redux/actions/people";

export const AuthContext = createContext({
  register: null,
  loading: null,
  user: { uid: "", email: "", displayName: "", token: "" },
  setUser: null,
  setLoading: null,
  login: null,
  logout: null,
  error: null,
  setError: null,
});

const AuthProvider: React.FC<any> = ({ children }) => {
  const [user, setUser] = useState({
    uid: "",
    email: "",
    displayName: "",
    token: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const dispatch = useDispatch();

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
            await database()
              .ref("/users")
              .on("value", (querySnapShot) => {
                let data = querySnapShot.val() ? querySnapShot.val() : {};
                let userList = { ...data };
                console.log(userList);
                uploadPeopleAction(userList);
              });
            await firebase
              .auth()
              .signInWithEmailAndPassword(email, password)
              .then((credential) => {
                setError("");
                const newUser = {
                  uid: credential.user.uid,
                  email: credential.user.email,
                  displayName: credential.user.displayName,
                  token: credential.user.refreshToken,
                };
                setUser(newUser);
                // console.log(newUser);
                dispatch(loginAction(newUser));
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
                setError("");
                credential.user.updateProfile({ displayName: displayName }).then(async () => {
                  // TODO
                });
              });
          } catch (e) {
            setError(e.message);
          }
          setLoading(false);
        },

        logout: async () => {
          setLoading(true);
          await firebase
            .auth()
            .signOut()
            .then(() => {
              setUser({
                uid: "",
                email: "",
                displayName: "",
                token: "",
              });

              dispatch(logoutAction());
            });
          setLoading(false);
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
