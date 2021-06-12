export const loginAction = (user) => ({
  type: "LOGIN_ACTION",
  payload: user,
});

export const logoutAction = () => ({
  type: "LOGOUT_ACTION",
});
