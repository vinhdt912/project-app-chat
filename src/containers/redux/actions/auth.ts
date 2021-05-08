export const login = (user) => ({
  type: "LOGIN_ACTION",
  payload: user,
});

export const logout = (payload) => ({
  type: "LOGOUT_ACTION",
  payload: payload,
});
