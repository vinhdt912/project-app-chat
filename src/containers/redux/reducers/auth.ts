const initialState = {
  id: "",
  displayName: "",
  email: "",
  avatarUrl: "",
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_ACTION": {
      return action.payload;
    }
    case "LOGOUT_ACTION": {
      return {
        id: "",
        name: "",
        email: "",
        avatarUrl: "",
      };
    }
    default: {
      return state;
    }
  }
};
export default authReducer;
