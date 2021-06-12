const initialState = {
  uid: "",
  displayName: "",
  email: "",
  token: "",
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_ACTION": {
      return action.payload;
    }
    case "LOGOUT_ACTION": {
      return {
        uid: "",
        displayName: "",
        email: "",
        token: "",
      };
    }
    default: {
      return state;
    }
  }
};
export default authReducer;
