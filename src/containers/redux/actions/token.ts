export const setToken = (token) => {
  return {
    type: "SET_TOKEN_ACTION",
    payload: token,
  };
};
