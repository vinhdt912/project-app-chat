import { combineReducers } from "redux";
import authReducer from "./auth";
import chatReducer from "./chat";
import peopleReducer from "./people";
import tokenReducer from "./token";

const rootReducer = combineReducers({
  auth: authReducer,
  people: peopleReducer,
  token: tokenReducer,
  chat: chatReducer,
});
export default rootReducer;
