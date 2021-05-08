const initialState = {
  chatUID: "",
  userUID: "",
  userName: "",
};

const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CHAT_ACTION":
      return action.payload;
    default:
      return state;
  }
};

export default chatReducer;
