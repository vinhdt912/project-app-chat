import { combineReducers } from "redux";
import authReducer from "./auth";
import chatReducer from "./chat";
import peopleReducer from "./people";

const rootReducer = combineReducers({
  auth: authReducer,
  people: peopleReducer,
  chat: chatReducer,
});
export default rootReducer;
